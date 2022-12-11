import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPlantWilt, faWind} from '@fortawesome/free-solid-svg-icons';


function TreePopup(props) {
    const {tree} = props;
    return (
        <div className="log popup-form">
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="form-box popup-form-box" style={{ height: "auto", width: "230px", lineHeight:"25px" }}>
                    <div className="row">
                        <div className="col-12">
                            <span ><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Address:  </span>
                            <b> {tree.address}</b>
                        </div>
                        <div className="col-12">
                            <span ><FontAwesomeIcon icon={faPlantWilt}></FontAwesomeIcon> Planted By: </span>
                            <b>{tree.plantedBy}</b>
                        </div>
                        <div className="col-12">
                            <span ><FontAwesomeIcon icon={faWind}></FontAwesomeIcon> Reduced CO2 emission: </span>
                            <b>10%</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TreePopup
