import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import User from './components/User';
import { uData, rData } from './components/data';
import Repo from './components/Repo';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(uData)
  const [userRepoData, setUserRepoData] = useState(rData)

  const fetchData=async()=>{
    try {
      const fetchedData = await axios(`https://api.github.com/users/srijan2498`)
      setUserData(fetchedData.data)
      const fetchedRepo = await axios(`https://api.github.com/users/srijan2498/repos`)
      setUserRepoData(fetchedRepo.data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

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
