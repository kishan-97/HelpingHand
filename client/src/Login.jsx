import React from 'react';
import './mystyle.css';

   const Login = () => {

    return(
    <>
   
        <main>
            <form action="" method="" className="form">
                <div className="input-group">
                    <input type="email" name="Email" id="Email" placeholder="Enter email"/>
                    <label for="email">Enter Email</label>
                </div>
                
                <div className="input-group">
                    <input type="password" name="password" id="password" placeholder="Enter Pasword"/>
                    <label for="password">Enter Password</label>
                </div>

               

                <div className="button-div">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>


  
  </>
  );
};
export default Login;