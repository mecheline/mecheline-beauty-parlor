import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import M from 'materialize-css'

const AboutPage = () => {
    useEffect(()=>{
        M.AutoInit()
       
    },[<Link to ='/'></Link>, <Link to = '/about'></Link>])


    return (
        <div className='container'>
            <div className="row">
                <div className='containers col s10 m4 offset-m4 l3 offset-l4 padd '>
                    <img src={process.env.PUBLIC_URL + '/images/image 1.jpg'} alt="" className="circle image" />
                    <div className="overlay">
                        <div className="text insta">
                            <p>Mecheline</p>
                            <i class="material-icons">phone</i> 07066964401
                        </div>  
                    </div>
                </div>

            </div>
            <div className="row ">
                <div className='containers col s10 m4 l3 padd'>
                        <img src={process.env.PUBLIC_URL + '/images/image 1.jpg'} alt="" className="circle image" />
                        <div className="overlay">
                            <div className="text insta">
                                <p>Mecheline</p>
                                <i class="material-icons">phone</i> 07066964401
                            </div>  
                        </div>
                </div>

                <div className='containers col s10 m4 l3 padd'>
                    <img src={process.env.PUBLIC_URL + '/images/image 2.jpg'} alt="" className="circle image" />
                    <div className="overlay">
                        <div className="text insta">
                            <p>Mecheline</p>
                            <i class="material-icons">phone</i> 07066964401
                        </div>  
                    </div>
                 </div>

                 <div className='containers col s10 m4 l3 padd'>
                    <img src={process.env.PUBLIC_URL + '/images/image 3.jpg'} alt="" className="circle image" />
                    <div className="overlay">
                        <div className="text insta">
                            <p>Mecheline</p>
                            <i class="material-icons">phone</i> 07066964401
                        </div>  
                    </div>
                 </div>

                 <div className='containers col s10 m4 l3 padd'>
                    <img src={process.env.PUBLIC_URL + '/images/image 4.jpg'} alt="" className="circle image" />
                    <div className="overlay">
                        <div className="text insta">
                            <p>Mecheline</p>
                            <i class="material-icons">phone</i> 07066964401
                        </div>  
                    </div>
                </div>
                
            
            </div>
                
        </div>
    );
};

export default AboutPage;