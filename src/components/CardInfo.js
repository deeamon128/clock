import React from 'react';
import { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function CardInfo() {

  const [initialState, setInitialState ] = useState([]);

  useEffect(() => {
    fetch("/?userInput")
    .then(res => {
      if(res.ok){
        return res.text()
      }
    }).then(jsonResponse => setInitialState(jsonResponse))}, []);
  
    console.log(setInitialState)

  return (
    <div>
      <Card>
        <CardHeader title="Human Friendly Clock" />
        <CardContent>
          <Typography></Typography>
        </CardContent>
      </Card>
    </div>
  )
}

