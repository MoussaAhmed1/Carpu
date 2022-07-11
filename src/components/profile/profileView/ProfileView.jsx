import React from 'react'
import './Profile.css'
export default function ProfileView() {
  return (
    
            <div classNameName="container" >
                <div className="main-body" >
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="/images/nasser.jpg" alt="Admin" className="rounded-circle" width="150"/>
                                        <div className="mt-3">
                                            <h4>MAHMOUD NASSER</h4>
                                            <p className="text-secondary mb-1"> </p>
                                            <p className="text-muted font-size-sm">LUXOR , ESNA</p>
                                            <p className="text-muted font-size-sm"> BIO HERE </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="feather feather-twitter mr-2 icon-inline text-info">
                                                <path
                                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                                </path>
                                            </svg> Twitter</h6>
                                        <span className="text-secondary"> Twitter</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="feather feather-instagram mr-2 icon-inline text-danger">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg> Instagram</h6>
                                        <span className="text-secondary">INSTA</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="feather feather-facebook mr-2 icon-inline text-primary">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                                </path>
                                            </svg> Facebook</h6>
                                        <span className="text-secondary">FACEBOOK</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            MAHMOUD NASSER
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            MAHMOUDNAS56@GMAIL.COM
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            02154565522
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            0215466461
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            LUXOR , ESNA
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row  gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">
                                                    Driver records</i></h6>
                                            <div className="row ">
                                                <div className=" d-flex justify-content-between align-items-center flex-wrap">
                                                    <div className="col-sm-3">
                                                        <h6 className="m-0">Total Ride</h6>
                                                    </div>
                                                    <div className="col-sm-3 text-secondary">
                                                        222
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row ">
                                                <div className=" d-flex justify-content-between align-items-center flex-wrap">
                                                    <div className="col-sm-3">
                                                        <h6 className="m-0">As Driver</h6>
                                                    </div>
                                                    <div className="col-sm-3 text-secondary">
                                                        122
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row ">
                                                <div className=" d-flex justify-content-between align-items-center flex-wrap">
                                                    <div className="col-sm-3">
                                                        <h6 className="m-0"> As Passnager</h6>
                                                    </div>
                                                    <div className="col-sm-3 text-secondary">
                                                        100
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row ">
                                                <div className=" d-flex justify-content-between align-items-center flex-wrap">
                                                    <div className="col-sm-3">
                                                        <h6 className="m-0">Rate</h6>
                                                    </div>
                                                    <div className="col-sm-3 text-secondary">
                                                        8
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">
                                                    Car info</i></h6>
                                                    <div className="row ">
                                                        <div className=" d-flex justify-content-between align-items-center flex-wrap">
                                                            <div className="col-sm-3">
                                                                <h6 className="m-0">Brand</h6>
                                                            </div>
                                                            <div className="col-sm-3 text-secondary">
                                                                KIA
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row ">
                                                        <div className=" d-flex justify-content-between align-items-center flex-wrap">
                                                            <div className="col-sm-3">
                                                                <h6 className="m-0"> Model</h6>
                                                            </div>
                                                            <div className="col-sm-3 text-secondary">
                                                                2022
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row ">
                                                        <div className=" d-flex justify-content-between align-items-center flex-wrap">
                                                            <div className="col-sm-3">
                                                                <h6 className="m-0">Color</h6>
                                                            </div>
                                                            <div className="col-sm-3 text-secondary">
                                                                Black 
                                                            </div>
                                                        </div>
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

  )
}
