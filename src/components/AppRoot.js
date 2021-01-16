import '../CSS/AppRoot.css';
import TitleCard from './TitleCard';
import BusinessCard from './BusinessCard';
import ProjectCard from './ProjectCard';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <TitleCard/>
      <div className="main-page-content-wrapper">
        <Card label="Information">
          <BusinessCard/>
        </Card>
        <Card label="Projects">
          <ProjectCard/>
        </Card>
        <Card label="References">
          <p>People like, REALLY like me... Like a lot</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
