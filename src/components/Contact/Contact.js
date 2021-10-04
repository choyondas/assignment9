import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div>

            <div className="contact">
                <div className="contact-info">
                    <img width="100px" src="https://svgsilh.com/svg/1976104.svg" alt="" />
                    <div className="detail-con">
                        <h3>1.800.232.2.21</h3>
                        <h5>Working hours:</h5>
                        <h5>Monday - Friday: 8.00am - 9.00pm</h5>
                    </div>
                </div>
                <div className="contact-info">
                    <img width="100px" src="https://svgsilh.com/svg/147563.svg" alt="" />
                    <div className="detail-con">
                        <h3>Das Mail</h3>
                        <h5>choyondas08@gmail.com</h5>
                        <h5>amarsonarbangla@gmail.com</h5>
                    </div>
                </div>
                <div className="contact-info">
                    <img width="100px" src="https://svgsilh.com/svg/1093169.svg" alt="" />
                    <div className="detail-con">
                        <h3>Medisson Center</h3>
                        <h5>2105 S Medisson ave</h5>
                        <h5>Pembroke Pines, FL 28260</h5>
                    </div>
                </div>
            </div>



            <div className="get-in-touch">
                <h1 className="heading-touch">Get in touch</h1>
                <div className="info-touch">
                    <div>
                        <input className="input" type="text" placeholder="Name" />
                        <input className="input" type="text" placeholder="Email" />

                    </div>
                    <div>
                        <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Message">
                        </textarea>
                    </div>
                    <br />
                    <input type="checkbox" id="coding" name="interest" value="coding"></input>
                    <span>I agree that my submitted data is being collected and stored.</span>
                    <br />
                    <br /><br />
                    <button className='submit-txt'><h4>Send Message</h4></button>
                </div>
            </div>
        </div >
    );
};

export default Contact;