import React, {useState, useEffect} from 'react';
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


function App() {
  const [zoids, setZoids] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedZoid, setSelectedZoid] = useState(null);

  useEffect(() => {
    console.log("Ran use Effect")

    fetch("http://localhost:3000/Zoids_Wiki/zoids.json")
      .then((response) => response.json())
      .then((data) => setZoids(data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <ZoidsContext.Provider
      value={{
        search,
        zoids,
        selectedZoid,
        setSearch,
        setZoids,
        setSelectedZoid
      }}
    >
      <AppContainerDiv>
          <AppTitle>Zoids Wiki</AppTitle>
          <AppContentDiv>
            <div>
              <WikiFilter />
              <ZoidsWikiTable />
            </div>
            {selectedZoid && <ZoidInfo />}
          </AppContentDiv>
      </AppContainerDiv>
    </ZoidsContext.Provider>
  );
}

export default App;
