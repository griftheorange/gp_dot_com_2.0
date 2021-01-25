import '../CSS/AppRoot.css';
import TitleCard from './SupportComponents/TitleCard';
import HomePage from './Pages/HomePage'
import ProjectRouter from './ProjectRouter'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <TitleCard/>
        <div className="main-page-content-wrapper">
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/project_overview/:name' component={ProjectRouter}/>
            <Route path='/' component={HomePage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
