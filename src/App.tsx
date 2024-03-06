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
  bookmarkOutline,
  ellipsisVerticalOutline,
  homeOutline,
} from 'ionicons/icons';
import ScheduleClass from './pages/group-class/ScheduleClass';
import Evolution from './pages/hub-page/evolution/Evolution';

import { HubPage } from './pages/hub-page/HubPage';
import { PageNotFound } from './pages/not-found/PageNotFound';
import ChangePassword from './pages/password/ChangePassword';
import Payments from './pages/payments/Payments';
import Profile from './pages/profile/Profile';
import { PersonalData } from './pages/profile/personal-data/PersonalData';
import Routine from './pages/routine/Routine';

import History from './pages/hub-page/history/History';
import Messages from './pages/hub-page/messages/Messages';
import Shopping from './pages/hub-page/shopping/Shopping';
import Workout from './pages/workout/Workout';
import './theme/variables.scss';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/schedule" component={ScheduleClass} />
          <Route exact path="/change-password" component={ChangePassword} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:id" component={PersonalData} />
          <Route exact path="/profile/:id/payments" component={Payments} />

          <Route exact path="/workout" component={Workout} />
          <Route exact path="/workout/:id/routine" component={Routine} />

          <Route exact path="/hub-place" component={HubPage} />
          <Route exact path="/hub-place/evolution" component={Evolution} />
          <Route exact path="/hub-place/messages" component={Messages} />
          <Route exact path="/hub-place/history" component={History} />
          <Route exact path="/hub-place/shopping" component={Shopping} />

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/not-found" component={PageNotFound} />
          <Route>
            <Redirect to="/not-found" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel class="text-action font-main-shadow-color">Ginásio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="workout" href="/workout">
            <IonIcon icon={barbellOutline} />
            <IonLabel class="text-action font-main-shadow-color">Treino</IonLabel>
          </IonTabButton>

          <IonTabButton tab="evolution" href="/schedule">
            <IonIcon icon={bookmarkOutline} />
            <IonLabel class="text-action font-main-shadow-color">Agendar</IonLabel>
          </IonTabButton>

          <IonTabButton tab="hub" href="/hub-place">
            <IonIcon icon={ellipsisVerticalOutline} />
            <IonLabel class="text-action font-main-shadow-color">Hub</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
