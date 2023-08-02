import React from "react";
import "./Page1.css";

const Page1 = () => {
  return (
    <div>
      <div className="onebox">
        <div className="mixed">
          <img className="logo" src="/My TO DO.png" alt="Example" />
          <img className="png" src="/user 1.png" alt="Example" />
        </div> 
      </div>
      <div className="box">
          <div>
            <h1>Add Notes</h1>
          </div>
          <p>
            You can add your notes here and manage them anytime for convenience
            and easy access.
          </p>
          <div className="maindiv">
            <div className="common">
              <img className="cng" src="/Ellipse 134.png" alt="Example" />
              <div className="plus_operator">+</div>
            </div>
          </div>
        </div>

      {/* The rest of your content goes here */}
    </div>
  );
};

export default Page1;
