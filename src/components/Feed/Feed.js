import React, { useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
    const[posts,setPosts]= useState([])
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" />
                        <button type='submit'>send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions title="Photo" Icon={ImageIcon} color="#70B5F9"/>
                    <InputOptions title="Video" Icon={SubscriptionsIcon} color="#E7A33E"/>
                    <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD"/>
                    <InputOptions title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E"/>
                </div>
            </div>
            {posts.map(post =>(
                <Post/>
            ))}
            <Post
             name= 'Afthab'
             description="This is test"
             message = 'wow this worked'

            />
        </div>
    )
}

export default Feed