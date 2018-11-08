import React from 'react';
import NavMenu from './menu';
import HeaderTop from './headerTop';

class Header extends React.Component{
    render(){
        return(
            <header className="header_bg clearfix">
            <HeaderTop />
            <div className="container clearfix">
                <div style={{"float":"right","margin":"-5px 10px 0"}}>
                    <div className="header-top-right">
                        <a className="orange-small-box-link" href="/">বাংলা</a>  
                        <a className="orange-small-box-link" href="/">English</a>
                    </div>
                </div> 
                <div className="clear"></div>       
                <div className="header">
                    <div className="header-top">
                        <div className="header-left">
                            <a href="/" title="healthprior21">
                                <img src="images/header-logo.png" width="200" height="95" alt="logo healthprior21"/>    
                            </a>   
                        </div>
                        <div className="header-right"> 
                            <img src="images/banner.jpg" alt="banner"/>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <NavMenu />			                     		
                </div>
            </div>
            </header>
        );
    }    
}

export default Header;