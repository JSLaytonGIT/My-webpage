import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/homePage';
import About from './pages/about';
import Contact from './pages/contact';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
