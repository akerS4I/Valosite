import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pages/Contact.scss";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <h1>Contact Me</h1>
        <p>Have a question or want to work together? Send me a message!</p>

        <form action="https://formsubmit.co/recrentic@gmail.com" method="POST" className="contact-form">
          {/* Hidden input to disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Hidden input for redirect after submission (optional) */}
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Write your message..." required />
          </div>

          <button type="submit" className="send-btn">Send Message</button>
        </form>

        {/* Social Usernames with Logos */}
        <div className="social-links">
          <p>Or reach me on:</p>
          <div className="social-item">
            <img src="/Valosite/assets/discord.svg" alt="Discord" className="social-logo" />
            <span>YourDiscordUsername</span>
          </div>
          <div className="social-item">
            <img src="/Valosite/assets/instagram.svg" alt="Instagram" className="social-logo" />
            <span>YourInstagramUsername</span>
          </div>
          <div className="social-item">
            <img src="/Valosite/assets/telegram.svg" alt="Telegram" className="social-logo" />
            <span>YourTelegramUsername</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
