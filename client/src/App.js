import { Routes,Route,} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Upload from "./pages/Upload/Upload";
import Editcode from "./pages/Editcode/Editcode";
import Blog from "./pages/Blog/Blog";


function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/editcode" element={<Editcode />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
