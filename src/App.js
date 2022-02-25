
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';

import Friends from './components/Friends/Friends';
import data from './data/data.json'

function App() {
  const [users, setUsers]=useState([]);
  const [cart, setCart]= useState([]);

 console.log(data);
  useEffect(()=>{
    setUsers(data);
  },[])

  const handleButton = (user)=>{
    // console.log('clicked',user );
    const newCart = [...cart,user];
    setCart(newCart);
  }
  return (
    <div className="App">
     <div style={{display:'flex'}}>
     
      <ul>
        {
          users.map(user =><Friends user={user} handleButton={handleButton}></Friends>)
        }
      </ul>
      
      {/* <Friends users = {users}></Friends> */}
     
      <div><Cart cart= {cart}></Cart></div>
     </div>
    </div>
  );
}

export default App;
