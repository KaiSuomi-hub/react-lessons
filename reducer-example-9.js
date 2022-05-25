import React, { useState, useContext, useReducer } from "react";

const LangContext = React.createContext("fi");

const initialState = { name: "", nat: "", add: "", main: "" }; // Similar to useState({name: "", nat: "", add: "", main: ""});

function reducer(state, action) {
  switch (action.type) {
    case "updateDataValues":
      return { name: action.data.name, nat: action.data.nat, add: action.data.add, main: action.data.main };
    case "natAndMainToUpperCase":
      return { ...state, nat: state.nat.toUpperCase(), main: state.main.toUpperCase() };
    case "natAndMainToLowerCase":
      return { ...state, nat: state.nat.toLowerCase(), main: state.main.toLowerCase() };
    default:
      // This error will never be reached with the current code, but switch-case must have a default condition always
      throw new Error("You done goofed")
  }
}

function LanguageChange() {
  const [language, setLanguage] = useState("fi"); // useState() handles only the language value
  const [state, dispatch] = useReducer(reducer, initialState);

  const dictionary = {
    title: { fi: "Opiskelijan tiedot", en: "Student information" },
    name: { fi: "Nimi", en: "Name" },
    nat: { fi: "Kansalaisuus", en: "Nationality" },
    add: { fi: "Osoite", en: "Address" },
    main: { fi: "Pääaine", en: "Field of Study" },
    save: { fi: "Tallenna", en: "Save" },
    lang: { fi: "Vaihda kieltä", en: "Switch language" }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({
      type: "updateDataValues",
      data: {
        name: event.target.name.value, // target.name corresponds to input field with the id "name"
        nat: event.target.nat.value,
        add: event.target.add.value,
        main: event.target.main.value,
      }
    })
  };

  const languageHandler = () => {
    setLanguage((language === "fi") ? "en" : "fi");
    (language === "fi") ? dispatch({ type: "natAndMainToUpperCase" }) : dispatch({ type: "natAndMainToLowerCase" });
  };

  const InfoForm = () => {
    const context = useContext(LangContext);
    return (
      <form onSubmit={submitHandler}>
        <label>{dictionary.name[context]}: </label>
        <input id="name" type="text"></input><br />
        <label>{dictionary.nat[context]}: </label>
        <input id="nat" type="text"></input><br />
        <label>{dictionary.add[context]}: </label>
        <input id="add" type="text"></input><br />
        <label>{dictionary.main[context]}: </label>
        <input id="main" type="text"></input><br />
        <button type="submit">{dictionary.save[context]}</button>
      </form>
    )
  };

  const DisplayInfo = () => {
    const context = useContext(LangContext);
    return (
      <>
        <p><b>{dictionary.name[context]}: </b>{state.name}</p>
        <p><b>{dictionary.nat[context]}: </b>{state.nat}</p>
        <p><b>{dictionary.add[context]}: </b>{state.add}</p>
        <p><b>{dictionary.main[context]}: </b>{state.main}</p>
      </>
    );
  };

  const StudentInfo = () => {
    const context = useContext(LangContext); // Notice how no props are passed to this component or any others
    return (
      <>
        <h2>{dictionary.title[context]}</h2>
        <InfoForm />
        <DisplayInfo />
        <button onClick={languageHandler}>{dictionary.lang[context]}</button>
      </>
    );
  };

  return (
    <LangContext.Provider value={language}>
      {/* Uppermost component is wrapped with the provider so all children components can evoke context*/}
      <StudentInfo />
    </LangContext.Provider>
  );
}

export default LanguageChange;
