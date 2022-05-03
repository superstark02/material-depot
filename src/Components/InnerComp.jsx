import React, { Component } from 'react'

export class Innercomp extends Component {
    render() {
        return (
            <div>
                <div className="container mx-4">
                    <div className="row">
                        <div className="col-sm">
                            Access Control
                            <div className="my-2">
                                <span className="iconn">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <circle cx="10" cy="10" r="9.25" stroke="#BDBDBD" strokeWidth="1.5"
                                        />
                                    </svg>
                                </span>

                                <span className="textico mx-2">
                                    All access
                                    <span
                                        className="text-muted"
                                        style={{ fontSize: "15px" }}
                                    >
                                        <br />
                                        Can access all items
                                    </span>
                                </span>
                                <div>

                                    <span className="iconn">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="9.25"
                                                stroke="#B73A3A"
                                                strokeWidth="1.5"
                                            />
                                            <circle cx="10" cy="10" r="7" fill="#B73A3A" />
                                        </svg>
                                    </span>

                                    <span className="textico mx-2">
                                        Restricted access
                                        <span
                                            className="text-muted"
                                            style={{ fontSize: "15px" }}
                                        >
                                            <br />
                                            Can access only assigned or created
                                        </span>
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            Permissions
                            <div className="my-2">
                                <div>
                                    <span className="iconn">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z" fill="black" fillOpacity="0.54" />
                                        </svg>
                                    </span>
                                    <span className="textico mx-2">
                                        View list items in access
                                    </span>
                                </div>
                                <div>
                                    <span className="iconn">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM13.58 4.78131L14.99 6.26373L6.98999 14.6154L2.98999 10.45L4.40999 8.97801L6.98999 11.661L13.58 4.78131Z" fill="#B73A3A" />
                                        </svg>
                                    </span>
                                    <span className="textico mx-2">
                                        Edit items in access
                                    </span>
                                </div><div>
                                    <span className="iconn">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z" fill="black" fillOpacity="0.54" />
                                        </svg>
                                    </span>
                                    <span className="textico mx-2">
                                        Create items in access
                                    </span>
                                </div><div>
                                    <span className="iconn">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z" fill="black" fillOpacity="0.54" />
                                        </svg>
                                    </span>
                                    <span className="textico mx-2">
                                        Delete items in access
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Innercomp;