import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header(){
    return (
        
        <div className='header'>
            {/*amazon logo*/}
            <img 
            className="header__logo"
            src="          " //logo source
        />
        <div
        className="header__serach">
            <input
            className='header__searchInput' type="text" />
            <SearchIcon
            className="header__searchIcon" />
        </div>

        <div className="header___nav">

          <div className='header__option'>
              <span
              className="header__OptionLineOne">
                  Hello Guest
                  </span>
                  <span
              className="header__OptionLineTwo">
                  Sign In
                  </span>
            </div>

          <div className='header__option'>
          <span
              className="header__OptionLineOne">
                  Returns
                  </span>
                  <span
              className="header__OptionLineTwo">
                  & Orders
                  </span>
            </div>

          <div className='header__option'>
          <span
              className="header__OptionLineOne">
                  Your
                  </span>
                  <span
              className="header__OptionLineTwo">
                  Prime
                  </span>
              </div>

              <div className='header__optionBasket'>
                  <ShoppingBasketIcon />
                  <span className='header__optionLineTwo 
                  header__basketCount'>0 </span>

              </div>
              </div>
               </div>

    );
}
export default Header