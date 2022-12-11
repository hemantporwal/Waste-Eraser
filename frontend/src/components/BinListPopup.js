import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function BinListPopup(props) {
    const bins = props.bins;
    
    return (
        <div className="mt-4">
            {bins.map((bin) => {
                return (
                    <div className="row" key={bin._id}>
                        <div className="col-12" style={{ borderBottom: "1px solid white", height: "50px" }}>
                            <p style={{ marginTop: "13px" }}><span style={{ marginRight: "10px" }}><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></span>
                                {(bin.distance*1000).toPrecision(3)} m | <b> {bin.address}</b></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BinListPopup
