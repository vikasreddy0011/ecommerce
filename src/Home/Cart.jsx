import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { getMyProducts } from '../API/api';
import { useEffect } from 'react';
export default function Cart(){
    const [item,setItems] = React.useState(0);


    useEffect(()=>{
        //Get all the products from the cart and show it on the cart section
        getMyProducts(setItems)
    },[])
    return(
        <>
        <div className = "cart">
            <div className="yourcart">
                <h6>Your cart</h6>
            </div>
            <div className="items">
                {(item==undefined|| item == 0)?<h6 style={{ float :"right",textIndent: "2em"}}>view items</h6>:<></>}
                <h6 style={{ float :"right"}}>{((item.length==undefined|| item.length == 0)?0:item.length)+" items"}</h6>
            </div>
            <hr style={{ border: "1px solid black",marginTop:"20%"}}/>
            <div>
            <table>
                {console.log(item)}
                {/* {item?item.map(eachItem=>{
                    return(
                        <tr>
                        <td><b>{eachItem.title}</b></td>
                        <td>{eachItem.price}</td>
                        <td ><input value="1" style={{width:"25%",  userSelect: "none"  }}></input><DeleteIcon/></td>
                        </tr>
                    )
                }):<></>} */}
                
                <br/>
            </table>
            </div>
        </div>
        
        </>
    )
}