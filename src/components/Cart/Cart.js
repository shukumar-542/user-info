import React from 'react';
import './Cart.css'

const Cart = (props) => {
      const cart = props.cart;
      // console.log(cart);
      // const totalSalary = cart.reduce((total, salary) => total + salary.slary , 0);
      let totalSalary =  0;
      for (let i = 0; i < cart.length; i++) {
            const salary = cart[i];
            
            totalSalary =totalSalary +parseFloat(salary.slary) ;
            
      }
      

      return (
            <div className='added-friend'>
            <p>Total friends:{cart.length} </p>
       
            
            <p>salary : {totalSalary}</p>
            
                  
            </div>
      );
};

export default Cart;