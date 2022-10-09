const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3050, () => console.log('Server on'));

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