import "../scss/_contactForm.scss";

function ContactForm() {
    return(
        <div className="contact-form">
            <h1>If you would like to write to us, you can use the form below!</h1>
            <form action="">
                <input placeholder="Name"/>
                <input placeholder="E-mail"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"/>
                <button className="button-contact-form">Send</button>
            </form>
        </div>
    )
}

export default ContactForm;