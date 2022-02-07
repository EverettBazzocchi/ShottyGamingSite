import React from 'react'
import OnlineStaff from '../OnlineStaff'
import Posts from './HomeComponents/Posts'


const Home = () => {
    return (
        <div className="home">
            <OnlineStaff/>
            <Posts />
        </div>
    )
}

export default Home
