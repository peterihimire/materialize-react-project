import React, { useCallback, useReducer } from "react";
import "./Contact.css";
import Input from "../components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  // VALIDATOR_REQUIRE,
} from "./FormElements/Validators";
// import Button from "../components/FormElements/Button";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const Contact = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
    },

    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);
  // const emailInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <Input
            id="name"
            element="input"
            type="text"
            label="name"
            validators={[VALIDATOR_MINLENGTH(2)]}
            onInput={inputHandler}
            errorText="Please enter a valid text"
          />
          <Input
            id="email"
            element="input"
            type="email"
            label="email"
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
            errorText="Please enter a valid email"
          />
          <button
            className="btn btn-bigger"
            type="submit"
            disabled={!formState.isValid}
          >
            submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
