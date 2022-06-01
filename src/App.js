import Router from "./router/Routes"
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App bg-primary">
      <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;
