import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import {useEffect, useState} from "react";

import "./Carousel.css"

export function PicturesCarousel() {
    const [pictureSource, setPictureSource] = useState();

    const getData = async ()=>{
        try {
            fetch('./carouselSource.json',)
            .then(r => r.json())
            .then(json => {
                setPictureSource(json);
            });
        } catch(error) {
                console.log("error: ",error)
        }
    }
    
    useEffect(()=>{
        getData()
    },[]);
    
    return ( pictureSource!==null ? 
            <Carousel pause="hover" controls={true}>
                {
                    pictureSource?.sources.map((element)=>(
                        <CarouselItem key={pictureSource.sources.indexOf(element)}>
                            <img className="carousel-picture" src={process.env.PUBLIC_URL+element} alt={element}/>
                            <Carousel.Caption>
                                <p>Slide {pictureSource.sources.indexOf(element)+1}/{pictureSource.sources.length}</p>
                            </Carousel.Caption>
                        </CarouselItem>
                    ))
                }
            </Carousel>
        : <p>"bad job at fetching data!!!!"</p>);
}
