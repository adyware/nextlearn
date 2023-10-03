import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from "next/link"
import Head from "next/head"

type Repo = {
    products: any[],
    total: number,
    skip: number,
    limit: number
}
 
export const getServerSideProps = (async (context) => {
  const res = await fetch('https://dummyjson.com/products?limit=10')
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
                <title>indeks page SSR</title>
                <meta name="description" content="Halaman indeks SSR" />
            </Head>
            <div>
                {
                    repo.products.map((product: any) => (
                    <div key={product?.id}>
                        <Link href={`/detail/${product?.id}`}>{product?.title}</Link>
                        <p>{product?.description}</p>
                    </div>
                    ))
                }
                <hr />
            </div>
        </>
    )
}