import React from "react";
import "./Page1.css";
import Header from "./Header";

const Page1 = () => {
  return (
    <div className="new">
      <div className="onebox">
        {/* <div className="mixed">
          <img className="logo" src="/My TO DO.png" alt="Example" />
          <img className="png" src="/user 1.png" alt="Example" />
        </div>  */}
          <Header/>
      </div>
      <div className=" page1-box">
          <div>
            <h1 className="page1-text">Add Notes</h1>
          </div>
          <p className="page1-p">
            You can add your notes here and manage them anytime for convenience
            and easy access.
          </p>
          <div className="page1-maindiv">
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
