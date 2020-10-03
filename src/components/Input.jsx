import React, {useState} from 'react'
import { Context } from '../Global/Context'

const Input =() => {
    const {sendMsg} = React.useContext(Context)
    const [msg, setMsg] = useState('')
    const userSendMsg = e => {
        e.preventDefault();
        sendMsg(msg);
        setMsg('')
    }
    return (
        <>
            <div className="fixed-bottom form_input">
                <form onSubmit={userSendMsg}>
                    <input type="text" className="form-control shadow-none rounded-0" placeholder='Enter Message...' value={msg} onChange={e => setMsg(e.target.value)} required/>
                </form>
            </div>
        </>
    )
}
export default Input