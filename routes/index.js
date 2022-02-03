import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

//set up the root directory reference
//find the global URL using fileURLToPath
// and then turn that into the __dirname (something like users/desktop/NGO_Redux/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    //res.send('hello from express!'); // buradan aliyorduk bilgiyi
    // send back the index.html file 
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/elif', (req, res) => {
   res.send(`this is elif's page`);
   //res.sendFile(path.join(__dirname, '/views/index.html'));
})

router.get('/jacob', (req, res) => {
    res.send(`this is jacob's page`);
    //res.sendFile(path.join(__dirname, '/views/index.html'));
})

router.use((req, res) => {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
})
//export the router and make it available to app.js
export default router;