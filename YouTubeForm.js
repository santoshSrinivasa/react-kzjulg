import React from "react";
import {useFormik} from "formik";


//initial values is object with key equal to name attribute of form
const initialValues = {
  name: '',
  email: '',
  channel : ''
}

//func to submit form 
const onSubmit = values => {
  console.log("form values", values);
}


//func to validate form
const validate = values => {
  let errors = {}

  if(!values.name){
    errors.name = 'Required'
  }

  if(!values.email){
    errors.email = 'Required'
  } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
    errors.email = 'Invalid email format'
  }

  if(!values.channel){
    errors.channel ='Required'
  }
   return errors
}

function YouTubeForm(){


//useFormik is a hook that takes in object (this object contains initialValues object, onSubmit func ,validate func) and returns a object with properties
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  // console.log("form errors", formik.errors);
  // console.log("form visited", formik.touched);
  return(
    <form onSubmit={formik.handleSubmit} className="form-div">

  <div className="form-control">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} 
    onBlur={formik.handleBlur}/>
    { formik.touched.name &&  formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }
  </div>

 <div className="form-control">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email"  onChange={formik.handleChange} value={formik.values.email} 
    onBlur={formik.handleBlur}/>
    { formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null }
</div>

 <div className="form-control">
    <label htmlFor="channel">Channel</label>
    <input type="text" id="channel" name="channel"  onChange={formik.handleChange} value={formik.values.channel} 
    onBlur={formik.handleBlur}/>
    {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null }
</div>

    <button type="submit">Submit</button>
    </form>

  )
}

export default YouTubeForm