import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Portrait } from "../About/Portrait/Portrait";
import {user}  from "./Alex.js";
import skillsIcon from "./pencil.png" 
import workIcon from "./portfolio.png"
import studiesIcon from "./mortarboard.png"

import "./OnlineCV.css"
import { Fragment, useEffect, useState } from "react";


// console.log(user);
// console.log(Object.entries(user));
// console.log(user.Introduction);

 fetch("alex.json")
 .then(r=>r.json())
 .then(json=>console.log(json));


export function OnlineCV(){
    // const [user,setUser]=useState({});
    // const getData=()=>{
    //   fetch("alex.json")
    //     .then(function(response){
    //       console.log(response)
    //       return response.json();
    //     })
    //     .then(function(myJson) {
    //       console.log(myJson);
    //       setUser(myJson);
    //     });
    // }
    // useEffect(()=>{
    //   getData()
    // },[]);

    
    return({user}!=null ?     
            <Container fluid>
                <Row className="align-items-center">
                    <Col className="left-side col-md-3 offset-md-1">
                        <div className="portrait-cv">
                            <Portrait/>
                        </div>
                    </Col>
                    <Col className="right-side col-8">
                        <h1>Alex Corsau</h1>
                    </Col>
                </Row>
                {Object.entries(user.PersonalData).map(element => {
                    if(element[0]==="Email") {
                        let email=`mailto:${element[1]}`;
                        return(
                            <Row key={element[0]} className="personal-data">
                               <Col className="left-side col-3 offset-1"><p>{element[0]}:</p></Col>
                               <Col className="right-side col-8"><p><a href={email}>{element[1]}</a></p></Col>
                           </Row>
                            )}
                    else if(element[0]==="LinkedIn"||element[0]==="GitHub") {
                        return(
                            <Row key={element[0]} className="personal-data">
                               <Col className="left-side col-3 offset-1"><p>{element[0]}:</p></Col>
                               <Col className="right-side col-8"><p><a href={element[1]} target="_blank" rel="noreferrer">{element[1]}</a></p></Col>
                           </Row>
                            )}
                            else return(
                                <Row key={element[0]} className="personal-data">
                                    <Col className="left-side col-3 offset-1"><p>{element[0]}:</p></Col>
                                    <Col className="right-side col-8"><p>{element[1]}</p></Col>
                                </Row>
                            )
                    })
                }
                {
                    user.Introduction.map(element=>(
                        <Row className="introduction">
                            <Col>
                                <p>{element}</p>
                            </Col>
                        </Row>
                    ))
                }
                
                <Row>
                    <Col className="col-2 icon-image">
                        <Image id="skills-icon" src={skillsIcon} alt="skills-img"></Image>
                    </Col>
                    <Col className="col-10">
                        <h4>Skills</h4>
                    </Col>
                </Row>
                {
                    user.Skills.map(element=>{
                        return(
                            <Row className="justify-content-between">
                                <Col className="col-10 offset-2"><p><li>{element}</li></p></Col>
                            </Row>
                        )
                    })
                }
                {/* user.Education */}
                <Row>
                    <Col className="col-2 icon-image">
                        <Image id="studies-icon" src={studiesIcon} alt="studies-img"></Image>
                    </Col>
                    <Col className="col-10">
                        <h4>Education</h4>
                    </Col>
                </Row>
                {
                    user.Education.map(element=>{
                        return(
                            <Row className="justify-content-between workplace">
                                <Col className="col-10 offset-2"><p><li>{element.Diploma} - {element.School} / {element.DiplomaDate}</li></p></Col>
                
                            </Row>
                            
                        )
                    })
                }
                {/* user.WorkHistory */}
                <Row>
                    <Col className="col-2 icon-image">
                        <Image id="work-icon" src={workIcon} alt="work-img"></Image>
                    </Col>
                    <Col className="col-10">
                        <h4>Work history</h4>
                    </Col>
                </Row>
                {
                    // user.WorkHistory
                    user.WorkHistory.map(element=>{
                        return(
                            <Fragment>
                                <Row className="justify-content-between workplace">
                                <Col className="col-10 offset-2"><h5><li>{element.Company} - {element.Position} / {element.Period}</li></h5></Col>
                            </Row>
                            {element.Roles.map(role=>(<Row>
                                    <Col className="col-9 offset-3">
                                        <p><li key={role.indexOf()}>{role}</li></p>
                                    </Col>
                                </Row>))
                            }   
                            </Fragment>
                            
                        )
                    })
                }
                <Row className="justify-content-center download-row">
                    <Col className="col-2 download-col">
                        <a href="../alex-corsau-resume.pdf" target="_blank">Download CV</a>
                    </Col>
                </Row>
            </Container>
    : <p>"bad job"</p>);
}