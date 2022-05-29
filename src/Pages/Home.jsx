import React, { Component } from 'react';
import "./Home.css"
import logo from "../Images/fabrik_full_logo.png"

class Home extends Component {
    render() {
        return (
            <div className='container' >
                <div className='side-bar' >
                    <div className='wrap' style={{ marginTop: "50px" }} >
                        <img src={logo} width="100px" />
                    </div>
                </div>
                <div className='container1' >
                    <div className='heading-ctn wrap' >
                        <div>
                            <div className='heading' >
                                Community
                            </div>
                            <div className='sub-heading' >
                                Ideas of the open world
                            </div>
                        </div>
                    </div>
                    <div>
                        <input placeholder='Search'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;