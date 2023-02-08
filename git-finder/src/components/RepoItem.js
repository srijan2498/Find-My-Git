import React from 'react'

const RepoItem = ({ repo }) => {
    const { name, html_url, description, language, forks_count } = repo
    const goToRepo=()=>{
        window.open(html_url,"_blank")
    }
    return (
        <div className='repo-item-container' onClick={goToRepo}>
            <p className="repo-heading">{name}</p>
            <p className="repo-desc">{description}</p>
            <p className="forks">{forks_count} forks</p>
            {language && <p className="language">.{language}</p>}
        </div>
    )
}

export default RepoItem
