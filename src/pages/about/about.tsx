import React from 'react';
import TitlePage from '../../shared/page-title/page-title';
import somosImg1 from '../../img/somos/somos1.jpg';
import somosImg2 from '../../img/somos/somos2.jpg';
import Layout from '../../layout/layaout';

import './about.scss';

class About extends React.Component {
    render() {
        return (
            <div>
                <TitlePage title="Quienes Somos" />
                <Layout>
                    <div className="col-md-12 main-description">
                        <p>                          La Fundación Hacia Una Nueva Vida es una institución no hospitalaria para el consumidor de sustancias psciactivas que ofrece servicios de
                        prevención en sus tres niveles: primaria, mediante programas educativos e informativos; secundaria, a través de programas de apoyo para personas
                        en alto riesgo y la terciaria a través de un programa de tratamiento a personas afectadas por el Uso y Abuso de sustancias psicoactivas incluido el
                        alcohol y problemáticas asociadas.</p>
                        <p>El tratamiento que ofrece es de modalidad internado, orientado a una población consumidora de SPA, sin importar su género, credo y posición social, que no presenten transtornos mentales de base.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 mb-4 mb-md-0  main-img-container"><img src={somosImg1} alt="somos imagen 1" /></div>
                        <div className="col-md-6  main-img-container"><img src={somosImg2} alt="somos imagen 2" /></div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default About;