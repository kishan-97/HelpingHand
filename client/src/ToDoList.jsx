import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

   const ToDoList = () => {

    return(
    <>
    <div className="firediv">
      <img  src="skyscraper.jpeg" className="scraper" alt="Image will be shown to u early"/></div>
    <div className="firediv2">  <h1 className="hh1">Skyscraper Study</h1></div>
    

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="index.html">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="About.html">About us<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.html">Login</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Study
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Ask Question</a>
          <a class="dropdown-item" href="#">Doubt solved</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="registration.html" >Register</a>
      </li>
    </ul></div> </nav>

    <div class="float-container">

  <div class="float-child">
    <div class="green"><div>
    <h1>Click on the "Choose File" button to upload a file:</h1>

<form action="/action_page.php" className="form11">
  <input type="file" id="myFile" name="filename"/>
  <h1> OR</h1>
  <textarea row="10" column="20" name="tex" placeholder="Enter your question here." className="box11"></textarea>
  <h1></h1>
  <input type="submit"/>
</form></div></div>
  </div>
  
  <div class="float-child">
    <div class="blue"><div>
<div className="answer">

</div>
</div></div>
  </div>
  
</div>
    
  
  
  <div className="socialmedia">
    <center>   <h3>About us</h3>
        <h3>contact us</h3>
        <a href="https://www.facebook.com/atul.kesharwani.756/"><img src="fb1.png" /></a>
        <a href="https://www.instagram.com/kesharwani1054/"><img src="insta2.png"/></a>
        <a href="https://twitter.com/kesharwani_atul"><img src="twitter.png"/></a>
        <h4>for Email Support-kesharwaniatul9935@gmail.com</h4></center> 
</div>
  </>
  );
};
export default ToDoList;