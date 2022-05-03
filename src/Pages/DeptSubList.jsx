import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import ChildNavBar from '../Components/ChildNavbar';
import InnerComp from '../Components/InnerComp';
import CustomizedSwitches from '../Components/Switch';
import "./DeptSubList.css"

const data = [
    {
        name: "Enrolling Students",
        access: true,
        crud: <td style={{ textAlign: "center" }}>
            View <span className="text-muted">|</span> Create{" "}
            <span className="text-muted">|</span> Edit{" "}
            <span className="text-muted">|</span> Delete
        </td>,
    },
    {
        name: "Financial Details",
        access: 'diabled',
        crud: <td style={{ textAlign: "center" }}>
            -
        </td>,
    },
    {
        name: "Furniture Order",
        access: false,
        crud: <td style={{ textAlign: "center" }}>
            View <span className="text-muted">|</span> Create{" "}
        </td>,
    },
    {
        name: "Technological Equipment",
        access: false,
        crud: <td style={{ textAlign: "center" }}>
            View <span className="text-muted">|</span> Create{" "}
        </td>,
    },
    {
        name: "Orginisational Modification",
        access: true,
        crud: <td style={{ textAlign: "center" }}>
            View <span className="text-muted">|</span> Create{" "}
            <span className="text-muted">|</span> Edit{" "}
            <span className="text-muted">|</span> Delete
        </td>,
    },
    {
        name: "Permissions & Access Control",
        access: false,
        crud: <td style={{ textAlign: "center" }}>
            -
        </td>,
    }
]

export class DeptSubList extends Component {
    constructor() {
        super();
        this.state = {
            isPlus: false
        }
    }
    changeIcon() {
        console.log("State changed");
        this.setState({ isPlus: !this.state.isPlus })
        console.log(this.state.isPlus);
    }
    render() {
        return (
            <div className="main">
                <div className="page1">
                    <span>
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-left mx-2"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                        </Link>
                    </span>
                    <span style={{ color: "red" }}>
                        <b>Teachers</b>
                    </span>
                    <span className="mx-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil mx-5"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                    </span>

                    <div className="container mx-2 my-2">
                        <ChildNavBar />

                        <div className="my-1">
                            <table className="table">
                                <thead className="my-thead-dark">
                                    <tr>
                                        <td className="col"></td>
                                        <td className="col" style={{ textAlign: "left" }} >Department/Role Name</td>
                                        <td className="col">Access Level</td>
                                        <td className="col" style={{ textAlign: "center" }}>
                                            Summary
                                        </td>
                                        <td className="col">Last updated</td>
                                        <td className="col"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <tr key={index} >
                                                    <td>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-plus-circle"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                        </svg>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td className='wrap' >
                                                        {
                                                            item.access ? (
                                                                item.access === 'disabled' ? (
                                                                    <div className="no-boxed">No Access</div>
                                                                ): (
                                                                    <div className="green-boxed">All Access</div>
                                                                )
                                                            ) : (
                                                                <div className="red-boxed">Restricted Access</div>
                                                            )
                                                        }
                                                    </td>
                                                    {item.crud}
                                                    <td style={{textAlign:"center"}} >1 min ago</td>
                                                    <td>
                                                        <CustomizedSwitches />
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
            </div>
        )
    }
}
export default DeptSubList;