import React,{useState,useRef} from 'react'
import { useForm } from "react-hook-form";
import {Redirect} from 'react-router-dom';

export default function RegistrationForm({history,addUser}) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formState,setFormState] = useState();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    addUser(data)
    console.log(data);
    history.push('/dashboard')
  }

 
  return (
   
<section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row ">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)} noValidate>

                  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" {...register('name', {
                            required: 'user name required', pattern: {
                              value: /^[a-zA-Z\s]*$/i,
                              message: 'Only alaphebets and spaces allowed'
                            }
                          })} id="name" className="form-control" />
                          {errors.name && errors.name.message}
                          <label class="form-label" for="user_name">Your Name</label>
                        </div>
                      </div>


                      <div class="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div class="form-outline flex-fill mb-0">

                          <input type="email" {...register('email', {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address"
                            }
                          })} id="email" className="form-control" />
                          <label className="form-label" htmlFor="email">Your Email</label>
                          {errors.email && errors.email.message}
                        </div>
                      </div>
                  
                      
                          
                    <div className="form-outline flex-fill mb-0">
                          <input type="number" {...register('contact_number', {
                            required: 'contact is required.', maxLength: { value: 10, message: "should NOT be more than 10 digit" },
                            minLength: { value: 10, message: "should NOT be less than 10 digit" }
                          })} id="contact_number" className="form-control" />
                      <label className="form-label" htmlFor="contact_number">Contact Number</label>
                      {errors.contact_number && errors.contact_number.message }
                        </div>
                      

                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">Gender</div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" {...register('gender',{required:true})} id="gender_male" defaultValue="male" />
                            <label className="form-check-label" htmlFor="gender_male">Male</label>
                          </div>


                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" {...register('gender',{required:true})} id="gender_female" defaultValue="female" />
                            <label className="form-check-label" htmlFor="gender_female">Female</label>
                          </div>
                          {errors.gender && "Please select gender"}
                        </div>
                      </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" {...register('password',{required:true})} id="password" className="form-control" />
                      <label className="form-label" htmlFor="password">Password</label>
                      {errors.password && "Please enter password"}
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" {...register('confirm_pawword',
                            {
                              required: true,
                              validate: value =>
                                value === password.current || "The passwords do not match"
                            })}
                            id="confirm_pawword" className="form-control" />
                      <label className="form-label" htmlFor="confirm_pawword">Repeat your password</label>
                      {errors.confirm_pawword && errors.confirm_pawword.message}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://images7.alphacoders.com/617/617537.jpg" className="img-fluid" alt={'adfd'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}
