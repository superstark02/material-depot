import React, { Component } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import "./Tabs.css"
import SignalWifi4BarRoundedIcon from '@mui/icons-material/SignalWifi4BarRounded';
import CalendarViewMonthRoundedIcon from '@mui/icons-material/CalendarViewMonthRounded';

class Tabs extends Component {
    render() {
        return (
            <div style={{width:"100%"}} >
                <div className='upper-bar' >
                    <div className='h-tabs' >
                        <div className='h-tabs-item' >
                            <SignalWifi4BarRoundedIcon/> Permissions
                        </div>
                        <div className='h-tabs-item' >
                            <CalendarViewMonthRoundedIcon/> Approval Matrix
                        </div>
                    </div>
                    <div className='sync' >
                        <CachedIcon/>  Last synced 15 mins ago
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabs;