import react from 'react';
import TitlePage from '../../shared/page-title/page-title';
import Layout from '../../layout/layaout';
import img1 from '../../img/instalaciones/i1.png';
import img2 from '../../img/instalaciones/i2.png';
import img3 from '../../img/instalaciones/i3.png';
import img4 from '../../img/instalaciones/i4.png';
import Home from '../home/home';
import './facilities.scss';


class Facilities extends react.Component {

    render() {
        var features = [
            {
                title: 'Atmósfera de familiaridad',
                img: img1
            },
            {
                title: 'Tranquilidad',
                img: img2
            },
            {
                title: 'Reflexión',
                img: img3
            },
            {
                title: 'Privacidad y seguridad',
                img: img4
            }
        ]

        return(
            <div className="facilies-container">
                <TitlePage title="NUESTRAS INSTALACIONES"/>
                <Layout>
                    <div className="row main-description blue-bg"> 
                        <div className="col-md-12">
                            Están acondicionadas para atender el proceso de tratamiento a la drogodependencia, al alcoholismo y trastornos de conducta, teniendo en cuenta las particularidades de nuestros usuarios; tiene lugar en espacios que favorecen una atmósfera de familiaridad, tranquilidad, reflexión, privacidad y seguridad a fin de lograr efectos terapéuticos para que puedan centrarse en el objetivo el cual es salir de ese sub-mundo drogadiccional y así lograr un estilo de vida adecuado lleno de luz y esperanza para él como para su familia.
                        </div>
                    </div>
                    <div className="row p-4">
                        {features.map(item => {
                            return(
                                <div className="feature col-6 col-md-3 text-center p-3 p-md-4">
                                    <img className="w-100" src={item.img} alt=""/>
                                    <h4 className="item-faciity">{item.title}</h4>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row">
                        <Home/>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Facilities;