import HeaderApp from './shared/header/header-app';
import FooterApp from './shared/footer/footer-app'
import Home from './pages/home/home';
import About from './pages/about/about';
import Mision from './pages/mision/mision';
import Services from './pages/services/services';
import Facilities from './pages/instalations/facilities';
import Contact from './pages/contact/contact';
import History from './pages/history/history';
import Document from './pages/documents/documents';


import './reboot.scss';
import './shared.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderApp />
        <Switch>
          <Route path="/documents">
            <Document />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/instalations">
            <Facilities />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/team">
            <Mision
              title="CALIDAD DE EQUIPO HUMANO"
              description="En Nuestra Institución Contamos con un excelente equipo de profesionales idóneos, que busca en los usuarios fortalecer en su personalidad la identidad como sus Autos (autonomía, autoestima, autoimagen ect) construyendo y socializando su proyecto de vida y así lograr una reinserción social"
              bgDescription="blue"
              bgImage={1}
              secondImage={1}
            />
          </Route>
          <Route path="/vision">
            <Mision
              title="VISIÓN"
              description="La Fundación “HACIA UNA NUEVA VIDA” es una institución líder a nivel regional y nacional enfocada en la atención de la recuperación Bio-psicosocial de la población afectada por el alcoholismo, la adicción y problemas de conducta, promoviendo y desarrollando estilos y calidad de vida saludables en el ámbito familiar, laboral y social. La institución se propone estar a la vanguardia y ser reconocidos como una alternativa eficiente y eficaz en el tratamiento para la recuperación de adiciones."
              bgDescription="green"
              bgImage={0}
              secondImage={0}
            />
          </Route>
          <Route path="/mision">
            <Mision
              title="MISIÓN"
              description="Ayudar a construir un proyecto de vida a las personas afectadas por el consumo de Sustancias Psicoactivas, alcoholismo y problemas de conducta, para que mejoren su calidad de vida y se reintegren a su entorno familiar laboral y social."
              bgDescription='blue'
              bgImage={0}
              secondImage={0}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <FooterApp />
    </div>
  );
}

export default App;
