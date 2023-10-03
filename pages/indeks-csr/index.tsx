import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Head from "next/head"

export default function IndexCsr() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
 
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/products?limit=10')
            const repo = await res.json()
            setData(repo)
            setIsLoading(false)
        }
    
        fetchData().catch((e) => {
            // handle the error as needed
            console.error('An error occurred while fetching the data: ', e)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <Head>
                <title>indeks page CSR</title>
                <meta name="description" content="Halaman indeks CSR" />
            </Head>

            { isLoading ? 
                <h3>Loading Indeks CSR</h3>
            :
                <div>
                    {
                        data?.products.map((product: any) => (
                            <div key={product?.id}>
                            <Link href={`/detail/${product?.id}`}>{product?.title}</Link>
                            <p>{product?.description}</p>
                            </div>
                        ))
                    }
                </div>
            }
        </>
    )
}