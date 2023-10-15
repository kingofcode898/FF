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
              <h1>Spanish </h1>
              <img id="flag" src={span}/>
              <div className="stat">
                <div>
                  <h1></h1>
                </div>
              </div>
            </div>
        </div>
        <div className="cardshort">hello this is some test text</div>
      </div>
      <div className="longCards">
        <div className="cardLong">fasdfs</div>
      </div>
    </div>
  );
}

export default HomePage;
