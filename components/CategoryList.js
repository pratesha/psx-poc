import style from '@/styles/CategoryList.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CategoryList({ category, selected }) {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/${category}`)
    }

    return <div className={style.link} onClick={handleClick}>
        <div className={`${style.category} ${selected ? style.selected : ''}`}>
            <div className={style.imageOverlay}>
                <img src={`http://unsplash.it/100/40?${category}&gravity=center`} alt={`This is ${category} of images`} />
            </div>
            <div className={style.textOverlay}>
                <h5>{category}</h5>
            </div>
        </div>
    </div>
}