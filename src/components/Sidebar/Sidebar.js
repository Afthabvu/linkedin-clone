import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202209/virat_kohli_71st_centuries_0-sixteen_nine.jpg" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Afthab V U</h2>
                <h4>afthabvu@gmail.com</h4>
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
            </div>
        </div>
    )
}

export default Sidebar