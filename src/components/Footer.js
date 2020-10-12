import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import M from 'materialize-css'



const Footer = () => {
    useEffect(()=> {
        M.AutoInit()
    },[<Link to='/'></Link>])
    return (
        <div>
        <div>
        <div className='footer'>
            <div className="">
            <div className='container'>
            <Link className='left' to="#"> © 2014 Copyright Text</Link>
            
                <ul className='list'>
                    <li className='space'><Link to="#" className='tooltipped' data-position="top" data-tooltip="facebook"><i class="fa fa-facebook fa-2x blue-text text-darken-4" aria-hidden="true"></i></Link></li>
                    <li className='space'><Link to="#" className='tooltipped' data-position="top" data-tooltip="twitter"><i class="fa fa-twitter fa-2x blue-text text-darken-2" aria-hidden="true"></i></Link></li>
                    <li className='space'><Link to="#" className='tooltipped' data-position="top" data-tooltip="instagram"><i class="fa fa-instagram fa-2x red-text text-darken-2" aria-hidden="true"></i></Link></li>
                    <li className='space'><Link to="#" className='tooltipped' data-position="top" data-tooltip="whatsApp"><i class="fa fa-whatsapp fa-2x green-text text-darken-2" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
            </div>
        </div>
        </div>

       
    </div>
        
    );
};

export default Footer;