import "../index.css";

const UnControlledFeedbackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted:", data);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UnControlledFeedbackForm;
