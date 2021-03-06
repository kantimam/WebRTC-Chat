import React from 'react'
import { Card, withStyles, Theme } from '@material-ui/core'
import { Message } from '../../types/types'


interface Props {
    message: Message
    userId: string
}

const MessageCard=withStyles((theme: Theme)=>({
    root: {
        padding: '0.2rem 1rem',
        marginTop: theme.spacing(1),
        marginRight: 'auto',
        marginLeft: theme.spacing(1),
        display: 'inline-block'
    }
}))(Card)


const OwnMessage=withStyles((theme: Theme)=>({
    root: {
        
        marginRight: theme.spacing(1),
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.light,
        
    }
}))(MessageCard)


const ForeignMessage=withStyles((theme: Theme)=>({
    root: {
        marginRight: 'auto',
        marginLeft: theme.spacing(1),    
    }
}))(MessageCard)


const isOwnMessage=(message: Message, userId: string)=>message.from === userId

//const setMessagePosition=(message: Message)=>isOwnMessage(message)? {marginRight: '1rem', marginLeft: 'auto'} : {marginRight: 'auto', marginLeft: '1rem'}

const ChatMessage = ({message, userId}: Props) => {
    if(isOwnMessage(message, userId)) return (
        <OwnMessage>
            {message.data}
        </OwnMessage>
    )
    return (
        <ForeignMessage>
            {message.data}
        </ForeignMessage>
    )
}

export default ChatMessage
