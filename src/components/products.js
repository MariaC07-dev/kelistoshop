import React, { useState } from "react";
import {Flex, Box} from "rebass"

import { MyBasket, Button } from "./shared/styledComponents"

import allproducts from "../assets/data/products"



function ProductList() {
  const [cart, setCart] = useState([])
  const [products] = useState(allproducts)

  const addToCart = (product) =>{
    setCart([...cart, product])

  }

  return (
    <div>
    <h1 style ={{textAlign:"center"}}>Products</h1>
      <Flex>
        <Box/>
        <Box>
          <MyBasket>Your basket {cart.length} item(s)</MyBasket>
        </Box>
      </Flex>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
    {
       products && products.length>0 && products.map((product)=>{
         return (
           <div key={product.productId} style={{padding:"40px"}}>
           <div>{<img src={product.image} alt="" width="100px" height="100px"/>}</div>
           <h3>Product: {product.title}</h3>
           <h4>SKU Code: {product.sku}</h4>
           <h5>Price: {product.price}</h5>
           <p><b>Description:</b> {product.description}</p>
           <Button onClick={() => addToCart(product)}>Add to basket</Button>
         </div>
         )
       }
      )
    }
      </div>
    </div>
  )
}


export default ProductList
