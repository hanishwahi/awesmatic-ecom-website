import React from 'react'
import '../../Styles/Style.css'
import '../../Styles/Responsive.css'
import Logo from '../../Images/logo.png'
import MenuIcon from '../../Images/menu.png'


function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="container-xl">
            <div className="row pt-4">
                <div className="col-1 d-block d-lg-none p-0">
                    <div className="offcanvas offcanvas-start " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <img height="30px" src={Logo} alt=""/>
                            <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <ul className="navbar-nav ">
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Today's Deal</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Shop By</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Best Sellers</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Makeup</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Skin</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Hair</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Appliances</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Bath & Body</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/">Mom & Baby</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Health & Wellness</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <button className="btn hamburger shadow-none border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <img   height="30px" src={MenuIcon  } alt=""/>
                      </button>
                </div>

                <div className="col-lg-3 col-md-5 col-sm-5 col-7 mb-3 head-img px-0 order-0 order-sm-0 order-lg- 0 logo  ">
                    <a href="/"><img src={Logo} alt=""/></a>
                </div>


                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-3 px-0 order-3 order-sm-3 order-lg-1">
                    <div className="row mx-0 d-flex flex-wrap search">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-6 p-0 m-0">
                            <input type="text" placeholder="Search..."/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-4 text-end  d-flex align-items-center justify-content-end px-0  ">
                            <select name="" id="">
                                <option value="">All Categories</option>
                                <option value="">Option1</option>
                                <option value="">Option2</option>    
                            </select>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-2 text-end p-0  ">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-4 d-flex mb-3 px-0 text-end order-2 order-sm-2 order-sm-2 d-flex align-items-center justify-content-end">
                    <div className="col-lg-6 col-md-8 col-sm-7 px-md-3 country px-0">
                        <select className="border-0 outline-0" name="" id="">
                            <option value="">INDIA</option>
                            <option value="">USA</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-12 col-md-4 col-sm-5 text-right cart px-0 d-flex align-items-center justify-content-end ">
                        <div className="dropdown  w-100 custom-drop-logout">
                            <button className="dropbtn"><i className="fa-regular fa-user px-2"></i></button>
                            <div className="dropdown-content  pt-1">
                                <div className="logout-drop mt-1 bg-light shadow p-2">
                                    <div className="col-xl-12 border-bottom">
                                        <h1 className="h5">Honey Wahi</h1>
                                    </div>
                                    <div className="col-xl-12 mt-2">
                                        <p>My Profile</p>
                                        <p>My WishList</p>
                                        <p>Orders</p>
                                        <div className="dropdown-icon">

                                            <a href="/"> <button type="button" className="btn btn-bg2 col-12 btn-lg">Logout</button></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div> 


                        <i className="fa-regular fa-heart px-2"></i>
                          
                        <i className="fa-solid fa-bag-shopping px-2 add-cart">
                            <p>1</p>
                            
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
