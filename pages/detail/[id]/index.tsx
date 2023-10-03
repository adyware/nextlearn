import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import OtherProducts from '@/containers/detail/others' 
import Detail from '@/components/detail' 
import Head from "next/head"

type Repo = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
 
export const getServerSideProps = (async (context) => {
    const res = await fetch(`https://dummyjson.com/products/${context.params?.id}`)
    const repo = await res.json()
    return { props: { repo } }
}) satisfies GetServerSideProps<{
    repo: Repo
}>
 
export default function Indeks({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <>
            <Head>
                <title>Halaman Detail Produk</title>
                <meta name="description" content="Halaman Detail Produk" />
            </Head>
            <div>
                <Detail detailData={repo} />

                <hr />
                <OtherProducts category={repo.category} />
            </div>
        </>
      )
}