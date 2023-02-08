import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import User from './components/User';
import { uData, rData } from './components/data';
import Repo from './components/Repo';
import Footer from './components/Footer';

function App() {
  const [userData, setUserData] = useState(uData)
  const [userRepoData, setUserRepoData] = useState(rData)
  return (
    <div className="App">
      <Hero setUserData={setUserData} setUserRepoData={setUserRepoData} />
      <User userData={userData} />
      <div className="body-container">
        <Repo userRepoData={userRepoData} userData={userData} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
