/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { getAllProducts } from '../API/api';
import { FaStar } from "react-icons/fa";    
import './style.css';
import { getProducts,addProductToCart } from '../API/api';

export default function Container({activeKey}){

    const [products,setProducts] = React.useState('');

    useEffect(()=>{
        getProducts(setProducts,activeKey)
    },[activeKey])

    // Add the products to the cart
    const addProduct=(e)=>{
        console.log(e.target.id);
        const id = e.target.id;
        products.map(item=>{
            if(item.id == id){
                //  addProductToCart(item);
            }
        })
    }

    return(
        <>
        <div className="box">
            <div className="container">
                {products?Object.entries(products)
                .map((item)=>{
                    return (
                    <>
                    <div class="card" style={{"float":"left"}}>
                        <img src={item[1].image} className="photo" />
                        <div class="container-inner">
                            <h5><b>{item[1].title}</b></h5> 
                        </div>
                        <div className="container-bottom">
                            <hr/>
                            <div className ="container-bottom-price">
                                <p>{'$'+item[1].price}</p>
                            </div>
                            <div className='container-bottom-primary'>
                                <button className="btn btn-primary" id={item[1].id} onClick={addProduct}>Add</button>
                            </div>
                            <div className="container-bottom-vertical">
                                <hr/>
                            </div>
                        </div>
                        
                    </div>
                
                    </>)
                })
                :<></>
                }  
            </div>
        </div>

        </>
    )
}