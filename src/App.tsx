import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import {
  barbellOutline,
  homeOutline,
  mailOutline,
  statsChartOutline,
  timerOutline
} from 'ionicons/icons';
import Evolution from './pages/evolution/Evolution';
import ScheduleClass from './pages/groupClass/ScheduleClass';
import History from './pages/history/History';
import Messages from './pages/messages/Messages';
import ChangePassword from './pages/password/ChangePassword';
import Payments from './pages/payments/Payments';
import Profile from './pages/profile/Profile';
import Routine from './pages/routine/Routine';
import Shopping from './pages/shopping/Shopping';
import Workout from './pages/workout/Workout';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/workout" component={Workout} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/schedule" component={ScheduleClass} />
          <Route exact path="/evolution" component={Evolution} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/workout/routine/:id" component={Routine} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="workout" href="/workout">
            <IonIcon icon={barbellOutline} />
            <IonLabel>Treino</IonLabel>
          </IonTabButton>

          <IonTabButton tab="evolution" href="/evolution">
            <IonIcon icon={statsChartOutline} />
            <IonLabel>Evolução</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Meu espaço</IonLabel>
          </IonTabButton>

          <IonTabButton tab="history" href="/history">
            <IonIcon icon={timerOutline} />
            <IonLabel>Histórico</IonLabel>
          </IonTabButton>

          <IonTabButton tab="messages" href="/messages">
            <IonIcon icon={mailOutline} />
            <IonLabel>Menssagens</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
