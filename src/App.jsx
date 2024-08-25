import React, { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Product from "./components/Product"
import image1 from "./assets/10004.jpg";
import image2 from "./assets/10005.jpg";
import image3 from "./assets/10006.jpg";
import image4 from "./assets/10007.jpg";
import image5 from "./assets/10010.jpg";
import image6 from "./assets/10011.jpg";
import image7 from "./assets/10012.jpg"
import { useState } from "react";
import { toast } from "react-hot-toast";
import Cart from "./components/Cart"
import AddProduct from "./components/AddProduct"
import Items from "./components/Items"
import Login from "./components/Login"


function App() {

  let item1 = [
    {
        id : 1,
        image : image1,
        title : "Dress- Pink & Blue",
        mrp : 1699.00,
        price : 699.01
    },
    {
        id : 2,
        image : image2,
        title : "Dress- Black & Yellow",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 3,
        image : image3,
        title : "Dress- Blue",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 4,
        image : image4,
        title : "Dress- Pink & Leaves",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 5,
        image : image1,
        title : "Dress- PartyWear",
        mrp : 1099.00,
        price : 449.00
    },
    {
        id : 6,
        image : image6,
        title : "Dress - Shorts Blue",
        mrp : 1099.00,
        price : 449.00
    },
    {
        id : 7,
        image : image7,
        title : "Dress - Blue & White",
        mrp : 1099.00,
        price : 450.00
    },
    {
        id : 8,
        image : image1,
        title : "Dress- Pink & Blue",
        mrp : 1699.00,
        price : 699.01
    },
    {
        id : 9,
        image : image2,
        title : "Dress- Black & Yellow",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 10,
        image : image3,
        title : "Dress- Blue",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 11,
        image : image4,
        title : "Dress- Pink & Leaves",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 12,
        image : image5,
        title : "Dress- PartyWear",
        mrp : 1099.00,
        price : 449.00
    },
    {
        id : 13,
        image : image6,
        title : "Dress - Shorts Blue",
        mrp : 1099.00,
        price : 449.00
    },
    {
        id : 14,
        image : image7,
        title : "Dress - Blue & White",
        mrp : 1099.00,
        price : 450.00
    },
    {
        id : 15,
        image : image1,
        title : "Dress- Pink & Blue",
        mrp : 1699.00,
        price : 699.00
    },
    {
        id : 16,
        image : image2,
        title : "Dress- Black & Yellow",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 17,
        image : image3,
        title : "Dress- Blue",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 18,
        image : image4,
        title : "Dress- Pink & Leaves",
        mrp : 2100.00,
        price : 799.00
    },
    {
        id : 19,
        image : image5,
        title : "Dress- PartyWear",
        mrp : 1099.00,
        price : 449.00
    },
    {
        id : 20,
        image : image6,
        title : "Dress - Shorts Blue",
        mrp : 1099.00,
        price : 449.00
    },
  ]
  const [cart, setcart] = useState([])
  const [g,setg]= useState(null)
  const [items, setitems] = useState(item1)
  let navigate = useNavigate();
  
  //to make sure that page start at the top after going to new route
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);
 
  function addToCart(id, quantity,size){
    toast.success("Item Added to Cart!");
    let data1 = items.find((item)=> item.id==id)
    let data= {...data1}
    data.quantity=quantity
    data.size = size
    console.log(cart,items)
    setcart([...cart, data])
  }

  function deleteToCart(id,quantity, size){
    toast.success("Item Removed");
    setcart(cart.filter((item)=>!(item.id==id && item.quantity==quantity && item.size==size)))
  }

  function addProduct(event){
    let newProduct={}
    newProduct.id=Number(event.target.id.value);
    newProduct.title=event.target.title.value;
    newProduct.mrp=Number(event.target.mrp.value);
    newProduct.price=Number(event.target.price.value);
    newProduct.image=g;
    event.target.id.value='';
    event.target.title.value="";
    event.target.mrp.value='';
    event.target.price.value='';
    event.target.image.value=null;

    toast.success("New Product Added!");
    setitems([...items, newProduct])
    navigate("/")
  }

  return (
    <Routes>
      <Route path="/" element={<Layout length={cart.length}/>}>
        <Route index element={<Home items={items}/>}/>
        <Route path="/product">
          <Route index element={<Items items={items}/>}/>
          <Route path=":productId" element={<Product items={items} addToCart={addToCart}/>}/>
        </Route>
        <Route path="/cart" element={<Cart cart={cart} deleteToCart={deleteToCart}/>}/>
        <Route path="/addProduct" element={<AddProduct addProduct={addProduct} setg={setg}/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  )
}

export default App
