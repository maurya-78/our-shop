// import React, { useState } from "react";

// function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:5000/api/user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     alert(data.message);
//   };

//   return (
//     <div style={{ width: "300px", margin: "auto" }}>
//       <h2>Fill Your Details</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required /><br /><br />
//         <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required /><br /><br />
//         <input type="text" name="phone" placeholder="Enter Phone" onChange={handleChange} required /><br /><br />
//         <textarea name="address" placeholder="Enter Address" onChange={handleChange} required></textarea><br /><br />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Form;
