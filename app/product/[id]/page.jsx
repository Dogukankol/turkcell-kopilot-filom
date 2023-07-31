import React from 'react'
import {Metadata} from 'next'
import ProductDetail from '@/containers/productDetail'
import { store } from "@/stores";
import { getSingleProduct } from "@/stores/products/productSlice";

export async function generateMetadata({ params, searchParams }, parent) {
  const {payload: product} = await store.dispatch(getSingleProduct(params.id)) 
 
  return {
    title: `Kopilot Filom | ${product.title}`,   
    description: product.description, 
    openGraph: {
      images: product.images[0],
    },
  }
}

export default async function ProductDetailPage({ params}) {
  const {payload: product} = await store.dispatch(getSingleProduct(params.id)) 
  return (
    <ProductDetail {...product} />
  )
}
