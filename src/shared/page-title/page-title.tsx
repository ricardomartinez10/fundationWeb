import React from 'react';
import './page-title.scss';

interface ITitlePrpos {
    title: string;
}

class TitlePage extends React.Component<ITitlePrpos> {

    render() {
        return(
            <div className="title-container">
                 <div className="container">
                     <div className="container-margin">
                        <h2>{this.props.title}</h2>
                     </div>
                 </div>
            </div>
        )
    }
}

export default TitlePage;