import React from 'react';
import NavMenu from './menu';

class HeaderTitle extends React.Component {

    render() {
        return (
            <div className="header">
                <NavMenu />
            </div>
        );
    }
}

export default HeaderTitle;