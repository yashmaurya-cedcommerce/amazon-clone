import React from 'react';
import { Link } from 'react-router-dom';
import OrderPlaced from './OrderPlaced';

export default function Cart(props) {

    var findTotal=()=>
    {
        var total = 0;
        props.cartArray.map((item)=>
        {
            total += item.productTotal;
        })
        return total;
    }

    return (
        <div className='cartPageContainer'>

            <div className='navbarContainer'>

                <Link to={{pathname: "/"}} className='logoLink'><div className='logoDiv'>

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
                    <div className='cartIconDiv'>

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

            <div className='cartMainContainer'>

                <div className='cartFlexContainer'>

                    <div className='cartFlexOneContainer'>

                        <p className='cartFlexOneHeading'>Shopping Cart</p>
                        <hr />

                        <div className='allCartProductsDiv'>

                            {props.cartArray.map((item, index) => {
                                return (
                                    <>
                                        <div className='eachCartProductDiv'>

                                            <img src={item.image} alt="" className='cartProductImage' />
                                            <div className='cartProductDetailsDiv'>

                                                <div className='cartProductNameFlex'>
                                                    <p className='cartProductName'>{item.name}</p>
                                                    <p className='cartProductPrice'>₹ {item.productTotal}</p>
                                                </div>
                                                <p className='cartProductStock'>In stock</p>
                                                <p className='cartProductEligible'>Eligible for FREE Shipping</p>
                                                <img src="/images/fulfilledTag.png" alt="" className='tagImage' />
                                                

                                                <div className='quantityFlex'>

                                                <div className='quantityDiv'>
                                                    <button className='cartQuantBtn' onClick={(event)=>props.changeQuant(event,"sub", index)}>
                                                        <i class="fa-solid fa-minus"></i>
                                                    </button>
                                                        <input type="number" className='quantInput' value={item.quant} readOnly />
                                                    <button className='cartQuantBtn' onClick={(event)=>props.changeQuant(event,"add", index)}>
                                                        <i class="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>

                                                <p className='cartDeleteBtn' onClick={(event)=>props.cartProductDelete(event, index)}>Delete</p>

                                                </div>

                                            </div>

                                        </div>
                                    <hr />
                                    </>
                                )
                            })}

                            <div className='bottomTotalDiv'>

                                <p>Subtotal ({props.cartArray.length} items): <b>₹ {findTotal()}</b></p>

                            </div>

                        </div>

                    </div>

                    <div className='cartFlexTwoContainer'>

                        <p className='orderSummaryHeader'><i class="fa-solid fa-check"></i> Part of your order qualifies for FREE Delivery.</p>

                        <p className='subtotalSummary'>Subtotal ({props.cartArray.length} items): <b>₹{findTotal()}</b></p>

                        <p className='summaryGift'>
                            <input type="checkbox" className='summaryGiftCheck' /> 
                            This order contains a gift
                        </p>

                        {(Object.keys(props.loggedIn).length>0)?<button className='buyBtn'onClick={(event)=>props.placeOrder(event)}>Proceed To Buy</button>:<Link to={{pathname: '/login'}}><button className='buyBtn'>Proceed To Buy</button></Link>}

                    </div>

                </div>

            </div>

        </div>
    )
}
