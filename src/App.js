import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ForumHome from './pages/ForumHome';
import SinglePost from './components/SinglePost';
import SoloPost from './pages/SoloPost';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path="/auth" element = {<Auth />}  />
      <Route path="/home" element = {<ForumHome />}  />
      <Route path = "/post/:id" element={<SoloPost />} />
    </Routes>
  );
}

export default App;
