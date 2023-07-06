import {
  BrowserRouter as Router,Routes,
 Route, Link
} from "react-router-dom"
import TopBar from "./componenets/topBar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";

function App() {
  const user = false;
  return (
    
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home/> :<Register />}></Route>
        <Route path="/login" element={user ? <Home/> :<Login />}></Route>
        <Route path="/settings" element={user ? <Settings />:<Register />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
        <Route path="/write" element={user ? <Write/> :<Register />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
