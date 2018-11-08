import React from 'react';

class HeaderTitle extends React.Component {

    render() {
        return (
            <div id="peelback">
                <a href="/"><img src = "images/top_peel_bangla.png" border = "0" style = {{"width":"130px","height":"130px","zIndex":"9001","position":"absolute","right":"0px","top":"1px"}} alt="top_peel_bangla" /></a> 
                <div style = {{"width":"125px","height":"125px","overflow":"hidden","position":"absolute","right":"0px","top":"0px","zIndex":"9000","background":"url(&quot;/img/edoctor/top_bg_bangla.jpg&quot;) right top no-repeat"}} > </div> 
            </div>
        );
    }
}

export default HeaderTitle;