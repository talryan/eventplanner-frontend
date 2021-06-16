import React from 'react';



const NavBar = () => {
        
            return (
        
    <div className='nav-display'>  
        <div className="w3-bar w3-red w3-card w3-center-align w3-large"></div>
            <div class="w3-top">
                <div class="w3-row w3-padding w3-black">
                    <div class="w3-col s3">
                        <a href="/" class="w3-button w3-block w3-black">HOME</a>
                        </div>
                            <div class="w3-col s3">
                                <a href="/events" class="w3-button w3-block w3-black"> EVENTS </a>
                            </div>
                                <div class="w3-col s3">
                                    <a href="/clients" class="w3-button w3-block w3-black">CLIENTS</a>
                                </div>
                                    <div class="w3-col s3">
                                         <a href="/clients/new" class="w3-button w3-block w3-black">NEW CLIENT</a>
            </div> 
        </div>
    </div>
 

                            
                      
                    </div>
            )
        }
    

    export default NavBar;
