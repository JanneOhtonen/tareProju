import React from 'react'
import styles from './style';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Esiintymislavat, Lavavuokraus, Yhteystiedot, Kuvat, Myynti, Footer } from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Esiintymislavat />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Lavavuokraus />
        <Kuvat />
        <Yhteystiedot />
        <Myynti />
        <Footer />
      </div>
    </div>
  </div>
);

export default App
