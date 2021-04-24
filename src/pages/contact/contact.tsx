import React from 'react';
import axios from 'axios';
import { MouseEventHandler } from 'react';

interface IContactState {
    name: string,
    lastName: string,
    email: string,
    subject: string,
    message: string,
    mailSent: boolean,
    error: string,
    captchaResolved: boolean
}
interface IContactProps {

}

var Recaptcha = require('react-recaptcha');
var recaptchaInstance: any;
const initialState = {
    name: '',
    lastName: '',
    email: '',
    subject: 'Información General',
    message: '',
    mailSent: false,
    error: '',
    captchaResolved: false,
};


class Contact extends React.Component<IContactProps, IContactState> {

    constructor(props: IContactState) {
        super(props);
        this.state = initialState;

    }
    captchaSuccesfull: MouseEventHandler = () => {
        this.setState({ captchaResolved: true });
    }

    handleFormSubmit = (e: any) => {
        if (this.state.captchaResolved) {
            e.preventDefault();
            axios({
                method: 'post',
                url: '/index.php',
                headers: { 'content-type': 'application/json' },
                data: this.state
            }).then(result => {
                this.setState({
                    mailSent: result.data.sent
                });
                this.setState(initialState);
                recaptchaInstance.reset();
                console.log('mensaje enviado');
            }).catch(error => {
                this.setState({ error });
                console.log(this.state.error);
            });
        } else {
            console.log('resuelve el captcha');
        }
    }
    render() {
        return (
            <div className="container">
                <form id="contact-form" >
                    <div className="alert alert-success hide-element fade show" role="alert">
                        Mensaje enviado exitosamente!
                    </div>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Nombre *</label>
                                    <input onChange={e => this.setState({ name: e.target.value })} id="form_name" className="form-control" required name="name" placeholder="Escribir nombre *" data-error="Primer nombre es requerido." type="text" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Apellido *</label>
                                    <input onChange={e => this.setState({ lastName: e.target.value })} id="form_lastname" className="form-control" required name="surname" placeholder="Escribir apellido *" data-error="Segundo nombre es requerido." type="text" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Correo electrónico *</label>
                                    <input onChange={e => this.setState({ email: e.target.value })} id="form_email" className="form-control" required name="email" placeholder="Escribir correo electrónico *" data-error="Email es requerido" type="text" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Seleccionar Asunto *</label>
                                    <select onChange={e => this.setState({ subject: e.target.value })} id="form_need" name="need" className="form-control" required data-error="Asunto es requerido">
                                        <option value="Información General">Información General</option>
                                        <option value="Preguntas">Preguntas</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Mensaje *</label>
                                    <textarea onChange={e => this.setState({ message: e.target.value })} id="form_message" name="message" className="form-control" placeholder="Escribir contenido del mensaje *" required data-error="Mensaje es requerido"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Recaptcha
                                    sitekey="6LfqU7MZAAAAALBSrQ6lWBpTOCVVyrQJ2RlzyTjR"
                                    ref={(e: any) => recaptchaInstance = e}
                                    verifyCallback={this.captchaSuccesfull}
                                />
                                <span id="captcha"></span>
                                <br />
                                <input onClick={e => this.handleFormSubmit(e)} className="btn btn-success btn-send mb-4" value="Enviar correo"  readOnly/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;