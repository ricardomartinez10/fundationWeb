import React from 'react';
import img9 from '../../img/b9.jpg';
import img13 from '../../img/b13.jpg';
import img10 from '../../img/b10.jpg';
import img12 from '../../img/b12.jpg';
const bootstrap = require('bootstrap');

class Home extends React.Component {
    render() {
        return(
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img9} className="d-block w-100" alt="imagen fundación"/>
    </div>
    <div className="carousel-item">
      <img src={img13} className="d-block w-100" alt="imagen fundación"/>
    </div>
    <div className="carousel-item">
      <img src={img10} className="d-block w-100" alt="imagen fundación"/>
    </div>
    <div className="carousel-item">
      <img src={img12} className="d-block w-100" alt="imagen fundación"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        )
    }
}

export default Home;