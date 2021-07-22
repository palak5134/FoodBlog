require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Content = require('./models/contentSchema')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log('connection sucessfull')
}).catch((err) => console.log(err))
const app = express();
app.use(express.json())
var cors = require('cors');
app.use(cors({origin: true, credentials: true}));


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../client/public/uploads/');
    },
    filename: function(req, file, cb) {   
        cb(null,uuidv4() + '-' + Date.now()+ file.originalname);
    }
});

let upload = multer({storage:storage});

app.post('/data', upload.single('articleImage'), async (req, res) => {
    console.log("/data")
    const name = req.body.name;
    const desc = req.body.desc;
    const articleImage = req.file.filename;
    const brief= req.body.brief

    const newUserData = {
        name,
        desc,
        articleImage,
        brief
    }

    const newUser = new Content(newUserData);

    newUser.save()
           .then(() => console.log('User Added'))
           .catch(err => console.log(err));

})
app.get('/getdata',upload.single("articleName"), async (req, res) => {
   Content.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log("listening at port"+process.env.PORT)
})