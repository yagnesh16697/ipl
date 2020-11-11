import React from 'react';
import './App.css';
import SearchBar from 'material-ui-search-bar';
import { Card, CardContent, Typography } from '@material-ui/core';
import Table from './Table';
import InfoBox from './InfoBox';
import MainTable from './MainTable';

const App = () => {
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h2>IPL</h2>
          <SearchBar className="app__search" placeholder="Search Player" />
        </div>
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
  );
};

export default App;
