import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
function Sidebar() {
    const recentItem = (topic) => {
        return (
            <div className='sidebar__recentItem'>
                <span className='sidebar__recentItemhash'>#</span>
                <p >{topic}</p>
            </div >
        )
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img className="sidebar__topImg" src=" https://akm-img-a-in.tosshub.com/aajtak/images/story/202209/virat_kohli_71st_centuries_0-sixteen_nine.jpg" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2 className='sidebar__toph2'>Afthab V U</h2>
                <h4 className='sidebar__toph4'> afthabvu</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p className='sidebar__statp'>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p className='sidebar__statp'>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("software ")}
                {recentItem("developer")}
                {recentItem("design")}
            </div>
        </div>
    )
}

export default Sidebar