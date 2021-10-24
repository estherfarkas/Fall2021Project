import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import LandingPageTests from './pages/LandingPageTests';
import InitialSurvey from './pages/InitialSurvey';
import Reading from './pages/Reading'
import Reading1 from './pages/Reading1'
import Reading1Questions from './pages/Reading1Questions'
import Reading2 from './pages/Reading2'
import Reading2Questions from './pages/Reading2Questions'
import PostReadingSurvey from './pages/PostReadingSurvey'
import Math from './pages/Math'
import Math1 from './pages/Math1'
import Math2 from './pages/Math2'
import PostEverythingSurvey from './pages/PostEverythingSurvey';
import PostDesktopSurvey from './pages/PostDesktopSurvey';
import PostMobileSurvey from './pages/PostMobileSurvey';
import End  from './pages/End';
import PostMathSurvey from './pages/PostMathSurvey';
import DesktopDeviceSwitch from './pages/DesktopDeviceSwitch';
import MobileDeviceSwitch from './pages/MobileDeviceSwitch';
import Parsons from "./pages/Parsons";
import Parsons1 from "./pages/Parsons1";
import Parsons2 from "./pages/Parsons2";
import PostParsonsSurvey from "./pages/PostParsonsSurvey";





/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MobileLandingPage from './pages/MobileLandingPage';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path = "/" component = {LandingPageTests} />
        <Route exact path = "/InitialSurvey" component = {InitialSurvey} />
        <Route exact path = "/Reading" component  = {Reading} />
        <Route exact path = "/Reading1" component = {Reading1} /> 
        <Route exact path = "/Reading1Questions" component = {Reading1Questions}/>
        <Route exact path = "/Reading2" component = {Reading2}/>
        <Route exact path = "/Reading2Questions" component = {Reading2Questions} />
        <Route exact path = "/PostReadingSurvey" component = {PostReadingSurvey}/>
        <Route exact path = "/Math" component = {Math}/>
        <Route exact path = "/Math1" component = {Math1}/>
        <Route exact path = "/Math2" component = {Math2}/>
        <Route exact path = "/PostMathSurvey" component = {PostMathSurvey}/>
        <Route exact path = "/Parsons" component = {Parsons}/>
        <Route exact path = "/PostParsonsSurvey" component = {PostParsonsSurvey}/>
        <Route exact path = "/Parsons1" component = {Parsons1}/>
        <Route exact path = "/Parsons2" component = {Parsons2}/>
        <Route exact path = "/PostEverythingSurvey" component = {PostEverythingSurvey}/>
        <Route exact path = "/PostDesktopSurvey" component = {PostDesktopSurvey}/>
        <Route exact path = "/PostMobileSurvey" component = {PostMobileSurvey}/>
        <Route exact path = "/End" component = {End}/>
        <Route exact path = "/MobileDeviceSwitch" component = {MobileDeviceSwitch}/>
        <Route exact path = "/DesktopDeviceSwitch" component = {DesktopDeviceSwitch}/>
        <Route exact path = "/MobileLandingPage" component = {MobileLandingPage}/>
        <Route exact path = "/PostParsonsSurvey" component = {PostParsonsSurvey}/>

      </IonRouterOutlet>
    </IonReactRouter>
    

  </IonApp>
);

export default App;
