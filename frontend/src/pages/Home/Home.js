import React from 'react'
import './style.css'
import {
    Link
} from "react-router-dom";
// import Reveal from 'react-reveal/Reveal';
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import About from '../../assets/about-map.svg'
import How from '../../assets/how-to.svg'
import Covid from '../../assets/covid.svg'
import Garden from '../../assets/garden.svg'
import Carbon from '../../assets/carbon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faFacebook, faTwitter, faRocketchat } from '@fortawesome/free-brands-svg-icons'
// #63FF92
function Home() {
    return (
        <div class="landing">
            <a href="https://belikeamitesh.github.io/Quick-Chat-App/" className="link"><div className="chat">
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
            </div></a>
            <div class="hero">
                <nav>
                    <Link to="/map" className="link"><span><b>Waste <span style={{ color: '#ffffff' }}>E</span>raser</b></span></Link>
                </nav>
                <div class="content">
                    <h1>Waste <span style={{ color: '#63FF92' }}>E</span>raser</h1>
                    <Typewriter className="type"
                    options={{
                        strings:['Welcome to the modern way of cleaning your city!'],
                        autoStart:true,
                        loop:true,
                        delay:40,
                        deleteSpeed:10
                    }}
                    ></Typewriter>
                    {/* <p> Welcome to the modern way of cleaning your city!</p> */}
                    <br />
                    <Link to="/map" className="link"><button class="submit-btn" type="submit" value="Join Room"><b>Clean Now  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></b></button></Link>
                    
                </div>
                
                {/* &rarr; */}
                
            </div>
            <div className="bl-ind">
                <div className="container sec-content">
                    <div className="row">
                        <div className="col-6">
                            <h1>About project</h1>
                            <Fade bottom opposite={true}>
                            <p>Our app helps people to locate nearby dustbins according to the waste type, like
                                bio-degradable, non-biodegradable, plastic and more. We have built a map where people
                                can find nearby dustbins as well as they can add new dustbin locations in the map if
                                they find any. Apart from normal dustbins, we have also added
                                covid dustbins in our map where wastes like used PPE kits, used injections, cottons etc
                                can be thrown away. In this way, these waste will not cause any infections to people and
                                stray animals and can be handled carefully. Apart from this, we also aim to plant trees whenever
                                someone in our app locate a new dustbin in the map. People can themselves choose
                                some area in the map where they want to plant trees. With this app, users can
                                contribute in cleaning their surrounding in a very simple way along with planting
                                trees in their neighbourhood.</p></Fade>
                        </div>
                        <div className="col-6">
                            <img src={About} alt="" className="r-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bk-ind">
                <div className="container sec-content">
                    <div className="row">

                        <div className="col-6">
                            <img src={How} alt="" className="l-img" />
                        </div>
                        <div className="col-6">
                            <h1>How to use?</h1>
                            
                            <ul class="hli">
                                <Fade right>
                                <li>
                                    To locate nearby dustbin
                                </li>
                                <p><b>Double click</b> on map to mark your current location, choose the type of waste, and it will display all dustbins within the radius of 500m.</p>
                                </Fade>
                                <Fade right>
                                <li>
                                    To add the dustbin
                                </li>
                                <p><b>Double click</b> on map to mark your current location, enter your username and address, select the waste type, it will add a marker pin to that location.</p>
                                </Fade>
                                <Fade right>
                                <li>
                                    To Plant trees
                                </li>
                                <p>Select <b>Draw Polygon </b>dropdown from the top and it will let you draw polygon on the map and it will be saved in our database and will be used further to plant trees.</p>
                                </Fade>
                            </ul>
                            <Link to="/map" className="link"><button class="map-btn" type="submit" value="Join Room"><b>Go to map</b></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bl-ind">
                <div className="container sec-content">
                    <div className="row">
                        <div className="col-6">
                            <h1>Covid Dustbin</h1>
                            <Fade bottom>
                            <p>According to the WHO Global analysis of health care waste in the context of COVID-19,
                                approximately 87,000 tonnes of personal protective equipment (PPE) was
                                procured between March 2020- November 2021, along with over 140 milliontest kits,
                                with a potential to generate 2,600 tonnes of non-infectious waste (mainly plastic)
                                and 731,000 litres of chemical waste and 8 billion doses of vaccine producing 144,000 
                                tonnes of additional waste in the form of syringes, needles, and safety boxes. These products will produce hazarduos waste
                                which needs to be handled and thrown away carefully. We have taken this initiative where hospitals, clinics and people can add
                                covid dustbins in the map so that these waste can be thrown in a proper way.  In map, <b>pink</b> color dustbins are covid dustbins.</p>
                        </Fade>
                        </div>
                        <div className="col-6">
                            <img src={Covid} alt="" className="r-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bk-ind">
                <div className="container sec-content">
                    <div className="row">

                        <div className="col-6">
                            <img src={Garden} alt="" className="l-img" />
                        </div>
                        <div className="col-6">
                            <h1>Request for trees...</h1>
                            <Fade bottom>
                            <p>Along with cleaning waste from our surrounding, planting trees in neighbourhood will improve the enviroment. We have added
                                this unique feature in our app, where we plant trees in areas choosen by people who will add dustbins in the map. After
                                adding dustbins, people can choose an area in any locality in map and request to plant trees there.
                            </p>
                            </Fade>
                            <Link to="/map" className="link"><button class="map-btn" type="submit" value="Join Room"><b>Go to map</b></button></Link>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="bl-ind">
                <div className="container sec-content">
                    <div className="row">
                        <div className="col-6">
                            <h1>Carbon Reduction</h1>
                            <Fade bottom>
                            <p>We are planting trees where needed for avery dustbin added by you. Trees will act as a storage for carbon from the atmosphere. If we take action to increase natural carbon storage in addition to ambitious emissions reductions, it could contribute to limiting peak warming. Even temporary nature-based carbon storage could have an important climate benefit.</p>
                            </Fade>
                        </div>
                        <div className="col-6">
                            <img src={Carbon} alt="" className="r-img" />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row content">
                        <div className="col-5 footer-left">
                            <span><b>Waste <span style={{ color: '#63FF92' }}>E</span>raser</b></span>
                            <br />
                            <div className="fl">
                                Developed By:
                                <br />
                                <ul><li>
                                    Amitesh
                                </li>
                                    <li>
                                        Anushka
                                    </li>
                                    <li>
                                        Prateek
                                    </li>
                                    <li>
                                        Prashant
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 footer-right">
                            <b>Contact us:</b> <span>contact@wasteeraser.com</span>
                            <div className="icons">
                                <FontAwesomeIcon icon={faGithub} className = "ic-item"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faInstagram} className = "ic-item"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faFacebook} className = "ic-item"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faTwitter} className = "ic-item"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
