import React, {useState, useEffect, useReducer} from 'react';
import './App.css';

//Context
import ZoidsContext from './ZoidsContext';

//Components
import WikiFilter from './components/WikiFilter';
import ZoidInfo from './components/ZoidInfo';
import ZoidsWikiTable from './components/ZoidsWikiTable';

//Style
import AppTitle from './components/styled_components/AppTitle'
import AppContainerDiv from './components/styled_components/AppContainerDiv';
import AppContentDiv from './components/styled_components/AppContentDiv';

//The state is the current state of the store i.e. it holds the variables in the react hook,
//zoids, selectedZoid & search
//Action is an object that defines the mutations that can be made to the state and the new state is returned
const zoidsReducer = (state, {action, payload}) => {
  switch(action) {
    case "SET_SEARCH":
      return {
        ...state,
        search: payload,
      };
    case "SET_ZOIDS":
      return {
        ...state,
        zoids: payload,
      };
    case "SET_SELECTED_ZOID":
      return {
        ...state,
        selectedZoid: payload,
      };
    default: 
      throw new Error("No action");
  }
};

function App() {
  const [state, dispatch] = useReducer(zoidsReducer, {
    search: "",
    zoids: [],
    selectedZoid: null,
  });

  useEffect(() => {
    console.log("Ran use Effect")

    fetch("http://localhost:3000/Zoids_Wiki/zoids.json")
      .then((response) => response.json())
      .then((payload) => dispatch(
        {
          action: 'SET_ZOIDS',
          payload
        })
      )
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <ZoidsContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <AppContainerDiv>
          <AppTitle>Zoids Wiki</AppTitle>
          <AppContentDiv>
            <div>
              <WikiFilter />
              <ZoidsWikiTable />
            </div>
            <ZoidInfo />
          </AppContentDiv>
      </AppContainerDiv>
    </ZoidsContext.Provider>
  );
}

export default App;
