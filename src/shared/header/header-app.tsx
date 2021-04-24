import React from 'react';
import { HiLocationMarker, HiMenu } from 'react-icons/hi';
import { FaPhoneAlt, FaFacebookSquare } from 'react-icons/fa';
import foundationLogo from '../../img/logo.png';
import './header.scss'
import { Link } from 'react-router-dom';

interface IProps {
}

interface IState {
  menuAbout?: boolean;
  mainMenu?: boolean;
}
class HeaderApp extends React.Component<IProps, IState>  {
  constructor(props: IProps) {
    super(props);
    this.state = {
      menuAbout: false,
      mainMenu: false
    }
  }

  render() {
    return (
      <header>
        <div className="adress">
          <div className="container position-relative">
            <div className="row">
              <div className="col-6 header-info col-md-auto">
                <HiLocationMarker />
                <b>Carrera 5B Barrio Santa Clara Yacuanquer-Nariño</b>
              </div>
              <div className="col-6 header-info col-md-auto pt-2 pt-md-0">
                <FaPhoneAlt />
                <span className="face"><FaFacebookSquare /></span>
                <span className="phone">318 285 5078 / 317 382 2906</span>
              </div>

            </div>
          </div>
        </div>
        <div className="container">
          <nav className="row align-items-center">
            <div className="col-md-4 center-content">
              <Link to="/"><img className="logo-img" src={foundationLogo} alt="logo fundacion" /></Link>
            </div>
            <div
              onMouseDown={() => this.setState({ mainMenu: !this.state.mainMenu })}
              className="d-block d-sm-none menu-mobile bold-primary"><HiMenu /> Menu
            </div>
              <ul className={`${this.state.mainMenu ? 'showMenu' : 'hideMenu'} col-md-8 d-sm-flex mb-0 justify-content-sm-center justify-content-md-start main-menu-list`}>
                <li
                  onMouseEnter={() => this.setState({ menuAbout: true })}
                  onMouseLeave={() => this.setState({ menuAbout: false })}
                  className="me-0 me-md-5 fw-bold menu-item">Nosotros</li>
                {this.state.menuAbout && (
                  <div
                    onMouseEnter={() => this.setState({ menuAbout: true })}
                    onMouseLeave={() => this.setState({ menuAbout: false })}
                    id="menu1" className="barmenu">
                    <ul>
                      <li onClick={() => this.setState({menuAbout: false})} className="item-submenu">
                        <Link to="/about">Quienes Somos</Link>
                      </li>
                      <div className="line-barmenu"></div>
                      <li onClick={() => this.setState({menuAbout: false})} className="item-submenu">
                        <Link to="/history">Nuestra Historia</Link>
                      </li>
                      <div className="line-barmenu"></div>
                      <li onClick={() => this.setState({menuAbout: false})} className="item-submenu">
                        <Link to="/mision">Misión</Link>
                      </li>
                      <div className="line-barmenu"></div>
                      <li onClick={() => this.setState({menuAbout: false})} className="item-submenu">
                        <Link to="/vision">Visión</Link>
                      </li>
                      <div className="line-barmenu"></div>
                      <li onClick={() => this.setState({menuAbout: false})} className="item-submenu">
                        <Link to="team">Nuestro equipo</Link>
                      </li>
                      <div className="line-barmenu"></div>
                      <li onClick={() => this.setState({menuAbout: false})} className="item-submenu">
                        <Link to="/instalations">Nuestras Instalaciones</Link>
                      </li>
                      <div className="line-barmenu"></div>
                      <li onClick={() => this.setState({menuAbout: false})} className="item-submenu">
                        <Link to="/documents">Documentos</Link>
                      </li>
                    </ul>
                  </div>
                )}
                <li className="me-0 me-md-5 fw-bold menu-item">
                  <Link to="/services">Nuestros Servicios</Link>
                </li>
                <li className="me-0 me-md-5 fw-bold menu-item">
                  <Link to="/contact">Contácto</Link>
                </li>
              </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default HeaderApp;