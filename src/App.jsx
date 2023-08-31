import React from 'react'
import styles from './style';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Esiintymislavat from './components/Esiintymislavat';
import Lavavuokraus from './components/Lavavuokraus';
import Yhteystiedot from './components/Yhteystiedot';
import Kuvat from './components/Kuvat';
import Myynti from './components/Myynti';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Esiintymislavat />} />
        <Route path='/lavavuokraus' element={<Lavavuokraus />} />
        <Route path='/kuvat' element={<Kuvat />} />
        <Route path='/yhteystiedot' element={<Yhteystiedot />} />
        <Route path='/myynti' element={<Myynti />} />
      </Routes>

      <Footer />
    </div>
  </Router>
);

export default App
