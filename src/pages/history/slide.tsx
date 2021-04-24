import { Component } from 'react'
import { ISlideData } from '../../shared/interfaces/slidedata.interface';

interface ISlideProps {
  item: ISlideData,
  entradaTitulo: string,
  entradaImagen: string,
  entradaSubtitulo: string,
  entradaLine: string,
  entradaDescription: string
}

class Slide extends Component<ISlideProps> {

  render() {
    return (
      <div className="Contenedor-slide">

        <div className="Contenedor-titulo">
          <h2 className={this.props.entradaTitulo}>{this.props.item.titulo}</h2>
        </div>
        <div>
          <img className={this.props.entradaImagen} src={this.props.item.img}></img>
        </div>

        <div className="Description-container">
          <div className="Cont-Subtitle">
            <p className={this.props.entradaSubtitulo}>{this.props.item.subtitulo}</p>
            <div className={this.props.entradaLine}></div>
          </div>
          <p className={this.props.entradaDescription}>{this.props.item.description}</p>
        </div>

      </div>
    )
  }


}

export default Slide;
