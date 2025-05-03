const express = require('express')
const multer = require('multer')
const app = express()
const PORT = 3000


// Storage configuration
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads') // Upload folder
    },
    filename:(req, file, cb)=>{
        cb(null,Date.now()+'-'+file.originalname) // Unique name
    }
})

const upload = multer({storage:storage})

app.get('/',(req, res)=>{
    return res.sendFile(__dirname+'/'+'index.html');
})

app.get('/upload',(req,res)=>{
    res.send('its working')
})


// route for single file upload
app.post('/upload-single', upload.single('myFile'), (req, res)=>{
    res.send('Single file uploaded successfully!');
})


// Route for multiple file upload
app.post('/upload-multiple', upload.array('myFiles', 5), (req, res) => {
    res.send('Multiple files uploaded successfully!');
  });

  
app.listen(PORT,()=>{
    console.log("Server is running on PORT 3000")
})