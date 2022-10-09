const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})
app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/views/register.html')
})
app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html')
})



app.use(express.static(publicPath));