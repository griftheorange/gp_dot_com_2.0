import '../CSS/AppRoot.css';
import TitleCard from './SupportComponents/TitleCard';
import HomePage from './Pages/HomePage'
import ProjectRouter from './ProjectRouter'

import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {

  let [visible, setVisible] = useState(false)

  return (
    <Router>
      <div className="App">
        <TitleCard setVisible={setVisible}/>
        <div className={visible ? "main-page-content-wrapper" : "main-page-content-wrapper hidden"}>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/project_overview/:name' component={ProjectRouter}/>
            <Route path='/' component={HomePage}/>
          </Switch>
        </div>
        <div className="copyright"><h5>Copyright &copy;{new Date().getFullYear()} Griffin Poole. All rights reserved.</h5></div>
      </div>
    </Router>
  );
}

export default App;
