import Header from './components/sections/Header'
import Introduction from './components/sections/Introduction';
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import AboutUs from './components/sections/AboutUs'
import ContactUs from './components/sections/ContactUs'
import Footer from './components/sections/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';


function App() {
  return (

    <div className="app">
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Introduction />
        <Services />
        <Testimonials />
        <ContactUs />
        <AboutUs />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
