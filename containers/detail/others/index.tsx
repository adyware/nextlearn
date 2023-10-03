import React, { useState, useEffect } from 'react'
import Link from "next/link"
import OtherLoading from "./loading"
import { NextPage } from "next";

interface Props {
    category: string;
}

const OtherProducts: NextPage<Props> = ({ category }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=10`)
        const repo = await res.json()
        setData(repo)
        setIsLoading(false)
        }
    
        fetchData().catch((e) => {
        // handle the error as needed
        console.error('An error occurred while fetching the data: ', e)
        setIsLoading(false)
        })
    }, [category])

    if (isLoading) {
        return <OtherLoading />
    } else {
        return (
        <div>
            <h1>Produk Lain: </h1>
            {
            data?.products.map((product: any) => (
                <div key={product?.id}>
                <Link href={`/detail/${product?.id}`}>{product?.title}</Link>
                <p>{product?.description}</p>
                </div>
            ))
            }
            <hr />
        </div>
        )
    }
}

export default OtherProducts