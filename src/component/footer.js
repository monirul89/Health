import React from 'react';

class FooterArea extends React.Component{
    render(){
        return(
            <div className="row">
                <footer className="footer_bg_bottom clearfix">
                    <div className="footer_bottom footer-container">
                        <div className="col_3_4">
                            <div className="footer-left">
                                <div className="footer-logo"><a href="http://www.healthprior21.com/"><img src="images/logo_footer.png" alt="healthprior21" /></a></div>
                                <div className="footer-text">
                                    <p><a href="http://www.healthprior21.com/about-us" title="About us">কোম্পানি তথ্য</a>|<a href="http://www.healthprior21.com/how-it-works" title="How it works">কিভাবে কাজ করি</a>|<a href="http://www.healthprior21.com/privacy-policy" title="Privacy policy" rel="nofollow">প্রাইভেছি পলিছি </a>|<a href="http://www.healthprior21.com/terms-conditions" title="Terms and Condition" rel="nofollow"> ব্যবহার শর্তাবলী </a>|<a href="http://www.healthprior21.com/disclaimer" title="Disclaimer" rel="nofollow"> ডিসক্লেইমার </a>|<a href="http://www.healthprior21.com/site-map" title="Siteup"> সাইটম্যাপ</a>|<a href="http://www.healthprior21.com/contact-us" title="Contact"> যোগাযোগ </a></p>
                                    <p>Copyright © 2014 Health Prior 21. All Rights Reserved. Designed, developed &amp; maintenance by: <a href="http://uysys.com/" target="_blank">UY Systems Ltd.</a></p>
                                </div>
                                <div className="clear"></div>
                            </div>


                            <div className="clear"></div>

                        </div>
                        <div className="col_1_4 last">

                            <div className="payment-mthd-n-social-icon-box">
                                <div className="pmnsib pm-cwu">আমাদের যোগ করুন</div>
                                <div className="pmnsib">
                                    <a href="http://www.youtube.com/user/healthprior21/videos" target="_blank"><img alt="youtube" src="images/ytube.jpg" /></a>
                                </div>	
                                <div className="pmnsib"><a target="_blank" href="http://twitter.com/healthprior21"><img src="images/twitter.png" alt="twitter" /></a></div>
                                <div className="pmnsib"><a target="_blank" href="http://www.facebook.com/healthprior21"><img src="images/facebook.png" alt="facebook" /></a></div>	
                                <div className="clear"></div>
                            </div>                 
                            <div className="footer-right-bottom">
                                <ul>
                                    <li><b>আমরা গ্রহণ করি</b></li> 
                                    <li><img src="images/master-card.jpg" alt="master card" /></li>
                                    <li><img src="images/visa-card.jpg" alt="visa card" /></li>
                                    <li><img src="images/bkash-small.jpg" alt="bkash" width="47" /></li>
                                </ul> 
                            </div>

                        </div>			
                        <div className="clear"></div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterArea;