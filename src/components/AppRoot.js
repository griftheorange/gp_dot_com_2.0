import '../CSS/AppRoot.css';
import TitleCard from './TitleCard';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <TitleCard/>
      <div className="main-page-content-wrapper">
        <Card label="Information">
          <p>Hello</p>
        </Card>
        <Card>
          <p>Hello 2</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
