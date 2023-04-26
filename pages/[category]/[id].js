import style from '@/styles/IndividualComponent.module.css'
import axios from 'axios'


export default function IndividualComponent({ image, error, category, id }) {
    if (error) return <h1>Something went wrong...</h1>
    return <div className={style.container}>
        <img src={image.src.landscape} alt={image.alt} className={style.image} />
    </div>
}


export async function getServerSideProps(context) {
    const { params } = context;
    const { category = 'all', id } = params;
    try {
        const { data } = await axios.get(`https://api.pexels.com/v1/photos/${id}`, {
            headers: {
                Authorization: process.env.pexelApiKey,
            },
        })
        return {
            props: {
                image: data,
                error: false,
                category: category,
                id: id
            }
        }
    } catch (e) {
        return {
            props: {
                category: category,
                id: id,
                image: {},
                error: 'Something went wrong'
            }
        }
    }

}