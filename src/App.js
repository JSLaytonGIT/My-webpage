import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/homePage';
import About from './pages/about';
import Contact from './pages/contact';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
