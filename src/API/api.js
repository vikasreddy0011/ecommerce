import { USERID } from "../App";


const SERVICE_URL = 'https://fakestoreapi.com/'
const PRODUCT = 'products';
const CATEGORY = '/categories'

async function getAllProducts(){
    return await fetch(SERVICE_URL+PRODUCT)
    .then(res=>res.json())
   
}

async function getProductCategories(){
     return await fetch(SERVICE_URL+PRODUCT+CATEGORY)
    .then(res=>res.json())  
}

async function getProducts(setProducts,activeKey){
    var response;  

    switch(activeKey){
        case "all":
             response = await fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            break;
        case "0":
             response = await fetch('https://fakestoreapi.com/products/category/electronics')
            .then(response => response.json())
            .then(data => setProducts(data))
            break;
        case "1":
            response = await fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(response => response.json())
            .then(data => setProducts(data))
            break;
        case "2":
            response = await fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(response => response.json())
            .then(data => setProducts(data))
            break;
        case "3":
            response = await fetch("https://fakestoreapi.com/products/category/women's clothing")
            .then(response => response.json())
            .then(data => setProducts(data))
            break;
        default:
            response = await fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            break;
    }
}

const addProductToCart = (item)=>{
    fetch(SERVICE_URL+'carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:USERID,
                    date:'2020-01-01',
                    products:[{productId:item.id,quantity:1}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
const getMyProducts = (setItems)=>{
    fetch(SERVICE_URL+'/carts/user/'+USERID )
            .then(res=>res.json())
            .then(json=>{setItems(json)})
}
const createUser = (setUserId)=>{
    fetch(SERVICE_URL+'users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'vikasreddy@gmail.com',
                    username:'vikas',
                    password:'vikasreddy$',
                    name:{
                        firstname:'Vikas',
                        lastname:'Reddy'
                    },
                    address:{
                        city:'Hyderabad',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>setUserId(json));
}
// Login is not required 
const login = ()=>{
    fetch(SERVICE_URL+'auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json));
}

export { 
    getAllProducts ,
    getProductCategories,
    getProducts,
    addProductToCart,
    getMyProducts,
    createUser,
    login
}
