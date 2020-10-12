import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import M from 'materialize-css'

const HomePage = () => {
    useEffect(()=> {
        M.AutoInit();
    },[<Link to ='/'></Link>, <Link to = '/about'></Link>])
    
    return (
        <div>
        <h5 className='center'><h4 className='insta parlor'>gallery</h4></h5>
        <hr/>
            <div class="carousel">
                <Link className="carousel-item"  to="#one!"><img className='caros' src={process.env.PUBLIC_URL + '/images/image 1.jpg'} /></Link>
                <Link className="carousel-item"  to="#one!"><img className='caros' src={process.env.PUBLIC_URL + '/images/image 2.jpg'} /></Link>
                <Link className="carousel-item"  to="#one!"><img className='caros' src={process.env.PUBLIC_URL + '/images/image 3.jpg'} /></Link>
                <Link className="carousel-item"  to="#one!"><img className='caros' src={process.env.PUBLIC_URL + '/images/image 4.jpg'} /></Link>
                
               
            </div>
            
        </div>
    );
};

export default HomePage;


