import react from 'react';
import TitlePage from '../../shared/page-title/page-title';
import misionimg1 from '../../img/mision/mision2.jpg';
import wideImg from '../../img/mision/mision3.jpg';
import misionimg2 from '../../img/calidad/calidad1.jpg';
import wideImg2 from '../../img/calidad/calidad2.jpg';
import Layout from '../../layout/layaout';


interface IMisionPrpos {
    title: string,
    description: string,
    bgDescription: string
    bgImage: number
    secondImage: number
}
class Mision extends react.Component<IMisionPrpos> {
    render() {
        let bannerImg = [wideImg, wideImg2];
        let descImg = [misionimg1, misionimg2]
        let bgText = 'col-md-6 mb-4 mb-md-0 main-description d-flex align-items-center';
        if (this.props.bgDescription === 'blue') {
            bgText += ' blue-bg';
        }
        return (
            <div>
                <TitlePage title={this.props.title} />
                <Layout>
                    <div className="row">
                        <div className={bgText}>
                            <p className="text-center">{this.props.description}</p>
                        </div>
                        <div className="col-md-6 px-0 ps-md-3 main-img-container">
                            <img src={descImg[this.props.bgImage]} alt="mision" />
                        </div>
                    </div>
                    <div className="row mt-4 mt-md-5">
                        <div className="col-md-12 px-0 main-img-container banner">
                            <img src={bannerImg[this.props.secondImage]} alt="joga" />
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Mision;