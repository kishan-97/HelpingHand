import React from 'react';
import ReactDOM from 'react-dom';
import './mystyle.css';

   const Contact = () => {

    return(
    <>
    
        
        <main>
            <div className="title">Contact us</div>
            <div className="title-info">We'll get back to you soon!</div>

            <form action="" method="" className="form">
                <div className="input-group">
                    <input type="text" name="first_name" id="first-name" placeholder="First name"/>
                    <label for="first-name">First name</label>
                </div>

                <div className="input-group">
                    <input type="text" name="last_name" id="last-name" placeholder="Last Name"/>
                    <label for="last-name">Last name</label>
                </div>

                <div className="input-group">
                    <input type="email" name="e-mail" id="e-mail" placeholder="e-mail"/>
                    <label for="e-mail">e-mail</label>
                </div>

                <div className="textarea-group">
                    <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
                    <label for="message">Message</label>
                </div>

                <div className="button-div">
                    <button type="submit">Send</button>
                </div>
            </form>
        </main>

  </>
  );
};
export default Contact;