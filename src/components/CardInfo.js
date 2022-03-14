import React from "react";
import { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: 500,
    height: 400,
    marginLeft: 20,
    marginTop: 50,
    backgroundColor: "#e07a5f",
    color: "white",
    borderRadius: 25,
  },
  title: {
    fontSize: 35,
    flexGrow: 1,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  button: {
    marginTop: 15,
    color: "white",
    backgroundColor: "#3d405b",
    textAlign: "center",
  },
  textfield: {
    color: "white";
  },
  typography: {
    marginTop: 30,
  },
});

export default function CardInfo() {
  const classes = useStyles();

  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState("");

  const getTime = () => {
    fetch(`/friendly-time?userInput=${userInput}`)
      .then((r) => r.json())
      .then((r) => setTime(r.friendlyTime))
      .catch(console.error);
  };

  useEffect(getTime, []);

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader className={classes.title} title="Human Friendly Clock" />
        <CardContent>
          <TextField
            id="outlined-basic"
            label="insert a time"
            variant="outlined"
            defaultValue="Small"
            size="small"
            className={classes.textfield}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            onClick={getTime}
          >
            Get Time
          </Button>
          <Typography variant="h4" className={classes.typography}>
            {time}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
