import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import M from 'materialize-css'

const Navbar = () => {
    useEffect(()=>{
        M.AutoInit()
       
    },[<Link to = '/'></Link>, <Link to = '/about'></Link>])
    
    return (
        <div className='nav-index'>
            <div className='top'>
                <h4 className='parlor insta'>Mecheline Beauty Parlor</h4>
                <h5 className='experience insta'>It's a wonderful experience...</h5>
            </div>
            <div>
                <nav className='pushpin'>
                    <div className="nav-wrapper navColor">
                    <div className='container'>
                    <Link to="/" className="brand-logo insta">Mechelin Hair Cuts</Link>
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                            <li><Link to="/services">Services</Link></li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>

            <ul class="sidenav" id="mobile-demo">
                <li><Link className='sidenav-close' to="/">Home</Link></li>
                <li><Link className='sidenav-close' to="/about">About us</Link></li>
                <li><Link className='sidenav-close' to="/contacts">Contacts</Link></li>
                <li><Link className='sidenav-close' to="/services">Services</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;