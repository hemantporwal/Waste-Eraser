import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import BinListPopup from './BinListPopup';
import AddBinPopup from './AddBinPopup';

function MainPopup(props) {
    const [active, setActive] = useState(true);
    const handleToggle = ()=>{
        setActive(!active);
    }

    return (
        <div className="log popup-form">
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="form-box popup-form-box" style={{ height: "auto", width: "300px", lineHeight:"25px",paddingBottom:"10px", paddingTop:"10px"}}>
                    <div className="row">
                        <button className={`btn btn-outline-success ${active?"":"disabled"}`} style={{width:"auto", marginLeft:"50px"}} onClick={handleToggle}><span style={{marginRight:"5px"}}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span> <span style={{marginRight:"5px"}}><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon></span> </button> 
                        <button className={`btn btn-outline-success ${!active?"":"disabled"}`} style={{width:"auto", marginLeft:"30px"}} onClick={handleToggle}><span style={{marginRight:"5px"}}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span> <span style={{marginRight:"5px"}}><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon></span></button>
                        {active && <BinListPopup bins = {props.bins}/>}
                        {!active && <AddBinPopup latitude={props.latitude} longitude={props.longitude} showAlert = {props.showAlert}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPopup
