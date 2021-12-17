import './App.css';
import React, {useState, useEffect} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header"
import Home from './Components/Home';
import Cart from './Components/Cart';
import Payment from './Components/Payment'
import Login from './Components/Login'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App () {
  const [cartItems, setCartItems] = useState([])
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isLogin, setLogin] = useState(false)
  const [menuItems, setMenuItems] = useState([]);
  const [menuSearchItems, setMenuSearchItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems)
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
}

  // useEffect(() => {
  //   const axiosPosts = async () => {
  //     const res = await axios('api/items')
  //     console.log(res.data.items)
  //     setItems(res.data.items)
  //     setLoading(false)
  //   }
  //   axiosPosts()
  // }, [])

  useEffect(() => {
    const axiosPosts = () => {
      axios.get('api/items')
      .then((res) => {
        const data =  res.data.items
        setItems(data)
        setMenuItems(data)
        setMenuSearchItems(data)
        setLoading(false)
      }).catch(error => console.log(error))
    }
    axiosPosts()
  }, [])

  
  return (
    isLoading? <div></div>:
    <Router>
      <Header countCartItems={cartItems.length} isLogin={isLogin} items={items} setMenuItems={setMenuItems} setMenuSearchItems={setMenuSearchItems}/>
      <Routes>
        <Route exact path={"/"} element={<Home onAdd={onAdd} isLogin={isLogin} menuItems={menuItems} menuSearchItems={menuSearchItems} setMenuSearchItems={setMenuSearchItems} />} />
        <Route exact path="/cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/login" element={<Login isLogin={isLogin} setLogin={setLogin} />} />
      </Routes>
    </Router>
  )
}

export default App
