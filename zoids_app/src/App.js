import React, {useEffect} from 'react';
import {createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

//Components
import WikiFilter from './components/WikiFilter';
import ZoidInfo from './components/ZoidInfo';
import ZoidsWikiTable from './components/ZoidsWikiTable';

//Style
import AppTitle from './components/styled_components/AppTitle'
import AppContainerDiv from './components/styled_components/AppContainerDiv';
import AppContentDiv from './components/styled_components/AppContentDiv';
import './App.css';

const zoidsReducer = (
  state = {
    search: "",
    zoids: [],
    selectedZoid: null,
  }, 
  {type, payload}
) => {
  switch(type) {
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
      return state;
  }
};

const store = createStore(zoidsReducer);

function App() {
  const dispatch = useDispatch();
  const zoids = useSelector(state => state.zoids);

  useEffect(() => {
    console.log("Ran use Effect")

    fetch("http://localhost:3000/Zoids_Wiki/zoids.json")
      .then((response) => response.json())
      .then((payload) => dispatch(
        {
          type: "SET_ZOIDS",
          payload
        })
      )
      .catch((error) => console.log(error));
  }, []);
  
  return (
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
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
