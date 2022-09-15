import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <div className='homeContainer'>

            <div className='navbarContainer'>

                <Link to={{pathname: "/"}}><div className='logoDiv'>

                    <img src="../amazonLogo.png" alt="" className='logoImg' />

                </div></Link>

                <div className='addressNavDiv'>

                    <p id="p1">Hello</p>
                    <p id="p2"><i class="fa-solid fa-location-dot mx-1"></i><b>Select Your Address</b></p>

                </div>

                <div className='searchDiv'>

                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i class="fa fa-search"></i></button>

                </div>

                <div className='flagDiv'>

                    <img src="../india.png" alt="" />
                    {/* <i class="fa-solid fa-caret-down"></i> */}

                </div>

                <div className='signInDiv'>

                    <p className="m-0">Hello, {(Object.keys(props.loggedIn).length>0)?<>{props.loggedIn.firstName}</>:<>Sign in</>}</p>
                    <p className="m-0"><b>Account & Lists </b><i class="fa-solid fa-caret-down"></i></p>

                </div>

                <div className='returnsDiv'>

                    <p className="m-0">Returns</p>
                    <p className="m-0"><b>& Orders</b></p>

                </div>

                <Link to={{ pathname: "/cart" }} className='cartBtnLink'>
                    <div className='cartIconDiv' onClick={(event) => props.openCart(event)}>

                        <i class="fa-solid fa-cart-arrow-down"></i>
                        <p className='cartIconBadge'>{props.cartArray.length}</p>

                    </div>
                </Link>

            </div>


            <div className='subNavContainer'>

                <div className='mainSubnav'>

                    <p><i class="fa-solid fa-bars"></i>All</p>

                    <p>Best Sellers</p>

                    <p>Today's Deals</p>

                    <p>Mobiles</p>

                    <p>Books</p>

                    <p>Customer Service</p>

                </div>

                <div className='subnavImageDiv'>

                    <img src="/subnavImage.png" alt="" />

                </div>

            </div>


            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/amazon_ss1.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/amazon_ss2.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/amazon_ss4.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='categoriesContainer'>

                <div className='categoryContainer'>

                    <p className='categoryHeading'>Revamp your home in style</p>
                    <img src="/images/category1.png" alt="" className='categoryImage' />

                </div>

                <div className='categoryContainer'>

                    <p className='categoryHeading'>Amazon Pay | Book your travel tickets</p>
                    <img src="/images/category2.png" alt="" className='categoryImage' />

                </div>

                <div className='categoryContainer'>

                    <p className='categoryHeading'>Grab the best deals before sale</p>
                    <img src="/images/category3.png" alt="" className='categoryImage' />

                </div>

            </div>

            <div className='catalogueContainer'>

                {props.allProducts.map((item, index) => {
                    return (
                        <div className='productDiv'>
                            <img src={item.image} alt="" className='productImage' />
                            <div className='productHeader'>
                                <p className='productTitle'>{item.name}</p>
                                <p className='productRating'>
                                    <span style={{ color: "#f6a40d" }}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                    <span>
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                            <div className='productFooter'>
                                <p className='productPrice'>₹{item.price}</p>
                                {(props.cartID.includes(item.id)) ?
                                    props.cartArray.map((cartItem, cartIndex) => {
                                        if (cartItem.id === item.id) {
                                            return (
                                                <div className='addToCartAlt'>
                                                    <p className='homeQuantBtn' onClick={(event) => props.changeQuant(event, "sub", cartIndex)}>-</p>
                                                    <p className='homeQuantDisplay'>{cartItem.quant}</p>
                                                    <p className='homeQuantBtn' onClick={(event) => props.changeQuant(event, "add", cartIndex)}>+</p>
                                                </div>
                                            )
                                        }
                                    }) : <button className='productCartBtn' id={item.id} onClick={(event) => props.addToCartClicked(event)}>Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>}
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}
