import React, {useContext} from 'react';
import {List, ListItem, Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';

import './component_style/ZoidInfo.css';

//Importing Components
import ZoidSpecs from './ZoidSpecs';
import BuldInfo from './BuildInfo';
import ZoidBaseStats from './ZoidBaseStats';
import ZoidBaseWeapons from './ZoidBaseWeaponRow';
import ZoidsContext from '../ZoidsContext';

const ZoidInfo = () => {
  const {state: {selectedZoid}} = useContext(ZoidsContext);

  return selectedZoid ? (
    <div>
      <Grid container spacing={0.5} sx={{paddingBottom: "2rem"}}>
        <Grid item={true} xs={12}>
          <h2>{selectedZoid.name}</h2>
          <img alt='' src={selectedZoid.imgURL} />
          <h3>Overview</h3>
          <List>
            <ListItem dense={true}>{`${selectedZoid.type} - ${selectedZoid.manufacturer}`}</ListItem>
            <ListItem dense={true}>{selectedZoid.description}</ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={6}>
          <ZoidSpecs specs={selectedZoid.specs} />
        </Grid>
        <Grid item={true} xs={6}>
          <BuldInfo build_info={selectedZoid.build_info} />
        </Grid>
        <Grid item={true} xs={6}>
          <ZoidBaseStats base_stats={selectedZoid.base_stats} />
        </Grid>
        <Grid item={true} xs={6}>
          <h3>Base Weapons</h3>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Damage</TableCell>
                  <TableCell>Target</TableCell>
                  <TableCell>EP</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedZoid.base_weapons.map(base_weapons => (
                  <ZoidBaseWeapons base_weapons={base_weapons} key={base_weapons.name} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  ) : null;
}

export default ZoidInfo;