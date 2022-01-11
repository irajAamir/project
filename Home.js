import React from 'react';
import "./home.css";
import Product from './Product';

function Home(){
    return (
        <div className='home'> 
         <div className="home__container">
             <img 
             className='home__image'
             src="  "
             alt=' '
             /> {/*image src*/}

             <div className='home__row'>
                <Product 
                 id="1234357"
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={2}
                />
                <Product
                 id="12347896"
                title="nyx" 
                price={899}
                image={/*"https:// image src"*/}
                rating={5}/>
             </div>

             <div className='home__row'>
                <Product 
                 id="1234908"
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={5}/>
                <Product
                 id="123489"
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={5}/>
                <Product
                 id="123456"
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={5}/>
             </div>

             <div className='home__row'>
                <Product
                id="1234"
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={5}/>
             </div>



        

       </div>
        </div>
    )
}
export default Home