import React, { useEffect, useState } from 'react'
import PieChartExample from './Language'
import RepoItem from './RepoItem'
import { BsJournalBookmark } from 'react-icons/bs';
import { GoFileCode } from 'react-icons/go';
import { FiUsers, FiUserCheck } from 'react-icons/fi';

const Repo = ({ userRepoData, userData }) => {
    const [langCount, setLangCount] = useState({})
    const lang = []
    const getLanguage = () => {
        userRepoData.map((repo) => {
            lang.push(repo.language)
        })
        return lang
    }
    function countPercentageOfStringsInArray(arr) {
        let count = {};
        arr.forEach(function (item) {
            count[item] = (count[item] || 0) + 1;
        });

        let total = arr.length;
        for (let key in count) {
            count[key] = Math.round((count[key] / total) * 100);
        }

        return count;
    }
    useEffect(() => {
        const count = countPercentageOfStringsInArray(getLanguage());
        let data = {}
        let dataArr = []
        Object.entries(count).map((o) => {
            data = {}
            data.name = o[0]
            data.value = o[1]
            dataArr = [...dataArr, data]
        })
        setLangCount(dataArr)
    }, [userRepoData])
    return (
        <div className='repo-outer-box'>
            <div className="top-container">
                <div className="statistics-container">
                    <p className="heading">Languages</p>
                    <div className="lang-container">
                        {langCount.length > 0 && <PieChartExample key={userData.id} langCount={langCount} />}
                    </div>
                </div>
                <div className="user-details-container">
                    <p className="heading">Statistics</p>
                    <div className="user-details-container-item" style={{ backgroundColor: "#FFE0F0", border: "2px solid #ff72bb" }}>
                        <div className="icon" style={{ border: "2px solid #ff72bb" }}><BsJournalBookmark /></div><div className="item"><div className="item-up">{userData.public_repos}</div><div className="item-down">Repos</div></div>
                    </div>
                    <div className="user-details-container-item" style={{ backgroundColor: "#FFFBEA", border: "2px solid #f6781e" }}>
                        <div className="icon" style={{ border: "2px solid #f6781e" }}><GoFileCode /></div><div className="item"><div className="item-up">{userData.public_gists}</div><div className="item-down">Gists</div></div>
                    </div>
                    <div className="user-details-container-item" style={{ backgroundColor: "#E0FCFF", border: "2px solid #08ee9a" }}>
                        <div className="icon" style={{ border: "2px solid #08ee9a" }}><FiUsers /></div><div className="item"><div className="item-up">{userData.followers}</div><div className="item-down">Followers</div></div>
                    </div>
                    <div className="user-details-container-item" style={{ backgroundColor: "#E6E6FF", border: "2px solid #4646f5" }}>
                        <div className="icon" style={{ border: "2px solid #4646f5" }}><FiUserCheck /></div><div className="item"><div className="item-up">{userData.following}</div><div className="item-down">Following</div></div>
                    </div>
                </div>
            </div>
            <div className="repo-container">
                <p className="heading">{userData.name.split(" ")[0]}'s Repositories</p>
                {userRepoData.map((repo) => {
                    return <RepoItem repo={repo} key={repo.id} />
                })}
            </div>
        </div>
    )
}

export default Repo
