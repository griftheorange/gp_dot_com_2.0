import '../CSS/AppRoot.css';
import titleCard from '../resources/lukas-blazek-mcSDtbWXUZU-unsplash.jpg';

function App() {
  return (
    <div className="App">
      <div className="title-card">
        <img src={titleCard}></img>
        <div className='title-container'>
          <h1 className='title-name'>Griffin Poole</h1>
          <h2 className='subtitle'>Full Stack Web Developer, Neuroscience BA</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
