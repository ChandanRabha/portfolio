import './contact.css'
export const Contact = () => {
    return (
        <div id="Contact">
            <div>
            <h2>Contact Me</h2>
            <div><h3>Name:</h3><input type='text' required placeholder="Your Name?"/></div>
            <div><h3>Email:</h3><input type='email' required placeholder="Your Email?"/></div>
            <div><h3>Subject:</h3><textarea  placeholder="Your Text Goes Here"></textarea></div>
            <div><button>Submit</button></div>
            </div>
        </div>
    )
}
