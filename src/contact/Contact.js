import React, {useState} from "react"
import "./Contact.css";

export default function Contact(){
 const initialFormState = {
    name: "",
    email:"",
    mobile_number:"",
    message:""
  }

  const [formData, setFormData] = useState(initialFormState)
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = ({target}) => {
    const value = target.value;
    setFormData({...formData, [target.name]:value})
  }
  console.log(formData.name)
 return (
   <>
   <main>
    <div className="contact">
    <h2>Contact Me</h2>
  
    <form>
      <div className="contact-info">
      <label htmlFor="name"> Name
      <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}/>
      </label>
      <label htmlFor="email">Email
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}/>
      </label>
      <label htmlFor="mobile_number">Mobile Number
        <input id="mobile_number" name="mobile_number" type="tel" value={formData.mobile_number} onChange={handleChange} />
      </label>
      <button type="submit" className="submit">Send</button>
      </div>
      <label htmlFor="message">Message
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
      </label>
    </form>
    </div>
    </main>
    </>
 )
};