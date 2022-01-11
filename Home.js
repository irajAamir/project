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
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={2}
                />
                <Product
                title="nyx" 
                price={899}
                image={/*"https:// image src"*/}
                rating={5}/>
             </div>

             <div className='home__row'>
                <Product 
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={5}/>
                <Product
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={5}/>
                <Product
                title="The lean startup" 
                price={699}
                image={/*"https:// image src"*/}
                rating={5}/>
             </div>

             <div className='home__row'>
                 <Product
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