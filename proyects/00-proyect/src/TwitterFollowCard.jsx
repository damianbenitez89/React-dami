import { useState } from "react"
export function TwitterFollowCard ({formatUserName, userName, name}) {

    const [isFollowing, setIsFollowing] = useState(false)

    const textFollow = isFollowing?'Siguiendo':'Seguir'
    const buttonClassName= isFollowing
    ?'tw-followCard-button is-following'
    :'tw-followCard-button'

    const handleClick= () =>{
        setIsFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'src={`https://unavatar.io/twitter/${formatUserName(userName)}`} alt="avatar de usuario" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {textFollow}
                </button>
            </aside>
        </article>
    )
}