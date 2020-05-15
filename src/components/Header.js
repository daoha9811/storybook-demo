import React from 'react';
import '../../public/css/BookIndex.css';
function Header() {
  return (
    <header>
      <div className="menu">
        <div className="Logo">
          <img src="https://dummyimage.com/200x80/000/fff" />
        </div>
        <div className="Home">
          <a className="nav-item nav-link active" href="/books">Books <span className="sr-only">(current)</span></a>
        </div>
        <div className="Product">
          <a className="nav-item nav-link" href="/users">Users</a>
        </div>
        <div className="Contact">
          <a className="nav-item nav-link" href="/transactions">Transactions</a>
        </div>
        <div className="Blog">
          <a className="nav-item nav-link" href="/carts">Cart</a> 
        </div>
        <div className="shop">
          <a className="nav-item nav-link" href="/shops">Shop</a>
        </div>
        <div className="Logout">
          <a className="nav-item nav-link" href="/logout">Logout</a> 
        </div>
      </div>
      <div className="responsiveMenu">
        <div className="responsiveLogo">
          <img src="https://dummyimage.com/100x50/000/fff" />
        </div>
        <div className="toggleButton">
          <i className="fas fa-align-justify fa-3x"></i>
        </div>
      </div>
      <div className="resMenu">
        <i className="fas fa-times fa-2x removeResMenu"></i>
        <ul>
          <li> 
            <a className="nav-item nav-link active" href="/books">Books <span className="sr-only">(current)</span></a>
          </li>
           <li>
             <a className="nav-item nav-link" href="/users">Users</a>
          </li>
          <li>
            <a className="nav-item nav-link" href="/transactions">Transactions</a>
          </li>
          <li>  
            <a className="nav-item nav-link" href="/carts">Cart</a> 
          </li>
          <li>
            <a className="nav-item nav-link" href="/shops">Shop</a>
          </li>
          <li>
            <a className="nav-item nav-link" href="/logout">Logout</a>
          </li>
          </ul>
      </div>
    </header>
  );
}

export default Header;
