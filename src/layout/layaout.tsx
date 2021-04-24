import React from 'react';

class Layout extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="container-margin my-5">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;