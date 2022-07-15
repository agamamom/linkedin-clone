import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
// import Header from "./components/Header";
// import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
