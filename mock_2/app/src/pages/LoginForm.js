import { useRef, useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const passwordValue = passwordRef.current.value;

    console.log("Username:", username);
    console.log("Password:", passwordValue);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Login Form</h2>

      {/* Controlled Input */}
      <div style={styles.field}>
        <label style={styles.label}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Uncontrolled Input */}
      <div style={styles.field}>
        <label style={styles.label}>Password</label>
        <input
          type="password"
          ref={passwordRef}
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>
        Login
      </button>
    </form>
  );
};

const styles = {
  form: {
    width: "320px",
    margin: "40px auto",
    padding: "24px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial",
  },
  title: {
    marginBottom: "18px",
    textAlign: "center",
  },
  field: {
    marginBottom: "14px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontSize: "14px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LoginForm;
