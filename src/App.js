import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}>
        TItle
      </Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}>
        TItle
      </Row>
    </div>
  );
}

export default App;
