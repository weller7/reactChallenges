import * as React from "react";

//Add the current step and the Form data into the object initial state, because we want it to manage both pieces of state
const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  },
};

//Our reducer will have the state and 4 actions that our form can do each manage by if cases
function reducer(state, action) {
  if (action.type === "next_step") {
    return {
      ...state,
      currentStep: state.currentStep + 1,
    };
  } else if (action.type === "prev_step") {
    return {
      ...state,
      currentStep: state.currentStep - 1,
    };
    //Whever the user types into the text field
  } else if (action.type === "change") {
    return {
      ...state,
      //tha action.name is a variable for any of the properties[name,email..] in our form
      formData: { ...state.formData, [action.name]: action.value },
    };
  } else if (action.type === "reset") {
    return initialState;
  } else {
    throw new Error("This action type isn't supported.");
  }
}

//Invoke useReducer passing our reducer and the initial state
export default function MultiStepForm() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //Use dispatch to run each of the actions we declared above
  const handleNextStep = () => {
    dispatch({ type: "next_step" });
  };

  const handlePrevStep = () => {
    dispatch({ type: "prev_step" });
  };

  const handleChange = (e) => {
    dispatch({
      type: "change",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    alert("Thank you for your submission");
    e.preventDefault();
    alert("Thank you for your submission");
    dispatch({ type: "reset" });
  };

  const { currentStep, formData } = state;

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
