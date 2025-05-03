let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/',(req, res)=>{
    // res.send('its working');
    res.redirect('/login');
})

app.get('/login',(req, res)=>{
    return res.sendFile(__dirname+'/'+'login.html');
})

app.post('/profile',(req, res)=>{
    // let emailid = req.query.emailid
    const {name,emailid, password} = req.body;
     return res.send(`<h2>Welcome to your Profile</h2>
        Name: <strong>${name}</strong><br>
        Email: <strong>${emailid}</strong><br>
        Password: <strong>${password}</strong><br> `);
    // return res.sendFile(__dirname+'/'+'profile.html',emailid)
})


app.listen(3000, ()=>{
    console.log("Server is runing on port 3000")
})