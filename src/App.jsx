import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import MongoTest from './pages/MongoTest/MongoTest';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mongo-test" element={<MongoTest />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
