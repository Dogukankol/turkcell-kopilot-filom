import React from 'react'
import { store } from "@/stores";
import { getSingleProduct } from "@/stores/products/productSlice";

export default async function ProductDetailPage({ params}) {
  const {payload: product} = await store.dispatch(getSingleProduct(params.id)) 
  return (
    <div>
      <h1>{product.title}</h1>
      {product.description}
    </div>
  )
}
