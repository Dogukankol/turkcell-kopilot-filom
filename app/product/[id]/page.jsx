import React from 'react'
import ProductDetail from '@/containers/productDetail'
import { store } from "@/stores";
import { getSingleProduct } from "@/stores/products/productSlice";

export default async function ProductDetailPage({ params}) {
  const {payload: product} = await store.dispatch(getSingleProduct(params.id)) 
  return (
    <ProductDetail {...product} />
  )
}
