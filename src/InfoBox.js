import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import './InfoBox.css';

const InfoBox = (props) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <h2 className="h2">{props.name}</h2>
        <h4 className="h4">Total Runs: {props.totalruns}</h4>
        <h4 className="h4">Strike Rate: {props.strikerate}</h4>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
