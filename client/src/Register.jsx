import React from 'react';
import ReactDOM from 'react-dom';
import './mystyle.css';

   const Register = () => {

    return(
    <>
    
        <main>
            <div className="title">Enter Details</div>
            

            <form action="" method="" class="form">
                <div className="input-group">
                    <input type="text" name="first_name" id="first-name" placeholder="First name"/>
                    <label for="first-name">Enter patient name</label>
                </div>
                
                <div className="input-group">
                    <input type="text" name="last_name" id="last-name" placeholder="Last Name"/>
                    <label for="last-name">phone number of recepient</label>
                </div>

                <div className="input-group">
                    <input type="email" name="e-mail" id="e-mail" placeholder="e-mail"/>
                    <label for="e-mail">what is patient in need of?(medicine,oxygen any medicine etc)</label>
                </div>

                <div className="input-group">
                    <input type="text" name="last_name" id="last-name" placeholder="Last Name"/>
                    <label for="last-name">address where patient is admitted or where medicine is required</label>
                </div>
                



                <div className="input-group">
                    <input type="file"  id="myfile"/>
                    </div>




                <div className="textarea-group">
                    <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
                    <label for="message">any mesages</label>
                </div>

                <div className="button-div">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>

  
  </>
  );
};
export default Register;