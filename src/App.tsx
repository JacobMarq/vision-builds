import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar';
import LoadingScreen from './components/LoadingScreen/loading-screen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className='app'>
          <header className='app-header'>
            <Navbar />
            <img src={logo} className='app-logo' alt='logo' />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className='app-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
              Learn React
            </a>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/components' element={<Components />} />
              <Route path='/build-your-pc' element={<Build />} />
            </Routes>
          </header>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};
const Components = () => {
  return (
    <div>
      <h2>Components</h2>
    </div>
  );
};
const Build = () => {
  return (
    <div>
      <h2>Build</h2>
    </div>
  );
};

export default App;
