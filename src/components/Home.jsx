import React from 'react';
import '../style/homestyle.css';

function Home() {
  return (
    <section> 
     <div className="introHome d-flex justify-content-center align-items-center " >
      <div className='home-text-wrapper text-center'>
      <h1 className="text-white">
        <a href="Chi sono" className="text-white text-decoration-none">
        Alexandra Manolache</a></h1>
        
      <h2 className='text-white'>
        <a href="chi sono" className="text-white text-decoration-none">Full-Stack Developer</a> </h2>
      </div>
      
     </div>
    </section>
  );
}

export default Home;