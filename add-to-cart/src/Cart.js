import React from 'react'
import { useCart } from 'react-use-cart'
import './Cart.css'

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     }=useCart();
     const handle = ()=>{
      
      alert("The total price is:- ₹"+`${cartTotal}`)

     }

     if(isEmpty)return <h1 className='isEmpty-h1'>Your Cart is Empty</h1>
  return (
    <section className='section-container'>
        <div className='row-container'>
            <div className='col-12'>
              <h1 className='notEmpty-h1'>Cart List</h1>
              <table className='table table-light table-hover m-0'>
                <tbody>
             {items.map((item,index)=>{
                return(
                <tr key={index}>
                    <td>
                     <img src={item.img} style={{height:'6rem'}} alt='No image' />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity:({item.quantity})</td>
                    <td>
                        <button className='btn btn-info ms-2'
                        onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>
                        <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</button>
                        <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
                    </td>

                </tr>
                )
             })}

</tbody>
              </table>
            </div>
        <div className='col-auto ms-auto'>
             <h2>Total Price: ₹{cartTotal}</h2>
        </div>
        <div className='col-auto'>
          <button className='btn btn-danger m-2' onClick={()=>emptyCart()}>Clear Cart</button>
          <button className='btn btn-primary m-2' onClick={handle}>Buy Now</button>
        </div>
        </div>
    </section>
  )
}

export default Cart
