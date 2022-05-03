import React, { Component } from 'react';
import "./AppBar.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

class AppBar extends Component {
    render() {
        return (
            <div className='app-bar-parent' >
                <div className='app-bar-flex' >
                    <div className='wrap' >
                        <div className='round-div' ></div>
                    </div>
                    <div style={{fontSize:"14px"}} >
                        <b>Classroom <br/> Manager</b>
                    </div>
                </div>
                <div className='app-bar-flex'>
                    <div>
                        <div className='round-div-2' ></div>
                    </div>
                    <div className='user-name wrap'  style={{marginRight:"20px"}}  >
                        Kishore
                    </div>
                    <div className='wrap' >
                        <NotificationsNoneOutlinedIcon/>
                        <HelpOutlineOutlinedIcon/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppBar;