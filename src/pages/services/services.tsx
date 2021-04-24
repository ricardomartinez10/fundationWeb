import react from 'react';
import { items } from './data';
import image1 from './../../img/servicios/s1.jpg';
import image2 from './../../img/servicios/s2.jpg';
import image3 from './../../img/servicios/s3.jpg';
import image4 from './../../img/servicios/s4.jpg';
import image5 from './../../img/servicios/s7.jpg';
import image6 from './../../img/servicios/s6.jpg';
import image7 from './../../img/servicios/s8.jpg';
import image8 from './../../img/servicios/s9.jpg';
import TitlePage from '../../shared/page-title/page-title';
import './services.scss';

class Services extends react.Component {
    render() {
        const images = [image1, image2, image3, image4, image5, image6, image7, image8];

        const listItems = items.map((item) => {
			return (
                <div className="item-container">
                    <img className="service-img" src={images[item.img]} alt={item.title}/>
                    <h4 className="service-title">{item.title}</h4>
                    {item.description && 
                        <div className="service-description">
                            {item.description}
                        </div>
                    }
                    {item.features && 
                     <div className="services-features pt-4">
                         <ul>
                             {item.features.map(feature => {
                                 return (
                                    <li className="mb-3">{feature}</li>
                                 )
                             })}
                         </ul>
                     </div>
                    }
                </div>
			);
		});
        return(
            <div className="services">
                <TitlePage title="SERVICIOS OFRECIDOS"></TitlePage>
                <div className="container items">
                    {listItems.map(item => {
                        return(
                            item
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Services;