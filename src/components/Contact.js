import React from "react";
import emailjs from "emailjs-com";
import classes from "../styles/Contact.module.css";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "email",
        "template_trdyz2f",
        e.target,
        "user_GOpg6NlZ1coKP4OOYhNJo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // setFormData({ email: "", message: "" });
    // console.log(formData);
  };
  return (
    <section className={classes.contact__section}>
      <div className="container">
        <div className={classes.contact__title}>
          <p>
            <span>let's </span>
            <br />
            <span className="outline">discuss</span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.group}>
            <input name="email" autoComplete="email" type="email" required />
            <span className={classes.highlight}></span>
            <span className={classes.bar}></span>
            <label>Email</label>
          </div>
          <div className={classes.group}>
            <textarea name="message" required />
            <span className={classes.highlight}></span>
            <span className={classes.bar}></span>
            <label>Tell me about your project</label>
          </div>
          <button className={classes.submit__btn} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
