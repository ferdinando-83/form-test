import React from "react";

function FormView(props) {
  return (
    <main>
      <form>
        <input
          name={"firstName"}
          value={props.firstName}
          onChange={props.handleChange}
          type={"text"}
          placeholder={"First Name"}
        />
        <br/>

        <input
          name={"lastName"}
          value={props.lastName}
          onChange={props.handleChange}
          type={"text"}
          placeholder={"Last Name"}
        />
        <br/>

        <input
          name={"age"}
          value={props.age}
          onChange={props.handleChange}
          type={"text"}
          placeholder={"Age"}
        />
        <br/>

        <label>
          <input
            type={"radio"}
            name={"gender"}
            value={"male"}
            checked={props.gender === "male"}
            onChange={props.handleChange}
          /> Male
        </label>
        <br/>

        <label>
          <input
            type={"radio"}
            name={"gender"}
            value={"female"}
            checked={props.gender === "female"}
            onChange={props.handleChange}
          /> Female
        </label>
        <br/>

        <select value={props.destination} name={"destination"} onChange={props.handleChange}>
          <option value={""}>-- Please choose a destination --</option>
          <option value={"germany"}>Germany</option>
          <option value={"norway"}>Norway</option>
          <option value={"north pole"}>North Pole</option>
          <option value={"south pole"}>South Pole</option>
        </select><br/>

        <label>
          <input
            type={"checkbox"}
            name={"isVegan"}
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.isVegan}
          /> Vegan?
        </label>
        <br/>

        <label>
          <input
            type={"checkbox"}
            name={"isKosher"}
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.isKosher}
          /> Kosher?
        </label>
        <br/>

        <label>
          <input
            type={"checkbox"}
            name={"isLactoseFree"}
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.isLactoseFree}
          /> Lactose Free?
        </label>
        <br/>

        <button>Submit</button>
      </form>
      <hr/>
      <h2>Entered information:</h2>
      <p>Your name: {props.firstName} {props.lastName}</p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <p>
        Your dietary restrictions:
        {props.dietaryRestrictions.isVegan && <p>Vegan</p>}
        {props.dietaryRestrictions.isKosher && <p>Kosher</p>}
        {props.dietaryRestrictions.isLactoseFree && <p>Lactose Free</p>}
      </p>
    </main>
  )
}

export default FormView;