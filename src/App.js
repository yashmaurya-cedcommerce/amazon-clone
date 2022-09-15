import './App.css';
// import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { Data } from './Data';
import { useState } from 'react';
import Cart from './Cart';
import OrderPlaced from './OrderPlaced';
import Register from './Register';
import Login from './Login';
import { useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState(Data.products);
  var [cartArray, setCartArray] = useState([]);
  var [cartID, setCartID] = useState([]);
  var [users, setUsers] = useState([]);
  var [loggedIn, setLoggedIn] = useState({});


  var addToCartClicked = (event) => {
    var flag = 0;
    var productID = event.currentTarget.id;

    allProducts.map((item) => {
      if (item.id == productID) {
        // checking if the product is already present inside the array 

        cartArray.map((item2, index) => {
          if (item2.id == productID) {
            var tempArray = cartArray;
            tempArray[index].quant++;
            tempArray[index].productTotal = tempArray[index].quant * tempArray[index].price;

            setCartArray([...tempArray]);
            flag = 1;
          }
        })

        // pushing the product into array if it is not present there 

        if (flag === 0) {
          setCartArray(prevArray => [...prevArray, {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            mrp: item.mrp,
            category: item.category,
            quant: 1,
            productTotal: 1 * item.price
          }]);
          setCartID(prevState => [...prevState, item.id]);
        }
      }
    })
  }

  var changeQuant = (event, op, cartIndex) => {
    var tempArray = cartArray;
    if (op === 'add') {
      tempArray[cartIndex].quant++;
      tempArray[cartIndex].productTotal = tempArray[cartIndex].quant * tempArray[cartIndex].price;
      setCartArray([...tempArray]);
    }
    else if (op === 'sub') {
      if (cartArray[cartIndex].quant === 1) {
        var tempArray2 = cartID;
        tempArray.splice(cartIndex, 1);
        tempArray2.splice(cartIndex, 1);
        setCartArray([...tempArray]);
        setCartID([...tempArray2]);
      }
      else {
        tempArray[cartIndex].quant--;
        tempArray[cartIndex].productTotal = tempArray[cartIndex].quant * tempArray[cartIndex].price;
        setCartArray([...tempArray]);
      }
    }
  }


  var cartProductDelete = (event, index) => {
    var tempArray = cartArray;
    var tempArray2 = cartID;
    tempArray.splice(index, 1);
    tempArray2.splice(index, 1);
    setCartArray([...tempArray]);
    setCartID([...tempArray2]);
  }

  var onlyLettersAndSpaces = (str) => {
    return /^[A-Za-z\s]*$/.test(str);
  }

  // validation that checks that the filled email is valid 

  var isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }


  var submitRegister = (event) => {
    var name = document.getElementById('nameInputID').value;
    var mobile = document.getElementById('numberInputID').value;
    var email = document.getElementById('emailInputID').value;
    var password = document.getElementById('passwordInputID').value;

    if (name === '') {

      document.getElementById('errorDisplay').style.display = 'block';
      document.getElementById("errorDisplay").innerText = "*Name is Empty";
    }
    else
      if (onlyLettersAndSpaces(name) === false) {

        document.getElementById('errorDisplay').style.display = 'block';
        document.getElementById("errorDisplay").innerText = "Enter Proper Name";
      }
      else
        if (mobile === '') {

          document.getElementById('errorDisplay').style.display = 'block';
          document.getElementById("errorDisplay").innerText = "*Mobile Number is Empty";
        }
        else
          if (password === '') {

            document.getElementById('errorDisplay').style.display = 'block';
            document.getElementById("errorDisplay").innerText = "*Password is Empty";
          }
          else {
            if (email !== '') {
              if (isValidEmail(email) === false) {

                document.getElementById('errorDisplay').style.display = 'block';
                document.getElementById("errorDisplay").innerText = "Enter Proper E-mail";
              }
              else {

                var tempObj = { name: name, mobile: mobile, email: email, password: password, firstName: name.replace(/ .*/, '') };
                setUsers(prevArray => [...prevArray, tempObj]);
                document.getElementById('errorDisplay').style.display = 'none';
                navigate("/login");
              }
            }
            else {
              var tempObj = { name: name, mobile: mobile, email: email, password: password, firstName: name.replace(/ .*/, '') };
              setUsers(prevArray => [...prevArray, tempObj]);
              document.getElementById('errorDisplay').style.display = 'none';
              navigate("/login");
            }
          }

  }


  var submitLogin = (event) => {
    var loginPhone = document.getElementById("loginPhoneInputID").value;
    var loginPass = document.getElementById("loginPasswordInputID").value;

    if (loginPhone === '') {
      document.getElementById("loginErrorDisplay").style.display = "block";
      document.getElementById("loginErrorDisplay").innerText = "*Please Enter Phone Number";
    }
    else if (loginPass === '') {
      document.getElementById("loginErrorDisplay").style.display = "block";
      document.getElementById("loginErrorDisplay").innerText = "*Please Enter Password";
    }
    else {
      var loginFlag = 0;
      users.map((item) => {
        if (item.mobile == loginPhone) {
          if (item.password == loginPass) {
            loginFlag = 1;
            var tempObj = {
              name: item.name,
              mobile: item.mobile,
              email: item.email,
              password: item.password,
              firstName: item.firstName
            }
            setLoggedIn({ ...tempObj });
          }
        }
      })
      if (loginFlag == 0) {
        document.getElementById("loginErrorDisplay").style.display = "block";
        document.getElementById("loginErrorDisplay").innerText = "*Wrong Credentials Entered";
      }
      else if (loginFlag == 1) {
        document.getElementById('loginErrorDisplay').style.display = 'none';
        navigate("/");
      }
    }
  }

  var placeOrder = (event) => {
    setCartArray([]);
    setCartID([]);
    navigate('/placed');
  }



  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home allProducts={allProducts} addToCartClicked={addToCartClicked} cartArray={cartArray} cartID={cartID} changeQuant={changeQuant} loggedIn={loggedIn} />} />

        <Route path="/cart" element={<Cart cartArray={cartArray} cartID={cartID} changeQuant={changeQuant} cartProductDelete={cartProductDelete} loggedIn={loggedIn} placeOrder={placeOrder} />} />

        <Route path='/placed' element={<OrderPlaced />} />
        <Route path='/register' element={<Register submitRegister={submitRegister} />} />
        <Route path='/login' element={<Login users={users} submitLogin={submitLogin} />} />
      </Routes>

    </div>
  );
}

export default App;
