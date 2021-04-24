import React from 'react';
import Triangle from '../../img/history/triangulo.png';
import SlidesController from './slidesController'
import InfoSlides from './slides.json'
import './history.scss';

class History extends React.Component {
    render() {
        return (
            <div className="Contenedor-principal">
                <div className="Cont-traignle">
                    <img className="img-tringle" src={Triangle}></img>
                </div>
                <SlidesController data={InfoSlides.slides}></SlidesController>
            </div>
        )
    }
}

export default History;