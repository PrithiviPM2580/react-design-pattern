import { useState, useRef } from "react";
import "../index.css";

const ControlledFeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email.includes("@")) {
      emailRef.current.focus();
      return;
    }
    if (!form.message) {
      messageRef.current.focus();
      return;
    }
    console.log("Form Submitted:", form);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        ref={nameRef}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        ref={emailRef}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        ref={messageRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledFeedbackForm;
