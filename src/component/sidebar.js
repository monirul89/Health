import React from 'react';


class SideBar extends React.Component{
    render(){
        return(
            <div className="col_1_absolute last">
                <div className="col_1_bg">   
                    <div className="right_box" style={{"padding":"0 4px 0 2px","width":"200px","margin":"0px","height":"39px"}}>
                        <img src="images/phone_icon.png" />                                  
                    </div>                                                       
                </div> 
                <div className="padding20"></div>
                <div className="col_1_bg">
                    <div id="cssmenu">                    

                        <div style={{"padding":"5px 0px 0px 10px"}}>
                            <h2><span>ডাইরেক্টরি লিংক</span></h2>
                        </div>    	   
                        <ul className="arrow_list">
                            <li><a href="/">ডাইরেকটরিতে খুজুন</a></li>
                            <li><a href="/">জরুরী সেবা ডাইরেক্টরি</a></li>
                            <li><a href="/">সেরা ডাক্তার</a></li>
                            <li><a href="/">ডাক্তারদের ডাইরেক্টরি</a></li>
                            <li><a href="/">সেরা হাসপাতাল</a></li>
                            <li><a href="/">হাসপাতাল ও ক্লিনিকগুলো ডাইরেক্টরি</a></li>
                            <li><a href="/">ডায়াগনস্টিক সেন্টার ডাইরেক্টরি</a></li>
                            <li><a href="/">মেডিকেল কলেজ এবং বিশ্ববিদ্যালয়ের ডাইরেক্টরি</a></li>
                            <li><a href="">মেডিকেল ইনস্টিটিউট ডাইরেক্টরি</a></li>		
                            <li><a href="/">পুনর্বাসন কেন্দ্র ডাইরেক্টরি</a></li>		
                            <li><a href="/">বিশেষ বিদ্যালয় ডাইরেক্টরি</a></li>	
                            <li><a href="/">রক্তের ব্যাংক ডাইরেক্টরি</a></li>	
                            <li><a href="/">এনজিও ডাইরেক্টরি</a></li>		
                            <li><a href="/">ফার্মাসিউটিক্যালস ডাইরেক্টরি</a></li>		
                            <li><a href="/">স্বাস্থ্য সোসাইটিস ডাইরেক্টরি</a></li>
                        </ul>
                    </div>
                </div>                                  
            </div>
        );
    }
}

export default SideBar;