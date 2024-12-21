import React from 'react';
import TitleBanner from './components/TitleBanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <TitleBanner 
        title="Zach Magloughlin" 
        email="Showcasing my work and skills"
        links="#3b5998"        
      />
      
      <Footer />
    </div>
  );
};

export default App;
