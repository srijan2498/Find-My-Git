import React from 'react'

const User = ({ userData }) => {
    return (
        <div className='user-container'>
            <div className="user-box">
                <div className="user-profile-pic" style={{ backgroundImage: `url(${userData.avatar_url})` }}></div>
                <div className="names-follow">
                    <div className="user-name"><div className="name">{userData.name}</div>
                        <div className="userName">@{userData.login}</div></div>
                    <div className="follow" onClick={() => window.open(`${userData.html_url}`, "_blank")}>Follow</div>
                </div>
            </div>
        </div>
    )
}

export default User
