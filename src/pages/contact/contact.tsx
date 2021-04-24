import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <form id="contact-form" method="post" role="form">
                    <div className="alert alert-success fade show" role="alert">
                        Mensaje enviado exitosamente!
                    </div>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Nombre *</label>
                                    <input id="form_name" className="form-control" required name="name" placeholder="Escribir nombre *" data-error="Primer nombre es requerido." type="text" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Apellido *</label>
                                    <input id="form_lastname" className="form-control" required name="surname" placeholder="Escribir apellido *" data-error="Segundo nombre es requerido." type="text" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Correo electrónico *</label>
                                    <input id="form_email" className="form-control"required name="email" placeholder="Escribir correo electrónico *" data-error="Email es requerido" type="text" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-4">
                                    <label htmlFor="form_name">Seleccionar Asunto *</label>
                                    <select id="form_need" name="need" className="form-control" required data-error="Asunto es requerido">
                                        <option selected value="Información General">Información General</option>
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
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Escribir contenido del mensaje *" required data-error="Mensaje es requerido"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="g-recaptcha" data-callback="captchaSuccesfull" data-sitekey="6LfqU7MZAAAAALBSrQ6lWBpTOCVVyrQJ2RlzyTjR"></div>
                                <span id="captcha"></span>
                                <br />
                                <input type="submit" className="btn btn-success btn-send mb-4" value="Enviar correo" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;