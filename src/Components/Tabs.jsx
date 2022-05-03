import React, { Component } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import "./Tabs.css"
import SignalWifi4BarRoundedIcon from '@mui/icons-material/SignalWifi4BarRounded';
import CalendarViewMonthRoundedIcon from '@mui/icons-material/CalendarViewMonthRounded';
import DeptList from '../Pages/DeptList';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import DeptSubList from '../Pages/DeptSubList';

class Tabs extends Component {
    render() {
        return (
            <div style={{ width: "100%" }} >
                <div className='upper-bar' >
                    <div className='h-tabs' >
                        <div className='h-tabs-item-selected' >
                            <SignalWifi4BarRoundedIcon /> Permissions
                        </div>
                        <div className='h-tabs-item' >
                            <CalendarViewMonthRoundedIcon /> Approval Matrix
                        </div>
                    </div>
                    <div className='sync' >
                        <CachedIcon />  Last synced 15 mins ago
                    </div>
                </div>
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<DeptList/>} />
                            <Route path="/view-details" element={<DeptSubList/>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Tabs;