import * as React from "react";

//The initial data with the values we'll have in the form
const initialFormData = {
 name: "",
 email: "",
 address: "",
 city: "",
 zipcode: ""
};


export default function MultiStepForm() {
  //Add state to keep track of the current state and change it 
    const [currentStep, setCurrentStep] =  React.useState(1);
    //Add state for storing and changing the initialdata
   const [formData,setFormData]= React.useState(initialFormData);

  //formData is an object, we use the spread operator to copy all the existing properties and values before updating the one that changed.
    const handleChange = (e) => {
      setFormData({
        ...formData,
        //Use the name attribute on the input element to select which property of formData to update. It's a variable
        [e.target.name]: e.target.value
      })
    };

    //To change the steps we add 1 or substract 1 to go back and forth  
    const handleNextStep = () => {
      setCurrentStep(currentStep + 1)
    };

    const handlePrevStep = () => {
      setCurrentStep(currentStep -1)
    };

    //Set the current step to 1 and reset the form once it's sent
    const handleSubmit = (e) => {
     alert("Thank you for your submission");
     e.preventDefault()
     setCurrentStep(1)
     setFormData(initialFormData)
   };


 if (currentStep === 1) {
   return (
     <form onSubmit={handleSubmit}>
       <h2>Personal Information</h2>
       <div>
         <label>Step {currentStep} of 3</label>
         <progress value={currentStep} max={3} />
       </div>
       <div>
         <label htmlFor="name">Name</label>
         <input
           required
           name="name"
           id="name"
           placeholder="Enter your name"
           value={formData.name}
           onChange={handleChange}
         />
       </div>
       <div>
         <label htmlFor="email">Email</label>
         <input
           required
           name="email"
           id="email"
           type="email"
           placeholder="Enter your email"
           value={formData.email}
           onChange={handleChange}
         />
       </div>
       <button type="button" className="secondary" onClick={handleNextStep}>
         Next
       </button>
     </form>
   );
 } else if (currentStep === 2) {
   return (
     <form onSubmit={handleSubmit}>
       <h2>Address</h2>
       <div>
         <label>Step {currentStep} of 3</label>
         <progress value={currentStep} max={3} />
       </div>
       <div>
         <label htmlFor="address">Address</label>
         <input
           required
           name="address"
           id="address"
           type="address"
           placeholder="What is your address?"
           value={formData.address}
           onChange={handleChange}
         />
       </div>
       <div>
         <label htmlFor="city">City</label>
         <input
           required
           name="city"
           id="city"
           placeholder="What city do you live in?"
           value={formData.city}
           onChange={handleChange}
         />
       </div>
       <div>
         <label htmlFor="zipcode">Zipcode</label>
         <input
           required
           name="zipcode"
           id="zipcode"
           type="number"
           placeholder="What is your zipcode?"
           value={formData.zipcode}
           onChange={handleChange}
         />
       </div>
       <div>
         <button className="secondary" type="button" onClick={handleNextStep}>
           Next
         </button>
         <button type="button" className="link" onClick={handlePrevStep}>
           Previous
         </button>
       </div>
     </form>
   );
 } else if (currentStep === 3) {
   return (
     <form onSubmit={handleSubmit}>
       <h2>Confirm your information:</h2>
       <div>
         <label>Step {currentStep} of 3</label>
         <progress value={currentStep} max={3} />
       </div>
       <table>
         <tbody>
           {Object.keys(formData).map((key) => {
             return (
               <tr key={key}>
                 <td>{key}</td>
                 <td>{formData[key]}</td>
               </tr>
             );
           })}
         </tbody>
       </table>
       <div>
         <button className="primary" type="submit">
           Submit
         </button>
         <button type="button" className="link" onClick={handlePrevStep}>
           Previous
         </button>
       </div>
     </form>
   );
 } else {
   return null;
 }
}

