import React,{useRef, useState} from "react";
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Plant from '../assets/plantation.svg';

function Navbar() {
 const clickModalRef = useRef();

  return (
    <div>
      <nav className="navbar navbar-customclass navbar-expand-lg ">
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">YourCity</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Map</Link>
              </li>
            </ul>
            <div className="d-flex">
              <button type="button" className="btn btn-outline-success mx-2" ref= {clickModalRef} data-bs-toggle="modal" data-bs-target="#clickModal">
                <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
              </button>
              {/* <button className="btn d-none"  ref= {clickModalRef} data-bs-target="#clickModal" data-bs-toggle="modal">Data</button> */}
            </div>
          </div>
        </div>
      </nav>
      {/* Click Modal */}
      <div >
            <div className="modal fade" id="clickModal" tabIndex="-1" aria-labelledby="clickModal" aria-hidden="true" >
                <div className="modal-dialog custom-modal-box">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Delete Event</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{height:"500px", width:"600px"}}>
                            {/* <p>Do you want to delete this event?</p>
                            <button type="submit" className="btn btn-outline-danger" >Yes</button>
                            <button type="button"  className="btn btn-outline-success mx-3" data-bs-dismiss="modal">No</button> */}
                            <div className="display-6"> Planted more than <span style={{color:"#83e072"}}><b>6000</b></span> trees</div>
                            
                            <div className="row">
                              <div className="col-6">
                              <img src={Plant} alt="" style={{height:"300px", width:"300px"}} />
                              </div>
                              <div className="col-6 ml-2">
                              <h5 style={{lineHeight:"40px"}}>Reduced Co2 emmission by <span style={{color:"#83e072"}}><b>7%</b></span></h5>
                              <h5 style={{lineHeight:"40px"}}>More than <span style={{color:"#83e072"}}><b>1000+</b></span> active users</h5>
                              <h5 style={{lineHeight:"40px"}}>Dustbin count is more than <span style={{color:"#83e072"}}><b>10,000</b></span></h5>
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

export default Navbar
