import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import "./DeptList.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const data = [
    {
        name: "Teachers",
        access_level: true,
        no_of_members: "4",
        last_updated: "1 min ago"
    },
    {
        name: "External Faculty",
        access_level: false,
        no_of_members: "8",
        last_updated: "1 min ago"
    },
    {
        name: "Lab Assistants",
        access_level: false,
        no_of_members: "16",
        last_updated: "1 min ago"
    },
    {
        name: "	Non-teaching staff",
        access_level: false,
        no_of_members: "4",
        last_updated: "	1 min ago"
    }
]

export class DeptList extends Component {
    render() {
        return (<div className='main'>
            <div className='page1'>
                <button type="button" className="btn custom-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus mx-2" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    Add Role
                </button>
                <button type="button" className="btn btn-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil mx-2" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                </button>
                <button type="button" className="btn btn-white" width="100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash " viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>

                <div className='my-3'>
                    <table className="table">
                        <tr className="my-thead-dark" style={{padding:"20px 0px"}} >
                            <td className="col"></td>
                            <td className="col" style={{ textAlign: "left" }} >Department/Role Name</td>
                            <td className="col" >Access Level</td>
                            <td className="col" style={{ textAlign: 'center' }}>No. of members</td>
                            <td className="col">Last updated</td>
                            <td className="col"></td>
                        </tr>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index}  >
                                            <td > <FormControlLabel control={<Radio />} /></td>
                                            <td >{item.name} </td>
                                            {
                                                item.access_level ? (
                                                    <td className='wrap' >
                                                        <div className="green-boxed">All Access</div>
                                                    </td>
                                                ) : (
                                                    <td className='wrap' >
                                                        <div className="red-boxed">Restricted Access</div>
                                                    </td>
                                                )
                                            }
                                            <td style={{ textAlign: 'center' }}>4</td>
                                            <td style={{ textAlign: 'center' }}>1 min ago</td>
                                            <td>
                                                <span>
                                                    <Link to='/page2'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                        </svg>
                                                    </Link>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
export default DeptList;