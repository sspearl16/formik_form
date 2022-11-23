import React from "react";
import './index.css';
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: values =>{
      console.log('Form values: ', values);
      alert('login successful');
    },

   validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username/Email</div>
        <input name="email" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div name="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name="password" id="pwdField" type="text" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div name="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        <div />
        <button name="submitBtn" type="submit">Submit</button>
      </form>  
    </div>
  );
}

export default App;
