import './App.css';
import Product from "./Product";
import Category from "./Category"
import {useState,useEffect}  from 'react';
const products = [
  {name:"appel",srcImg: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_small/DEZ52_S_P_7296073440604_1.png", catgory :"frut",incame:100,price:5},
  {name:"banna",srcImg: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_small/AJE58_S_P_7296073456261_1.png", catgory :"frut",incame:80,price:7.5},
  {name:"chips",srcImg: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_small/UEF56_S_P_7296073170860_1.png", catgory :"frozensFood",incame:50,price:25},
  {name:"milk",srcImg: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_small/FBI28_S_P_56845_1.png", catgory :"diry",incame:50,price:6.5},
  {name:"kotej",srcImg: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_small/IHA18_S_P_41445_1.png", catgory :"diry",incame:180,price:6.7},
]
const catgoryList=[]

function App() {
  const [counter,setNewCounter]= useState (0)

  products.forEach((v)=>{
    if(catgoryList&&catgoryList.indexOf(v.catgory)==-1){
       catgoryList.push(v.catgory)
    }
  })

  return (
    <div className="App">
      <ul className='catgires'>
        {catgoryList.map((v,i)=>{
          return<Category key={i} name = {v}/>
        })}
      </ul>
      <div className ="App-header">
        {products.map((v,i) => {
          return<Product key = {i} name ={v.name} function = {()=> {setNewCounter(--v.incame);}} src_Img={v.srcImg} price = {v.price} incame={v.incame} />
        })}
      </div>
    </div>
  );
}

export default App;
