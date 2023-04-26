import Link from "next/link";

export default function MasonryImageList({ images = [], category }) {
    const sizes = ['medium', 'medium', 'large', 'landscape', 'medium', 'medium', 'portrait', 'landscape']
    return (
        <div className="grid-wrapper">
            {
                images.map((item, idx) => {
                    return <div className={`${sizes[idx % sizes.length]}`} key={item.id}>
                        <Link href={`/${category}/${item.id}`}>
                            <img src={item.src[`${sizes[idx % sizes.length]}`]} alt={item.alt} />
                        </Link>
                    </div>
                })
            }
        </div>
    );
}


