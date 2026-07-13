function Form() {
  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <label>Name:</label>
        <br />
        <input type="text" placeholder="Enter Name" />
        <br /><br />

        <label>Email:</label>
        <br />
        <input type="email" placeholder="Enter Email" />
        <br /><br />

        <label>Password:</label>
        <br />
        <input type="password" placeholder="Enter Password" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;