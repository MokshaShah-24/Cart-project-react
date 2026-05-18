import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{useState} from 'react';
import Footer from './components/Footer';
import AddItem from './components/AddItem.js';
import iphoneImg from './assets/iphone.png';
import phoneImg from './assets/phone.png';
import bluetoothImg from './assets/bluetooth.png';
import speakerImg from './assets/speaker.png';
import laptopImg from './assets/laptop.png';

function App() {
  const productList = 
  [
    {
      img: iphoneImg,
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },

    {
      img: phoneImg,
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },

    {
      img: bluetoothImg,
      price: 999,
      name: "Wireless Bluetooth",
      quantity: 0,
    },

    {
      img: speakerImg,
      price: 4999,
      name: "Bluetooth Speaker",
      quantity: 0,
    },

    {
      img: laptopImg,
      price: 49999,
      name: "Dell Laptop",
      quantity: 0,
    }
  ]

  let [productListData, setProductList] = useState(productList);
  let[totalAmount, setTotalAmount] = useState(0);

 const incrementQuantity = (index) => {
  let newProductList = [...productListData];

  newProductList[index].quantity++;

  let newTotalAmount =
    totalAmount + newProductList[index].price;

  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
};

  const decrementQuantity = (index) => {
  let newProductList = [...productListData];
  let newTotalAmount = totalAmount;

  if (newProductList[index].quantity > 0) {
    newProductList[index].quantity--;

    newTotalAmount =
      newTotalAmount - newProductList[index].price;
  }

  setTotalAmount(newTotalAmount);
  setProductList(newProductList);
};

  const resetQuantity = () =>
  {
    let newProductList = [...productList];
    newProductList.map((products) =>{
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

    const removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
   newTotalAmount =
  totalAmount -
  (newProductList[index].quantity *
   newProductList[index].price);
    newProductList.splice(index,1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

   const addItem = (index) =>{
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
   <>

    <Navbar/>
    <main className = 'container mt-5'>
    <ProductList productList = {productListData} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem= {removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>

   </>
  );
}

export default App;
