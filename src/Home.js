import React from 'react';
import './Home.css';
import SearchBar from 'material-ui-search-bar';
import { Card, CardContent } from '@material-ui/core';
import Table from './Table';
import InfoBox from './InfoBox';
import MainTable from './MainTable';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

const Home = () => {
  return (
    <>
      <div className="app__header">
        <SearchBar className="app__search" placeholder="Search Player" />
      </div>
      <div className="app">
        <Card className="app__left">
          <CardContent>
            <h3 className="filter">Filters</h3>
            <FormControlLabel
              control={<Switch name="checkedB" color="primary" />}
              label="Indian"
            />
            <Divider />
            <h3 className="filter">Matches</h3>
            <FormGroup>
              <FormControlLabel
                color="primary"
                control={<Checkbox name="gilad" />}
                label="> 5 Matches"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="jason" />}
                label="> 25 Matches"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="antoine" />}
                label="> 100 Matches"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="antoine" />}
                label="> 200 Matches"
              />
            </FormGroup>
            <Divider />
            <h3 className="filter">Seasons</h3>
            <FormGroup>
              <FormControlLabel
                color="primary"
                control={<Checkbox name="gilad" />}
                label="2015"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="gilad" />}
                label="2016"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="jason" />}
                label="2017"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="antoine" />}
                label="2018"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="antoine" />}
                label="2019"
              />
              <FormControlLabel
                color="primary"
                control={<Checkbox name="gilad" />}
                label="2020"
              />
            </FormGroup>
            <Divider />
          </CardContent>
        </Card>

        <div className="app__middle">
          <h4 className="title">Top Players</h4>
          <div className="app__stats">
            <InfoBox name="Virat Kohli" totalruns="5426" strikerate="131.98" />
            <InfoBox name="Suresh Raina" totalruns="5426" strikerate="131.98" />
            <InfoBox name="Rohit Sharma" totalruns="5426" strikerate="131.98" />
          </div>
          <h4 className="title">Top Scorer</h4>
          <div className="mainTable">
            <MainTable />
          </div>
        </div>

        <Card className="app__right">
          <CardContent>
            <div className="app__information">
              <h3>Teams</h3>
              <Table />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
