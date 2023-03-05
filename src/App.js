import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/routes/Home";
import Detail from "../src/routes/Detail";
import Recent from "../src/routes/Recent";
import TV_series from "../src/routes/TV_series";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/tv_series" element={<TV_series />} />
      </Routes>
    </Router>
  );
}

export default App;

