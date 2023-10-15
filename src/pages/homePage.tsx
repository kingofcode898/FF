import React from "react";
interface stats {
    practiceTime: number,
    Language: String
}
function HomePage(props: stats) {
  
    return (
    <div className="home">
      <div className="shortCards">
        <div className="cardshort" id="stats">
            <div></div>
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
