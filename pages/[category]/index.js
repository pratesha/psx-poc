import Toolbar from '@mui/material/Toolbar';
import style from '@/styles/index.module.css'
import CategoryList from '@/components/CategoryList';
import { useRouter } from 'next/router';
import MasonryImageList from '@/components/MasonaryImageGrid';
import { AppBar } from '@mui/material';
import axios from 'axios'


const categories = [
    { id: 0, name: 'all' },
    { id: 1, name: 'abstract' },
    { id: 2, name: 'aerial' },
    { id: 3, name: 'animals' },
    { id: 4, name: 'architecture' },
    { id: 5, name: 'black & white' },
    { id: 6, name: 'close up' },
    { id: 7, name: 'documentary' },
    { id: 8, name: 'events' },
    { id: 9, name: ' family' },
    { id: 10, name: 'fashion' },
    { id: 11, name: 'fine art' },
    { id: 12, name: 'food' },
    { id: 13, name: 'landscape' },
    { id: 14, name: 'lifestyle' },
    { id: 15, name: 'nature' }
]

export default function HomePage({ images, error, category }) {
    const router = useRouter();
    if (router.isFallback) return <h1>Loading...</h1>
    return <div className={style.container}>
        <AppBar position='fixed' className={style.appBar}>
            <Toolbar className={style.toolbar}>
                {categories.map(cat => {
                    return <CategoryList category={cat.name} selected={cat.name === category} key={cat.id} />
                })}
            </Toolbar>
        </AppBar>
        <MasonryImageList category={category} images={images} />
    </div>
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { category: 'all' } }],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const { category = 'all' } = params;
    try {
        const { data } = await axios.get(`https://api.pexels.com/v1/search?query=${category}&per_page=50&fit=crop&gravity=center`, {
            headers: {
                Authorization: process.env.pexelApiKey,
            },
        })
        return {
            props: {
                images: data['photos'],
                error: false,
                category: category
            }
        }
    } catch (e) {
        return {
            props: {
                category: category,
                images: [],
                error: 'Something went wrong'
            }
        }
    }

}