import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";

import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
          <div>
            <Routes>
              <Route element={<Layout />}>
                <Route exact path="/" element={<Fib />} />
                <Route path="/otherpage" element={<OtherPage />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
