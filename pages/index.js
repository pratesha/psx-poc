export default function HomePage() {
    return <></>
}


export async function getServerSideProps(context) {
    if (context.req.url === '/') {
        context.res.writeHead(302, {
            Location: '/all',
        });
        context.res.end();
    }
    return { props: {} };
}