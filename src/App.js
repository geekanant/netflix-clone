import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated}></Row>
    </div>
  );
}

export default App;
