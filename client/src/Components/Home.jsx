import React from "react";
import "../index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <div className="firstpart">
        <center>
          <h1 className="hed">Any Help Regarding Medical.</h1>
          <h3>Any query or requirement related to the medical.</h3>
          <h5>
            Upload the query and also help other ,if you have any knowledge or
            provide equipment.
          </h5>
        </center>
      </div>

      <div className="imgtop">
        <div className="imgtops">
          <img src="help1.jpg" className="conf" />
        </div>
        <div className="sirstpart">
          <h1 className="one"></h1>
          <br></br>
          <h2 classname="two">
            “The purpose of life is not to be happy. It is to be useful, to be
            honorable, to be compassionate, to have it make some difference that
            you have lived and lived well.” – Ralph Waldo Emerson
          </h2>
          <br></br>
          <h3 classname="three">.</h3>
        </div>
      </div>

      <div className="imgtop">
        <div className="sirstpart">
          <h1 className="one">
            We know that You want to help other person,then.
          </h1>
          <br></br>
          <h2 classname="two">Don't hesitate</h2>
          <br></br>
          <h3 classname="three">Move forward and help it,Connect with us.</h3>
          <h4>Get your Goal</h4>
        </div>
        <div className="imgtops1">
          <img src="help2.jpg" clasname="conf1" />
        </div>
      </div>

      <div class="card-group">
        <div class="card">
          <a href="https://atul-chatting-app.herokuapp.com/">
            {" "}
            <img class="card-img-top" src="post.png" alt="Card image cap" />
          </a>
          <div class="card-body">
            <h3 class="card-title">
              Some detail of patient regarding Health issue or Document related
              to health .
            </h3>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="chatt.jpg" alt="Card image cap" />
          <div class="card-body">
            <h3 class="card-title">
              Talk with each other ,if you have any issue.otherwise ,you can
              also take mobile number of volunteer
            </h3>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="chemistry.jpg" alt="Card image cap" />
          <div class="card-body">
            <h3 class="card-title">Chemistry</h3>
            <p class="card-text">
              All the chemical formula with uses ,question,notes,syllabus all
              are available here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
