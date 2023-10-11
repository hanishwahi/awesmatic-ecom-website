import React from 'react'

function Navbar() {
  return (
    <>
      <div className="container-fluid bg-nav">
        <div className="container-xl">
            <div className="row d-flex justify-content-lg-around ">
                <nav className=" navbar-expand-lg d-flex justify-content-lg-center navbar-light">
                    <div className="collapse justify-content-around navbar-collapse nav1" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Today's Deal</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Shop By</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Best Sellers</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Makeup</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Skin</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Hair</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Appliances</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link px-1" href="/">Bath & Body</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="/">Mom & Baby</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-1" href="/">Health & Wellness</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    </>
  )
}

export default Navbar
