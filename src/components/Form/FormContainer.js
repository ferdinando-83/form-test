import React, {Component} from "react";
import FormView from "./FormView";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target;
    type === "checkbox" ?
      this.setState(prevState => {
        return {
          dietaryRestrictions: {
            isVegan: prevState.dietaryRestrictions.isVegan,
            isKosher: prevState.dietaryRestrictions.isKosher,
            isLactoseFree: prevState.dietaryRestrictions.isLactoseFree,
            [name]: checked
          }
        }
      }) :
      this.setState({
        [name]: value
      })
  }

  render() {
    return (
      <FormView
        handleChange={this.handleChange}
        {...this.state}
      />
    )
  }
}

export default FormContainer;