import {FaPaperPlane} from 'react-icons/fa';

const Contact = () => {
    return(
        <section id="contact">
        <p>Have a project idea in mind or want to connect? Feel free to drop an Email!</p>
        <form>
            <label>Name: <input type="text" required placeholder="Your Name"/></label>
           <label>Email: <input type="email" required placeholder="Your Email"/></label>
           <label>Your Message: <textarea type="text" required placeholder="Your Message"/></label>
           <button type="submit"><FaPaperPlane/>Send Message</button>
        </form>
        </section>
    );
};
export default Contact;