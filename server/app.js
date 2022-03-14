const express = require('express');
const cors = require('cors');
const app = express();
const path = require("path");
const port = 3001;
const getBritishFriendlyTime = require('./utils/getBritishFriendlyTime');
const convertUserInputToDateTime = require('./utils/convertUserInputToDateTime');

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("src"));

app.use('/friendly-time', (req, res) => {
	const { userInput }= req.query
	const dateFromUserInput = convertUserInputToDateTime(userInput);
	const friendlyTime = getBritishFriendlyTime(dateFromUserInput);
  
    res.json({ friendlyTime });
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
