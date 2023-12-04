import React from 'react'
import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'



export function App (){

    const formatUserName = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing
            userName="damianbenitez89"
            name="Damian Bentez"/>
            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing
            userName="damianbenitez89"
            name="Damian Bentez"/>
            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing
            userName="damianbenitez89"
            name="Damian Bentez"/>
            <TwitterFollowCard
            formatUserName={formatUserName}
            isFollowing
            userName="damianbenitez89"
            name="Damian Bentez"/>
        </section>
    )
}

