import React from 'react';
import '../style/homestyle.css';

function Home() {
  return (
    <section> 
     <div className="introHome d-flex justify-content-center align-items-center " >
      <div className='home-text-wrapper text-center'>
      <h1 className="text-white">Alexandra Manolache</h1>
      <h2 className='text-white'>Full-Stack Developer </h2>
      </div>
     </div>
    </section>
  );
}

export default Home;