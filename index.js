const express = require('express');
const app = express()

const PORT = 3050;

require('./src/routes.js');

app.listen((PORT), ()=>{

    console.log('Welcome to ProjectDashboard - server  is running at $(PORT)')
})