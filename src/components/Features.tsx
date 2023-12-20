// // import React, { useState, ChangeEvent, FormEvent } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Features: React.FC = () => {
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     phone: "",
// //     email: "",
// //     country: "",
// //     address1: "",
// //     address2: "",
// //     postcode: "",
// //     town: "",
// //     additionalInfo: "",
// //   });
// //   const navigate = useNavigate();

// //   const handleInputChange = (
// //     event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({ ...formData, [event.target.name]: event.target.value });
// //   };

// //   const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
// //     setFormData({ ...formData, [event.target.name]: event.target.value });
// //   };

// //   const handleSubmit = (event: FormEvent) => {
// //     event.preventDefault();
// //     // Add your form validation logic here

// //     alert("Order placed");
// //     navigate("/orderConfirmed");
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         name="firstName"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="First Name"
// //       />
// //       <input
// //         name="lastName"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="Last Name"
// //       />
// //       <input
// //         name="phone"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="Phone"
// //       />
// //       <input
// //         name="email"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="Email"
// //         type="email"
// //       />
// //       <select name="country" required onChange={handleInputChange}>
// //         <option value="">Select your country</option>
// //         <option value="country1">Country 1</option>
// //         <option value="country2">Country 2</option>
// //         {/* Add more options as needed */}
// //       </select>
// //       <input
// //         name="address1"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="Address Line 1"
// //       />
// //       <input
// //         name="address2"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="Address Line 2"
// //       />
// //       <input
// //         name="postcode"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="Postcode"
// //       />
// //       <input
// //         name="town"
// //         required
// //         onChange={handleInputChange}
// //         placeholder="Town"
// //       />
// //       <textarea
// //         name="additionalInfo"
// //         required
// //         onChange={handleTextareaChange}
// //         placeholder="Additional Info"
// //       />
// //       <button type="submit">Purchase</button>
// //     </form>
// //   );
// // };

// // export default Features;
// import React from "react";
// import { Link } from "react-router-dom";

// const Features = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             <img src="./2227.jpg" alt="" height="30" />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo02"
//             aria-controls="navbarTogglerDemo02"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/HomePage"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Products">
//                   Product
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Categories">
//                   Category
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/AboutUS">
//                   About US
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link "
//                   aria-disabled="true"
//                   to="/ContactUS"
//                 >
//                   Contact US
//                 </Link>
//               </li>
//             </ul>
//             <form className="d-flex me-2" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <Link
//                 className="btn btn-outline-success"
//                 type="submit"
//                 to="/SearchPage"
//               >
//                 Search
//               </Link>
//             </form>
//             <Link
//               className="btn btn-outline-primary"
//               type="button"
//               to="/CartPage"
//             >
//               <img src="cart-icon.png" alt="Cart" width="20" height="20" />
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Features;
import React from "react";

const Features = () => {
  return <div>Features</div>;
};

export default Features;
