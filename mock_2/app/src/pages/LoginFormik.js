import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginFormik = () => {
  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required")
  });

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={styles.form}>
          <label style={styles.label}>Email</label>
          <Field name="email" type="text" style={styles.input} />
          <ErrorMessage name="email" component="div" style={styles.error} />

          <label style={styles.label}>Password</label>
          <Field name="password" type="password" style={styles.input} />
          <ErrorMessage name="password" component="div" style={styles.error} />

          <button type="submit" style={styles.btn}>Login</button>
        </Form>
      </Formik>
    </div>
  );
};

const styles = {
  container: {
    width: "320px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  label: {
    fontSize: "14px"
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #bbb"
  },
  btn: {
    padding: "10px",
    marginTop: "8px",
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  error: {
    color: "crimson",
    fontSize: "13px"
  }
};

export default LoginFormik;
