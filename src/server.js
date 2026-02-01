import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 8090;

app.use(express.json());

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send(`
  
  _   _           _       
 | \\ | | ___   __| | ___  
 |  \\| |/ _ \\ / _\` |/ _ \\ 
 | |\\  | (_) | (_| |  __/ 
 |_| \\_|\\___/ \\__,_|\\___|
                          
 Node Express service is running
  `);
});


app.get('/home', (req, res) => {
    res.send('HOME: Welcome to the Home page.');
});

app.get('/about', (req, res) => {
    res.send('ABOUT: Welcome to the About page.');
});

app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
