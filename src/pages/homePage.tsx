import React from "react";
import span from "../assets/span.png"
interface stats {
    practiceTime: number,
    Language: String
}
function HomePage(props: stats) {
  
    return (

    <div className="home">
      <div className="shortCards">
        <div className="cardshort" id="stats">
            <div>  
              <div id="stats-title">
              <img id="flag" src={span}/>
              <h1>Spanish </h1>
              </div>
              <div>
                <div className="stat">
                  <h1 >Time practiced</h1>
                  <div id="circle">
                    <h2 className="value">{props.practiceTime}</h2>
                  </div>
                  
                </div>
                <div className="stat">

                </div>
                <div className="stat">

                </div>
              </div>
            </div>
        </div>
        <div className="cardshort" id="start">hello this is some test text</div>
      </div>
      <div className="longCards">
        <div className="cardLong">More test</div>
      </div>
    </div>
  );
}

export default HomePage;
