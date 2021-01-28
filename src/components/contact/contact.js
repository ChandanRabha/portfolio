import emailjs from "emailjs-com"
import './contact.css'
 //send email on click of submit
 function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0ejmj9f','template_iql1mqm', e.target, 'user_E2B31cQAudM3Ankfw3Lcg')
      .then((result) => {
          console.log(result.text);
          document.querySelector('#Modal').style.display="flex"
          setTimeout(()=>document.querySelector('#Modal').style.opacity="1",100)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
    //close modal
    function closeModal(){
        setTimeout(()=>document.querySelector('#Modal').style.display="none",500)
        document.querySelector('#Modal').style.opacity="0"  
    }


export const Contact = () => {
    return (
        <form onSubmit={sendEmail}>
           <div id="Contact">
            <div>
            <h2>Contact Me</h2>
            <div><h3>Name:</h3><input type='text' name="name"  placeholder="Your Name?" required/></div>
            <div><h3>Email:</h3><input type='email' name="email"  placeholder="Your Email?" required/></div>
            <div><h3>Message:</h3><textarea name="message" placeholder="Your Text Goes Here" required></textarea></div>
            <div><button type='submit'>Send  <i className="fas fa-paper-plane"></i></button></div>
            </div>
            </div>
        </form>
    )
}
export const Modal = () => {
    return (
           <div id="Modal">
                <div>
                         <div>
                             <h4>Email Sent <i style={{color:'#7be87b'}} className="fas fa-check-circle"></i></h4> 
                              <label id='modalClose' onClick={closeModal}><i  className="fas fa-window-close fa-2x" ></i></label>
                         </div>
                        <h2 style={{padding:'2vw',margin:'0'}}>Thank You for Reaching Out 🤖. </h2>
                </div>
            </div>

           

    )
}
