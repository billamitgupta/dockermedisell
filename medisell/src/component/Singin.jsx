import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";




function Singin() {

  const [userData, setUserData] = useState({
    name: '',
    dob: '',
    username: '',
    password: '',
    select: 'retailer',
    checkbox: false,
  });

    // Handle changes in input fields and update the state
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setUserData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', userData);

    // Display an alert message
    alert('Form submitted successfully!');


      // Send a POST request to add a new course using Axios
      axios.post('https://medisell.onrender.com/signin', userData)
        .then((response) => {
          // Successful response handling
          console.log('Course added successfully.');
          // You can redirect to another page or update the UI as needed here
        })
        .catch((error) => {
          // Error handling
          console.error('Error adding course:', error);
        });
    };
  
  return (
    
   
      <div style={{background:
      "radial-gradient(243.55% 153.69% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%) " ,paddingBottom:"17vh"}} className="w-screen h-screen">
        <div>
        <form className="responsive-form py-12 px-12" onSubmit={handleSubmit} >
      <label htmlFor="name" >
        Enter your Name
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 mb-2"
          type="text"
          name="name"
          placeholder="Name"

          onChange={handleChange}
          value={userData.name}
          required
        />
      </label>
      <br />
      <label htmlFor="dob" >
        DOB
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 mb-2"
          type="date"
          name="dob"
          placeholder="dob"
          value={userData.dob}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="username">
        Username 
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 mb-2"
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="password" className="mt-6">
        Password
        <br />
        <input
        className="border-2 rounded-lg w-72 mt-2 bg-slate-300 hover:bg-white"
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div>
        <label htmlFor="select">
          Select
          <select
          className="border-2 rounded-lg w-52 mt-10"
            name="select"
            value={userData.select}
            onChange={handleChange}
          >
            <option value="retailer">Retailer</option>
            <option value="Wholesale">WholeSale</option>
            <option value="company">Company</option>
          </select>
        </label>
      </div>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          checked={userData.checkbox}
        />
        Accept T&C (read document carefully)
      </label>
      <br />
      <div className="flex mt-12 ">
      <input
        type="submit"
        value="Submit"
        className=" w-24 h-12 border-2 rounded-lg bg-blue-500 hover:bg-blue-400 hover:text-white"
      />
      <Link to="/login">
        <input type="button" value="Login" className="mx-12 h-12 text-blue-500"/>
      </Link>
      </div>
    </form>
        </div>
      </div>
    
  );
}

export default Singin;
