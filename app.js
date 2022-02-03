import express from 'express';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

//set up the root directory reference
//find the global URL using fileURLToPath
// and then turn that into the __dirname (something like users/desktop/NGO_Redux/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();
const port = process.env.PORT || 3000;
//set up the static assets
app.use(express.static(path.join(__dirname, 'public'))); //href='CSS/MAIN.CSS

//getting route paramers (like php GET and POST superglobals)
//app.use(express.json());
//app.use(express.urlencoded({extended: false}));

// THESE ARE OUR MAIN ROUTES
app.use('/', router);

// use rhis route for anything that doesn't match
app.use(function(req, res) {
    // route doesn't match, probably a 404 or something
    console.log('route does not exist');
})

app.listen(port,  () => {
  console.log(`Server running at port:${port}/`);
});