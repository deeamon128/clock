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
    width: 400,
    height: 500,
    margin: "auto",
    marginLeft: 50,
    marginTop: 50,
    backgroundColor: "#e07a5f",
    color: "white",
    borderRadius: 25,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  content: {
    textAlign: "center",
    marginTop: 30,
  },
  title: {
    fontSize: "50",
    flexGrow: 1,
    textAlign: "center",
    marginTop: 30,
  },
  button: {
    marginTop: 10,
    color: "white",
    backgroundColor: "#3d405b",
    paddingRight: 40,
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
        <CardContent className={classes.content}>
          <TextField
            id="outlined-basic"
            label="insert a time hh:mm"
            variant="outlined"
            defaultValue="Small"
            size="small"
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
          <Typography variant="h5" className={classes.typography}>
            {time}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
