import React from 'react';
import './footer.scss';
import logoFooter from '../../img/logo-blanco.png'
import mapa from '../../img/mapa.png'
import { HiLocationMarker } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

class FooterApp extends React.Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="center-content row pt-5 pb-5 align-items-center">
                        <div className="col-md-6">
                            <img className="logo-footer" src={logoFooter} alt="logo pie de pagina"/>
                            <p className="bold-primary mt-3">Institución NO hospitalaria para <br/>el consumo de SPA (Sustancias Psicoactivas).</p>
                        </div>
                        <div className="col-md-6">
                            <img className="mapa-img" src={mapa} alt="mapa fundacion"/>
                        </div>
                    </div>
                    <div className="center-content row bold-primary align-items-end pb-5">
                        <div className="col-md-6">
                            Hosting Gratis para ONG
                        </div>
                        <div className="col-md-6">
                            <div><FaPhoneAlt/> <span> 318 285 5078 / 317 382 2906</span></div>
                            <div><HiLocationMarker/> <span> Carrera 5B Barrio Santa Clara Yacuanquer-Nariño</span></div>
                            <div><GrMail/> <span> haciauna.nuevavida@hotmail.com</span></div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterApp;