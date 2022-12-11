import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {addBin} from '../api/MarkerApi';
import { useAlert ,positions, transitions, types} from 'react-alert'

function AddBinPopup(props) {
    const [data,setData] = useState({category:"", address:"", addedBy:"", latitude:props.latitude,longitude:props.longitude});
    const navigate = useNavigate();
    const alert = useAlert()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await addBin(data.address, data.category, data.latitude, data.longitude, data.addedBy);
        if(response.success){
            // props.showAlert("Bin Added Successfully!", "success");
            alert.show('A tree has been planted successfully!', {
                timeout: 30000,
                type: 'success',
              })
        }else{
            props.showAlert("Error occurred!", "danger");
        }
        console.log(response);    
    }

    const handleChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value});
        // console.log(data)
    }

    return (
        <>
            
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="addedBy"  className="form-label">Username*</label>
                            <input type="text" name="addedBy" value={data.addedBy} onChange={handleChange} className="form-control" id="inputAddress"  required placeholder="" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="description" className="form-label">Address*</label>
                            <textarea className="form-control"  name="address" value={data.address} onChange={handleChange} placeholder="Address" id="floatingTextarea2" style={{height:'100px'}}></textarea>
                        </div>
                        <div className="col-12">
                        <input className="form-check-input" type="radio" name="category" value="bio" id="flexRadioDefault1" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1" style={{paddingLeft:"10px"}}>
                                Biodegradable Bin
                            </label>
                        </div>
                        <div className="col-12">
                        <input className="form-check-input" type="radio" name="category" value="nonBio" id="flexRadioDefault1" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1" style={{paddingLeft:"10px"}}>
                                Non - Biodegradable Bin
                            </label>
                        </div>
                        <div className="col-12">
                        <input className="form-check-input" type="radio" name="category" value="covid" id="flexRadioDefault1" onChange={handleChange}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1" style={{paddingLeft:"10px"}}>
                                Covid Bin
                            </label>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-success" style={{marginLeft:"100px"}}>Add Bin</button>
                        </div>
                    </form>
              
        </>
    )
}

export default AddBinPopup
