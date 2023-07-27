// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
// import Feed from './Feed';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // perform login logic here
//     // if successful, redirect to Feed component
//     history.push('/feed');
//   };

//   return (
//     <Router>
//       <body className="bg-gray">
//         <div className="container mt-5 pt-5 d-flex flex-column flex-lg-row justify-content-evenly">
//           <div className="text-center text-lg-start mt-0 pt-0 mt-lg-5 pt-lg-5">
//             <h1 className="text-primary fw-bold fs-0">flexbook</h1>
//             <p className="w-75 mx-auto fs-4 mx-lg-0">Flexbook helps you connect and share with the people in your life.</p>
//           </div>
//           <div style={{
//             maxWidth: '28rem',
//             width: '100%'
//           }}>
//             <div className="bg-white shadow rounded p-3 input-group-lg">
//               <input type="email" className="form-control my-3" placeholder="Email address or phone number" />
//               <input type="password" className="form-control my-3" placeholder="Password" />
//               <button className="btn btn-primary w-100 my-3" onClick={handleSubmit}>Log In</button>
//               <a href="#" className="text-decoration-none text-center"><p>Forgotten password?</p></a>
//               {/* <!-- create form --> */}
//               <hr />
//               <div className="text-center my-4">
//                 <button className="btn btn-success btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#createModal">Create New Account</button>
//               </div>
//               {/* <!-- create modal --> */}
//               <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                   <div className="modal-content">
//                     {/* <!-- head --> */}
//                     <div className="modal-header">
//                       <div>
//                         <h2 className="modal-title" id="exampleModalLabel">Sign Up</h2>
//                         <span className="text-muted fs-7">It is quick and easy.</span>
//                       </div>
//                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     {/* <!-- body --> */}
//                     <div className="modal-body">
//                       <form>
//                         {/* <!-- names --> */}
//                         <div className="row">
//                           <div className="col">
//                             <input type="text" className="form-control" placeholder="First name" />
//                           </div>
//                           <div className="col">
//                             <input type="text" className="form-control" placeholder="Surname" />
//                           </div>
//                         </div>
//                         {/* <!-- email & pass --> */}
//                         <input type="email" className="form-control my-3" placeholder="Mobile number or email address" />
//                         <input type="password" className="form-control my-3" placeholder="New password" />
//                         {/* <!-- DOB --> */}
//                         <div className="row my-3">
//                           <span className="text-muted fs-7">Date of birth <i className="fas fa-question-circle" data-bs-toggle="popover" type="button" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i></span>
//                           <div className="col">
//                             <select className="form-select">
//                               <option value="1">One</option>
//                               <option value="2">Two</option>
//                               <option value="3">Three</option>
//                             </select>
//                           </div>
//                           <div className="col">
//                             <select className="form-select">
//                               <option value="1">One</option>
//                               <option value="2">Two</option>
//                               <option value="3">Three</option>
//                             </select>
//                           </div>
//                           <div className="col">
//                             <select className="form-select">
//                               <option value="1">One</option>
//                               <option value="2">Two</option>
//                               <option value="3">Three</option>
//                             </select>
//                           </div>
//                         </div>
//                         {/* <!-- gender --> */}
//                         <div className="form-check form-check-inline my-3">
//                           <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
//                           <label className="form-check-label" htmlFor="male">Male</label>
//                         </div>
//                         <div className="form-check form-check-inline my-3">
//                           <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
//                           <label className="form-check-label" htmlFor="female">Female</label>
//                         </div>
//                         <div className="form-check form-check-inline my-3">
//                           <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
//                           <label className="form-check-label" htmlFor="other">Other</label>
//                         </div>
//                         {/* <!-- signup button --> */}
//                         <button type="submit" className="btn btn-success w-100 my-3" onClick={() => history.push('/feed')}>Sign Up</button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Route path="/feed" component={Feed} />
//       </body>
//     </Router>
//   );
// }

// export default App;