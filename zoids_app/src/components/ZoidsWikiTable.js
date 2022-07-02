import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WikiRow from './WikiRow';

const ZoidsWikiTable = () => {
  const dispatch = useDispatch();
  const zoids = useSelector(state => state.zoids);
  const search = useSelector(state => state.search);

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
              type: 'SET_SELECTED_ZOID',
              payload: zoids
            })} />
          ))
        }
      </tbody>
    </table>
  );
}

export default ZoidsWikiTable;