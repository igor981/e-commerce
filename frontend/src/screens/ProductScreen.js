import React from 'react'
import './ProductScreen.css'

import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions'



const ProductScreen = ({match, history}) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.getProductDetails)
  const {loading, error, product} = productDetails

  const addToCartHandler = (e) => {
    dispatch(addToCart(product._id, qty))
  }

  useEffect(() => {
   if (product && id !== product._id){
     dispatch(getProductDetails(id))
   }
  }, [dispatch, loading, error])
  
  return (
    <div className='productscreen'>
   {loading ? <h2>Loading</h2> : error ? <h2>{error}</h2> : (
     <>
        <div className='productscreen__left'>
          <div className='left__image'>
            <img src={product.imageUrl}
                  alt={product.name}/>
          </div>
          <div className='left__info'>
            <p className='left__name'>{product.name}</p>
            <p className='left__price'>{product.price}</p>
            <p className='left__description'>
            {product.description}
            </p>
          </div>
        </div>
        <div className='productscreen__right'>
          <div className='right__info'>
            <p>
              Price: <span>{product.price}</span>
            </p>
            <p>
              Status: <span>{product.countInStock > 0 ? 'In Stock' : 'Out of stock'}</span>
            </p>
            <p>
              Qty
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
               {[...Array(product.countInStock).keys()].map((x) => {
                 return <option key={x + 1}value={x + 1}>{x + 1}</option>
               })}
              </select>
            </p>
            <p>
              <button type='button' onClick={ (e) => addToCartHandler(e)}>Add To Cart</button>
            </p>
          </div>
        </div>
        </>
      )} 
    </div>
  )
}

export default ProductScreen