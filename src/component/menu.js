import React from 'react';

class NavMenu extends React.Component {
    constructor (props){
        super(props);

    var menus = ['Home','স্বাস্থ্য টিপ','ই-স্টোর', 'খবর','ই-ডাক্তার','ই-লাইব্রেরী','ড্রাগ ইন্ডেক্স','ব্লগ','ডাক্তারদের জন্য'];

    }
    render() {
        return ( 
            <div>
                <nav className="main-menu">
                    <ul style={{"zIndex":"100000"}}>
                        <li className="home active"><a href="/">Home</a></li>
                        <li className=""><a href="/">স্বাস্থ্য টিপ</a></li>
                        <li className=""><a href="/">ই-স্টোর</a></li> 
                        <li className=""><a href="/">খবর</a></li> 
                        <li className=""><a  href="/">ই-ডাক্তার</a></li>      
                        <li className=""><a href="/">ই-লাইব্রেরী</a></li>
                        <li className=""><a href="/">AAA for Nutrition</a></li>
                        <li className=""><a href="/">ড্রাগ ইন্ডেক্স</a></li>         
                        <li className=""><a href="/">ব্লগ</a></li>
                        <li className=""><a href="/">ব্লগ</a></li>
                        <li className=""><a href="/">ডাক্তারদের জন্য</a>
                        <div>
                            <ul>
                            <li><div className="item-title"><a href="/">উচ্চতর গবেষণার তথ্য</a></div></li> 
                            </ul>
                            </div>
                        </li>
                        <li style={{"float":"right"}}>
                            <div className="portal-login"><a href="/">সাইনআপ অথবা সাইনইন</a></div>
                        </li>        
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavMenu;