
import './App.css';
import myWonderfulImage from "./blanc.jfif"
import myWonderfulvideo from "./fleur.mp4"
function App() {
  return (
    <div className="App">
     
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Flower</h1>
          <br />
          
         <img src={myWonderfulImage} alt ='myImage' />
   
          <br />
          <img src="/orange.jfif" alt="2002" />
        </div>
        <video width={320} height={240} controls>
          <source src={myWonderfulvideo} type="video/mp4" />
        </video>
      </div>
    
  

    </div>
  );
}

export default App;
