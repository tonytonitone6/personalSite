const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 9000;


const app = express();

app.use(cors(), bodyParser.json());




app.listen(PORT, () => console.log(`Starting server... PORT is ${PORT}`));

