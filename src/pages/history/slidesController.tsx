import { Component } from 'react';
import Slide from './slide';
import ArrowUp from '../../img/history/arrow-up.png'
import ArrowDown from '../../img/history/arrow-down.png'
import { ISlideData } from '../../shared/interfaces/slidedata.interface';

interface ISlideControllerProps {
    data: Array<ISlideData>
}

interface ISlideControllerState {
    objeto: ISlideData,
    index: number,
    cantidadTotal: number,
    entradaTitulo: string
    entradaSubtitulo: string,
    entradaImagen: string
    entradaDescription: string
    entradaLine: string,
}

class SlidesController extends Component<ISlideControllerProps, ISlideControllerState> {

    state: ISlideControllerState = {
        index: 0,
        cantidadTotal: 9,
        entradaTitulo: "Entrada-titulos Titulo",
        entradaSubtitulo: "Entrada-titulos Subtitulo",
        entradaImagen: "Picture Entrada-imagen",
        entradaDescription: "Descripcion Entrada-description",
        entradaLine: "line-slider Entrada-line",
        objeto: this.props.data[0]
    }

    nextSlide = () => {
        if (this.state.index < this.state.cantidadTotal) {
            this.setState({
                entradaTitulo: "Titulo Salida-titulos",
                entradaSubtitulo: "Subtitulo Salida-titulos",
                entradaImagen: "Picture Salida-imagen",
                entradaDescription: "Descripcion Salida-description",
                entradaLine: "line-slider Salida-line",
                index: this.state.index + 1
            }, () => {
                setTimeout(() => {
                    this.setState({
                        objeto: this.props.data[this.state.index],
                        entradaTitulo: "Entrada-titulos Titulo",
                        entradaSubtitulo: "Entrada-titulos Subtitulo",
                        entradaImagen: "Picture Entrada-imagen",
                        entradaDescription: "Descripcion Entrada-description",
                        entradaLine: "line-slider Entrada-line"
                    })
                }, 900);
            });
        }
    }

    prevSlide = () => {
        if (this.state.index > 0) {
            this.setState({
                entradaTitulo: "Titulo Salida-titulos",
                entradaSubtitulo: "Subtitulo Salida-titulos",
                entradaImagen: "Picture Salida-imagen",
                entradaDescription: "Descripcion Salida-description",
                entradaLine: "line-slider Salida-line",
                index: this.state.index - 1
            }, () => {
                setTimeout(() => {
                    this.setState({
                        objeto: this.props.data[this.state.index],
                        entradaTitulo: "Entrada-titulos Titulo",
                        entradaSubtitulo: "Entrada-titulos Subtitulo",
                        entradaImagen: "Picture Entrada-imagen",
                        entradaDescription: "Descripcion Entrada-description",
                        entradaLine: "line-slider Entrada-line",
                    })
                }, 900);
            });
        }
    }

    render() {
        return (
            <div className="Cont-Slide-Historia">

                <Slide entradaLine={this.state.entradaLine} entradaDescription={this.state.entradaDescription} entradaImagen={this.state.entradaImagen} entradaTitulo={this.state.entradaTitulo} entradaSubtitulo={this.state.entradaSubtitulo} item={this.state.objeto}></Slide>
                <div className="Contenedor-botones">

                    <div onClick={this.prevSlide} className="Boton-historia">
                        <p className="arrow-title">Atrás</p>
                        <img className="arrow-img" src={ArrowUp}></img>
                    </div>

                    <div onClick={this.nextSlide} className="Boton-historia">
                        <img className="arrow-img" src={ArrowDown}></img>
                        <p className="arrow-title">Adelante</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default SlidesController;
