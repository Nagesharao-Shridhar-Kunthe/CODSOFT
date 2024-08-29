import React from 'react'
import './ItemCard.css'
import { useCart } from "react-use-cart"

const Itemcard = (props) => {
const { addItem }=useCart();


  return (
    <div className="card-container">
        <div className="card">
            <img src={props.img} className="card-img-top " alt={props.title} />
            <div className="card-body ">
                <h5 className="card-title">{props.title}</h5>
                <h5 className="card-price">₹{props.price}</h5>
                <p className="card-text">{props.desc}</p>
                <button className="btn-success" onClick={()=>addItem(props.item)}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Itemcard
