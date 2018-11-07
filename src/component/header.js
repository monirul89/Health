import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="container clearfix">
                <div style={{"float":"right","margin":"-5px 10px 0"}}>
                    <div className="header-top-right">
                        <a className="orange-small-box-link" href="#">বাংলা</a>  
                        <a className="orange-small-box-link" href="#">English</a>
                    </div>
                </div> 
                <div className="clear"></div>       
                <div className="header">
                    <div className="header-top">
                        <div className="header-left">
                            <a href="#" title="healthprior21">
                                <img src="images/header-logo.png" width="200" height="95" alt="logo healthprior21"/>    
                            </a>   
                        </div>
                        <div className="header-right"> 
                            <img src="images/banner.jpg" alt="Image"/>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <nav className="main-menu">
                        <ul style={{"zIndex":"100000"}}>
                            <li className="home active"><a href="/">Home</a></li>
                            <li className=""><a href="#">স্বাস্থ্য টিপ</a></li>
                            <li className=""><a href="#">ই-স্টোর</a></li> 
                            <li className=""><a href="#">খবর</a></li> 
                            <li className=""><a  href="#">ই-ডাক্তার</a></li>      
                            <li className=""><a href="#">ই-লাইব্রেরী</a></li>
                            <li className=""><a href="#">AAA for Nutrition</a></li>
                            <li className=""><a href="#">ড্রাগ ইন্ডেক্স</a></li>         
                            <li className=""><a href="#">ব্লগ</a></li>
                            <li className=""><a href="#">ব্লগ</a></li>
                            <li className=""><a href="#">ডাক্তারদের জন্য</a>
                            <div>
                               <ul>
                                <li><div className="item-title"><a href="#">উচ্চতর গবেষণার তথ্য</a></div></li> 
                               </ul>
                               </div>
                            </li>
                            <li style={{"float":"right"}}>
                                <div className="portal-login"><a href="#">সাইনআপ অথবা সাইনইন</a></div>
                            </li>        
                        </ul>
                    </nav>			                     		
                </div>
            </div>
            </div>
        );
    }    
}

export default Header;