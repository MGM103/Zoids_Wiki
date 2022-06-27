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
  const {selectedZoid: {name, type, manufacturer, description, imgURL, specs, build_info, base_stats, base_weapons}} = useContext(ZoidsContext);

  return(
    <div>
      <Grid container spacing={0.5} sx={{paddingBottom: "2rem"}}>
        <Grid item={true} xs={12}>
          <h2>{name}</h2>
          <img alt='' src={imgURL} />
          <h3>Overview</h3>
          <List>
            <ListItem dense={true}>{`${type} - ${manufacturer}`}</ListItem>
            <ListItem dense={true}>{description}</ListItem>
          </List>
        </Grid>
        <Grid item={true} xs={6}>
          <ZoidSpecs specs={specs} />
        </Grid>
        <Grid item={true} xs={6}>
          <BuldInfo build_info={build_info} />
        </Grid>
        <Grid item={true} xs={6}>
          <ZoidBaseStats base_stats={base_stats} />
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
                {base_weapons.map(base_weapons => (
                  <ZoidBaseWeapons base_weapons={base_weapons} key={base_weapons.name} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default ZoidInfo;