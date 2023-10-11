




import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const [data, setData] = useState([])


  const prductID = useParams()
  const abc = prductID.index

  useEffect(() => {
    fetch('https://dummyjson.com/products').then((resp) => {
      resp.json().then((result) => {
        setData(result.products)

      })
    })

  }, [])


  const selectedProduct = data[abc - 1]



  return (
    <>

      <div className="container fluid">
        <div className="container xl">
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col path px-4 ">
              <p>HOME / MAKE UP / LIP MAKE UP / LIPSTICK / MATTE FINISH </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5" key={abc}>
              <div className=" product-image">
                {selectedProduct && <img width="100%" src={selectedProduct.images[1]} alt="" />}
                <i className="fa-solid fa-heart heart"></i>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 px-4">
              <div className="row  ">
                <div className="col product-description mt-4 ">
                 
                  {selectedProduct &&  <h1>{selectedProduct.title}</h1>}
                  <div className="d-flex   align-items-center mb-4">
                    <div className="ratings h6">
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="text-start">
                      <h5 className="review-count h6 fw-normal">(220)</h5>
                    </div>
                  </div>

                  <div className="col d-flex gap-5 mb-3  ">
                    
                    {selectedProduct &&  <h3>Rs.{selectedProduct.price} /-</h3>}
                    <button>In Stock</button>
                  </div>
                  <p></p>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-12 col-lg-12 product-color-section ">
                  <div>
                    <h4>color: </h4>
                  </div>

                  <div className="row  ">
                    <div className="d-flex flex-wrap gap-2">
                      <div className="product-color mb-1  ">
                        <button> Black </button>
                      </div>
                      <div className="  product-color mb-1">
                        <button>Green</button>
                      </div>
                      <div className="  product-color mb-1">
                        <button>Blue</button>
                      </div>
                      <div className="  product-color mb-1">
                        <button>Red</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Clear</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 product-ship bg-light">
                <div className="row mb-3">
                  <div className="col">
                    <h4>Get It Shipped</h4>
                  </div>
                  <div className="col text-end ">
                    <a className="text-decoration-none h6" href="/">
                      Shipping & Returns
                    </a>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="form-check d-flex">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label ms-3  "
                        htmlFor="flexRadioDefault1 "
                      >
                        <p>
                          Standard <a href="/">Sign in</a> or{" "}
                          <a href="/">create an account</a> to enjoy FREE
                          standard shipping
                        </p>
                      </label>
                      <div className="col text-end">
                        <i className="fa-solid fa-truck-fast d-flex justify-content-end"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-lg-12">
                    <div className="form-check d-flex">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label  ms-3  "
                        htmlFor="flexRadioDefault2"
                      >
                        <p>
                          Same-Day Delivery Select to see availability for your
                          location
                        </p>
                      </label>
                      <div className="col text-end">
                        <i className="fa-solid fa-lock  text-end "></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mb-3">
                    <div className="text-center add-sub border">
                      <button className="btn fw-bold border-0">-</button>
                      <button className="btn fw-bold border-0">1</button>
                      <button className="btn fw-bold border-0">+</button>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 Pro-page-cart mb-3">
                    <button className="btn  w-100 ">Add To Cart</button>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 Pro-page-wish  mb-3">
                    <button className="btn w-100">
                      <i className="fa-regular fa-heart"></i> Add To Wishlist
                    </button>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <p>Share This Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}

export default ProductPage