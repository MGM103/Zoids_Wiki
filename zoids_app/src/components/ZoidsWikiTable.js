import React, {useContext} from 'react';
import ZoidsContext from '../ZoidsContext';
import WikiRow from './WikiRow';

const ZoidsWikiTable = () => {
  const {
    state: {zoids, search},
    dispatch
  } = useContext(ZoidsContext)

  return(
    <table width="100%">
      <thead>
        <tr>
          <th> Name </th>
          <th> Type </th>
          <th> Manufacturer </th>
          <th> Description </th>
        </tr>
      </thead>
      <tbody>
        {zoids
          .filter((zoids) => zoids.name.toLowerCase().includes(search.toLowerCase()))
          .map((zoids) => (
            <WikiRow zoids={zoids} key={zoids.id} onSelect={() => dispatch({
              action: 'SET_SELECTED_ZOID',
              payload: zoids
            })} />
          ))
        }
      </tbody>
    </table>
  );
}

export default ZoidsWikiTable;