import { useRef, useState } from "react";
import "../index.css";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const messangeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter your name");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (!messangeRef.current.value) {
      messangeRef.current.focus();
      return;
    }

    console.log("Form Submitted:", {
      name,
      email,
      message: messangeRef.current.value,
    });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea placeholder="Message" ref={messangeRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
