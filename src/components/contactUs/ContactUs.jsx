import React from 'react'

export default function ContactUs() {
  return (
    <>
    {/* <!-- start contact --> */}

    {/* <!------ Include the above in your HEAD tag ----------> */}


    <div className="contact position-relative " id="contact">
        <div className="d-flex justify-content-center">
            <img className="image-con position-absolute  mw-100 mh-100 " src="/images/con2.jpg" alt="" />
        </div>
        <div className="section-content position-relative">
            <h1 className="section-header">Get in <span className="content-header wow fadeIn text-primary " data-wow-delay="0.2s"
                    data-wow-duration="2s"> Touch with us</span></h1>
        </div>
        <div className="contact-section position-relative">

            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-md-6 form-line">
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername">Your name</label>
                                <input type="text" className="form-control" id="" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail">Email Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telephone">Mobile No.</label>
                                <input type="tel" className="form-control" id="telephone" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="description"> Message</label>
                                <textarea className="form-control" id="description"
                                    placeholder="Enter Your Message"></textarea>
                            </div>
                            <div>

                                <button type="button" className="btn btn-primary submit my-3  d-flex justify-content-center"><i className="fa fa-paper-plane"
                                        aria-hidden="true"></i> Send Message</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* <!-- end contact --> */}
    </div>
    </>
  )
}
