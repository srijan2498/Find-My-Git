import React from 'react'
import './style.css'
import { CiSearch } from 'react-icons/ci';
import axios from 'axios';

const Hero = ({ setUserData, setUserRepoData }) => {
    const fetchUser = async (e) => {
        e.preventDefault()
        let userName = document.getElementById("userName").value
        const fetchedData = await axios(`https://api.github.com/users/${userName}`)
        setUserData(fetchedData.data)
        const fetchedRepo = await axios(`https://api.github.com/users/${userName}/repos`)
        setUserRepoData(fetchedRepo.data)
        document.getElementById("userName").value=""
    }
    return (
        <div className='hero-container'>
            <p className="title">Find My Git</p>
            <form method="post" onSubmit={fetchUser}>
                <span className="search-icon"><CiSearch /></span>
                <input type="text" placeholder="Enter Github User" name="userName" id="userName" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Hero
