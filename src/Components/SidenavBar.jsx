import React, { Component } from 'react';
import "./SidenavBar.css"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Tabs from './Tabs';

const tabs = [
    {
        name: "Projects",
        icon: <DashboardOutlinedIcon style={{ fontSize: "30px" }} />
    },
    {
        name: "Classrooms",
        icon: <BusinessCenterOutlinedIcon style={{ fontSize: "30px" }} />
    },
    {
        name: "Permissions",
        icon: <SecurityOutlinedIcon style={{ fontSize: "30px" }} />
    }
]

class SidenavBar extends Component {

    state = {
        selectedIndex: 2
    }

    toggleIndex = (e) => {
        this.setState({selectedIndex: e})
    }

    render() {
        return (
            <div style={{ display: "flex", width:"100%" }} >
                <div className='tabs' >
                    {
                        tabs.map((item, index) => {
                            if (index === this.state.selectedIndex) {
                                return (
                                    <div key={index} className='selected-item tab-item' onClick={()=>{this.toggleIndex(index)}} >
                                        <div  >
                                            {item.icon}
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div key={index} className='tab-item' onClick={()=>{this.toggleIndex(index)}} >
                                    <div  >
                                        {item.icon}
                                    </div>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{width:"100%"}} >
                    <Tabs/>
                </div>
            </div>
        );
    }
}

export default SidenavBar;
