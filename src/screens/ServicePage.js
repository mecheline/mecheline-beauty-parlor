import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap'

const ServicePage = () => {
    return (
        <div className='container'>
            <div className ='services'>
                <h5 className='lobster'>We are awesome</h5>
                <h5 className='lobster lobster-color'>Our Services....</h5>
            </div>
            <div class="row">
                <div class="col s12 m4 l3 containers">
                    <div class="card service-index">
                        <div class="card-image">
                        <div className='center-image'>
                            <img src={process.env.PUBLIC_URL + '/images/image 3.jpg'} />
                            <div className='centered'><h5>Hair cut</h5></div>
                        </div>
                        <div class="overlays">
                        <div className='text'> 
                            <p className='lobster lobster-color'>Nice</p>
                            <button class="btn waves-effect waves-light btn-style">$1500</button>
                        
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m4 l3 containers">
                    <div class="card  service-index">
                        <div class="card-image">
                        <div className='center-image'>
                            <img src={process.env.PUBLIC_URL + '/images/image 3.jpg'} />
                            <div className='centered'><h5>Shaving</h5></div>
                        </div>
                        <div class="overlays">
                        <div className='text'> 
                            <p className='lobster lobster-color'>Perfect</p>
                            <a class="waves-effect waves-light btn btn-style">$1500</a>
                        
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col s12 m4 l3 containers">
                    <div class="card service-index  ">
                        <div class="card-image">
                        <div className='center-image'>
                            <img src={process.env.PUBLIC_URL + '/images/image 3.jpg'} />
                            <div className='centered'><h5>Dreadlocks</h5></div>
                        </div>
                        <div class="overlays">
                        <div className='text'> 
                             <p className='lobster lobster-color'>Rugged</p>
                            <a class="waves-effect waves-light btn btn-style">$1500</a>
                        
                        </div>
                        </div>
                        </div>
                    </div>
                </div> 

                <div class="col s12 m4 l3 containers">
                    <div class="card  service-index">
                        <div class="card-image">
                        <div className='center-image'>
                            <img src={process.env.PUBLIC_URL + '/images/image 3.jpg'}/>
                            <div className='centered'><h5>Nail care</h5></div>
                        </div>
                        <div class="overlays">
                        <div className='text'> 
                            <p className='lobster lobster-color'>Beautiful</p>
                            <a class="waves-effect waves-light btn btn-style">$1500</a>
                        
                        </div>
                        </div>
                        </div>
                    </div>
                </div> 
             </div>
             
                <div className="row">
                    <div className="col s12 m5 l6 color-service">
                        <h2 className='schedule melonga'>Schedule</h2>
                        <h5>Monday - Saturday</h5>
                        <h6 className='text-muted'>7AM - 10PM</h6>
                        <h5>Sunday</h5>
                        <h6 className='text-muted'>8AM - 10PM</h6>
                        <p className="text-muted">We will be glad to see you anytime at our saloon</p>
                        <span><Link to ='#'> <h6 className='appointment'>MAKE AN APPOINTMENT <i className="material-icons">   arrow_forward</i></h6></Link></span> 
                    </div>

                    <div className="col s12 m6 l6 hide-on-small-only">
                        <img src={process.env.PUBLIC_URL + '/images/images 10.jpg'} alt="" className=' service-image' />
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m6 l5 clients ">
                         <div className='client melonga'>
                            <h2>Why Clients</h2>
                            <h2>&mdash;  Choose Us</h2>
                        </div>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, suscipit impedit. Cupiditate
                            
                           
                        </p>
                        <p className='lorem'> Sequi, inventore velit consequatur libero, quam ipsum ut delectus ratione quisquam quas amet atque 
                            impedit ea animi repudiandae, repellat est itaque dolorum minus ab necessitatibus optio fugit.
                             Ex, quaerat eligendi!
                         </p>
                         <Link class="book-button btn">BOOK NOW</Link>
                    </div>

                    <div className="col s12 m6 offset-l3 l4 price-col">
                        <h2 className='price melonga'>Pricing</h2>
                        <div className='pricing'>
                            <div className='item-price'>
                                <h6 className='electrolize'>MANICURE : </h6> &nbsp;&nbsp;<h6 className='lorem'>FROM $100</h6>  
                            </div> 

                            <div className='item-price'>
                                 <h6 className='electrolize'>PEDICURE : </h6> &nbsp;&nbsp;<h6 className='lorem'>FROM $100</h6>
                            </div>

                            <div className='item-price'>
                                 <h6 className='electrolize'>NAIL EXTENSION : </h6> &nbsp;&nbsp;<h6 className='lorem'>FROM $100</h6>
                            </div>

                            <div className='item-price'>
                                <h6 className='electrolize'>GEL PEDICURE : </h6> &nbsp;&nbsp;<h6 className='lorem'>FROM $100</h6>
                            </div>

                            <div className='item-price'>
                                <h6 className='electrolize'>NAIL DESIGN : </h6> &nbsp;&nbsp;<h6 className='lorem'>FROM $100</h6>
                            </div>
                        </div>
                    </div>
                    
                </div>
             
             
            </div>
       
    );
};

export default ServicePage;