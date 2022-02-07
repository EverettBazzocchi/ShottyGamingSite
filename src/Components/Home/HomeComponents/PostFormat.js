import React from 'react'

const PostFormat = (props) => {
    return (
        <div className="postFormat">
            <div className="Author">{props.author}</div>
            <div className="title">{props.title}</div>
            <div className="Date">{props.date}</div>
            <div className="message">{props.message}</div>
        </div>
    )
}

export default PostFormat
