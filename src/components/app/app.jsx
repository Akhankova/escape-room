import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import NotFound from 'components/not-found/not-found';
import NoPage from 'components/no-page/no-page';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/detailed-quest/:id">
          <DetailedQuest />
        </Route>
        <Route exact path="/contacts">
        <Contacts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/no">
          <NoPage />
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
