import React from 'react'
import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'

const users = [
    {
        userName:'damianbenitez89',
        name:'Damian benitez',
        isFollowing:true
    },
    {
        userName:'elonmusk',
        name:'Elon Musk',
        isFollowing:true
    },
    {
        userName:'MrBeast',
        name:'MrBeast',
        isFollowing:false
    },
    {
        userName:'RiverPlate',
        name:'River Plate',
        isFollowing:true
    }
]

export function App (){

    const formatUserName = (userName) => `@${userName}`
    return(
        // como pro podemos pasar children que es una palabra reservada para que reenderise todo lo que esta dentro de un contenedor o tambien podemos pasar un objeto seria de esta manera: {... nombreDelObjeto}
        <section className='App'>
            {
                users.map(user=>{
                    const{userName, name, isFollowing} =user
                    return <TwitterFollowCard
                    key={userName}
                    initialFollowing={isFollowing}
                    formatUserName={formatUserName}
                    userName={userName}
                    name={name}/>
                })
            }
        </section>
    )
}

