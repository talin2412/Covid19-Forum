import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'
import "./MenuChannel.css"

function MenuChannel({id, channelName}) {
    const dispatch = useDispatch()

    return (
        <div className='menuChannel' onClick={() => dispatch(
            setChannelInfo({
            channelId: id,
            channelName: channelName,
        })
        )
        }>
            <h4>
                <span className='menuChannel_hash'>#</span>{channelName}
            </h4>
            
        </div>
    )
}

export default MenuChannel
