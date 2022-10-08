const express = require("express");
const app = express();
const cors = require('cors');
const { server } = require("./server");

app.use(express.json());
app.use(cors());

server(app);