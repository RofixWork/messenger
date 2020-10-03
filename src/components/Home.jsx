import React, {useContext} from 'react'
import { Context } from '../Global/Context'
import Messages from './Messages'
import Welcome from './Welcome'

const Home = () => {
    const {loader, user} = useContext(Context)
    return (
        <div className='home'>
            <div className="container">
                {!loader && user ? <Messages/> : <Welcome/>}
            </div>
        </div>
    )
}

export default Home
