import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-body">
          <iframe 
            title="Rick rolled"
            id="ytplayer" 
            type="text/html" 
            width="720" 
            height="405"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0"
            frameBorder="0" 
            allowFullScreen>
          </iframe>
          <h3 className="No">No!</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
