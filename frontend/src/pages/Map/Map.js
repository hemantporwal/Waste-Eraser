import './style.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import React, { useState, useRef, useEffect, Fragment } from 'react';
import Geocoder from 'react-map-gl-geocoder';
// import DrawControl from "react-mapbox-gl-draw";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Editor, EditingMode, DrawLineStringMode, DrawPolygonMode } from 'react-map-gl-draw';
import { getBin, getTree } from '../../api/MarkerApi';
import { useIsMounted } from '../../hooks/useIsMounted';
import MapPin from '../../components/MapPin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import TreePopup from '../../components/TreePopup';
import MainPopup from '../../components/MainPopup';

const MODES = [
  { id: 'drawPolyline', text: 'Draw Polyline', handler: DrawLineStringMode },
  { id: 'drawPolygon', text: 'Draw Polygon', handler: DrawPolygonMode },
  { id: 'editing', text: 'Edit Feature', handler: EditingMode },
];

function Map(props) {
  const apiToken = "pk.eyJ1IjoicHJhc2hhbnRwa3MiLCJhIjoiY2w3YWN6YnBvMDBkeDNxc2QzbGY1dWp1YiJ9.4qhCJI4qfg6g1smFHTVf4Q"
  const [viewport, setViewport] = useState({
    width: "100wh",
    height: "100vh",
    latitude: 27.7577,
    longitude: 85.3231324,
    zoom: 7,
  })
  const mapRef = useRef();
  const geocoderContainerRef = useRef();
  const isMounted = useIsMounted();
  const [treeList, setTreeList] = useState([]);
  const [source, setSource] = useState();
  const [filterBins, setFilterBins] = useState([]);
  const [binList, setbinList] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [category, setCategory] = useState({
    covid: false,
    bio: false,
    nonBio: false
  });
  const [nearestBins, setNearestBins] = useState([]);
  const [draw, setDraw] = useState({
    modeId: null,
    modeHandler: null
  })

  

  const getDistance = (lat1, lon1, lat2, lon2) => {
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371;
    return (c * r);
  }

  

  const checkboxHandler = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.checked });
    filterData();
  }

  const filterData = () => {
    console.log(category)
    let li = []
    for (let i = 0; i < binList.length; i++) {
      let x = binList[i];
      // console.log(x.category);
      let d = getDistance(source.latitude, source.longitude, x.latitude, x.longitude);
      x.distance = d;
      console.log(d);
      if(d<=0.5){
        if (category['bio'] && x.category === 'bio') li.push(x);
        if (category['nonBio'] && x.category === 'nonBio') li.push(x);
        if (category['covid'] && x.category === 'covid') li.push(x);
      }
      
    }
    console.log("li", li);
    li.sort((a, b) => {
      return a.distance - b.distance;
    });
    console.log("filtb", filterBins);
    setFilterBins(li);
  }

  const fetchData = async () => {
    const bin = await getBin();
    const tree = await getTree();

    // console.log(tree);
    // console.log(bin);
    // filterData(bin);
    // console.log(filterBins)
    // console.log(bio);
    if (isMounted.current) {
      setbinList(bin);
      console.log("binl", binList)
      setTreeList(tree);
    }
  }

  const showMarkerPopup = (e) => {
    // console.log(e.lngLat);
    const [longitude, latitude] = e.lngLat;
    setSource({ longitude, latitude });
    // applyDist()
    filterData()
  };

  const _switchMode = (evt) => {
    const modeId = evt.target.value === draw.modeId ? null : evt.target.value;
    const mode = MODES.find((m) => m.id === modeId);
    const modeHandler = mode ? new mode.handler() : null;
    setDraw({ modeId, modeHandler });
  };

  const _renderToolbar = () => {
    return (
      <>
        <select className = "draw-select" onChange={_switchMode}>
          <option value="">--Please choose a draw mode--</option>
          {MODES.map((mode) => (
            <option key={mode.id} value={mode.id}>
              {mode.text}
            </option>
          ))}
        </select>
      </>
    );
  }
  const colorMap = {
    bio: "#744700",
    nonBio: "#351c75",
    covid: "#d90f73"
  }

  useEffect(() => {
    document.title = "WasteEraser | Map";
    fetchData();
    //eslint-disable-next-line
  }, [])


  return (
    <div className="map-body">
      <ReactMapGL mapboxApiAccessToken={apiToken}
        mapStyle="mapbox://styles/prashantpks/cl7acdq1a002c14n2m44dat2q"
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        doubleClickZoom={false}
        onDblClick={showMarkerPopup}
        ref={mapRef}
      >
        
        <Editor
          clickRadius={12}
          mode={draw.modeHandler}
        />
        {_renderToolbar()}
        
        <div
          ref={geocoderContainerRef}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        ></div>

        <div className="check-div">
          <label for="name">Dustbin Types</label>
          <div class="form-check">
            <label>
              <input type="checkbox" className="form-check-input" value="" name="bio" id="bio" onChange={checkboxHandler} /> <FontAwesomeIcon icon={faLocationPin} color={colorMap['bio']}></FontAwesomeIcon> Biodegradable
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" className="form-check-input" value="" name="nonBio" id="nonBio" onChange={checkboxHandler} /> <FontAwesomeIcon icon={faLocationPin} color={colorMap['nonBio']}></FontAwesomeIcon> Non-Biodegradable
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" className="form-check-input" value="" name="covid" id="covid" onChange={checkboxHandler} /> <FontAwesomeIcon icon={faLocationPin} color={colorMap['covid']}></FontAwesomeIcon> Covid
            </label>
          </div>
        </div>

        {treeList?.map((tree) => {
          return <Fragment key={tree._id}><Marker key={tree._id} longitude={tree.longitude} latitude={tree.latitude} >
            <div onClick={() => { setShowPopup({ [tree._id]: true, }) }}><MapPin color="#38761d"></MapPin></div>
          </Marker>
            {showPopup[tree._id] ? (
              <Popup
                latitude={tree.latitude}
                longitude={tree.longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={false}
                onClose={() => setShowPopup({})}
                anchor="top"
              >
                <TreePopup tree={tree}></TreePopup>
              </Popup>
            ) : null}
          </Fragment>
        })}

        {filterBins?.map((bin) => {
          return <Fragment key={bin._id}><Marker key={bin._id} longitude={bin.longitude} latitude={bin.latitude} >
            <div><MapPin color={colorMap[bin.category]} ></MapPin></div>
          </Marker>
          </Fragment>
        })}

        {source ? (<>
          <Marker longitude={source.longitude} latitude={source.latitude}>
            <div><MapPin color="#ff0000"></MapPin></div>
          </Marker>
          <Popup
            latitude={source.latitude}
            longitude={source.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={false}
            onClose={() => {
              setSource(null);
              fetchData();
            }}
            anchor="top" >
            <div><MainPopup latitude={source.latitude} longitude={source.longitude} bins={filterBins} showAlert={props.showAlert} category={category}></MainPopup></div>
          </Popup>

        </>) : null}
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapboxApiAccessToken={apiToken}
          position="top-left"
        />
      </ReactMapGL>

    </div>
  )
}

export default Map
