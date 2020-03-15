import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Weather = ({city,lat,long,temp_celsius,temp_min,temp_max,description,weatherIcon}) => {
    return (
        <div className="container weather-cont">
            <div className="cards pt-4">
                <h1>
                    {city}
                </h1>
                <h5 className="py4">
                    <i className={`wi ${weatherIcon} display-1`}></i>
                </h5>
                {lat? (<h5> <b>Lattitude</b> - {lat}, <b>Longitude</b> - {long}</h5>) : null}
                {temp_celsius? (<h1 className="py2"><b> {temp_celsius}&deg;C</b></h1>) : null }
                {minmaxTemp(temp_min,temp_max)}
                {description? (<h4 className="py-3"> <small>Weather condition is</small> <b>{description}</b> </h4>): null}
            </div>
        </div>
    );
};

function minmaxTemp(min,max){
    if(min && max){
    return(
        <h3>
            <span className="px-5">min {min}&deg;C</span>
            <span className="px-5">max {max}&deg;C</span>
        </h3>
    );
    }
}

export default Weather;