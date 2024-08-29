import React from 'react'
import Itemcard from './itemcard'
import Data from './data.js'
import './Home.css'

const Home = () => {
  return (
    <>
      <h1 className='page-title'>Electronic Product Catalog</h1>
      <section className='section-container'>
        <div className='row-container'>
          {Data.productData.map((item, index) => {
            return (
              <Itemcard 
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index} />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home
