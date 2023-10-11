import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Products() {


  const [data, setData] = useState([])

  useEffect(() => {
      fetch('https://dummyjson.com/products').then((resp) => {
          resp.json().then((result) => {
              setData(result.products)
              console.log(result.products)
          })
      })

  }, [])

   
  // function handleBuy(e){
  //   e.preventDefault();
  //   Navigate('/productpage')

  // }


  const responsive = {

    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 577 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 576, min: 420 },
      items: 2
    }
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="col text-center my-4">
            <h1 className='h3 fw-bold text-uppercase'>Products</h1>
          </div>
          <div className="row d-flex justify-content-between">
            <Carousel responsive={responsive}>
              {
               data.map((item) => {
                return (
                  <div key={item.id} className='col-lg-11 col-md-11 col-sm-11 col-11 mb-3 shadow new_arrival'>
                    <div className="ratio ratio-4x3 object-cover">
                      <img width="100%" src={item.images[3]} alt="" />
                    </div>
                    <div className='text-center py-4'>
                      <h1>Device: {item.title}</h1>
                      <h2>Price: {item.price}/-</h2>
                      <Link to={`/productpage/${item.id}`}>Buy Now</Link>
                    </div>
                  </div>

                  )
                })
              }
            
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
