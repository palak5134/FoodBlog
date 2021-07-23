import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Content() {

    const [name, setname] = useState("")
    const [desc, setdesc] = useState("")
    const [articleImage, setarticleImage] = useState("")
    const [brief, setbrief] = useState("")



    const handlePhoto = (e) => {
        setarticleImage(e.target.files[0])
    }
    const Post = async (e) => {

        e.preventDefault();
        console.log("post")
        const formData = new FormData();
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('brief', brief);
        formData.append('articleImage', articleImage);
        // console.log(e.target.value)
        setname("")
        setdesc("")
        setbrief("")

        axios.post('http://localhost:5000/data/', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                width: '100%',
            },
        },
        
       
    }));
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className="container mt-3 card py-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-content">
                            <form noValidate autoComplete="off" method="POST">

                                <label className="label-text" htmlFor="image">Upload Image</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    name="articleImage"
                                    onChange={handlePhoto}
                                /><br />
                                <div className={classes.root}>
                                    <TextField id="name" label="Name" name="name" value={name} onChange={(e) => setname(e.target.value)} />

                                </div>

                                <br />
                                <div className={classes.root}>
                                    <TextField
                                        id="desc"
                                        value={desc}
                                        onChange={(e) => setdesc(e.target.value)}
                                        label="Description"
                                        name="desc"
                                        multiline

                                    />
                                    {/* <textarea className="form-control" placeholder="Descripation" id="desc" value={desc} onChange={(e) => setdesc(e.target.value)} name="desc" style={{ height: "200px" }}></textarea>
                                        <label htmlFor="floatingTextarea2">Descripation</label> */}
                                </div><br />
                                <div className={classes.root}>
                                    {/* <textarea className="form-control" placeholder="Brief" id="brief" value={brief} onChange={(e) => setbrief(e.target.value)} name="brief" style={{ height: "100px" }}></textarea>
                                    <label htmlFor="floatingTextarea2">Brief</label> */}

                                    <TextField
                                        id="brief" 
                                        value={brief}
                                        onChange={(e) => setbrief(e.target.value)}
                                        name="brief"
                                        label="Brief"
                                        rows={8}
                                        multiline                                        
                                    />
                                </div>

                                <br />
                                <Button variant="contained" style={{width:'100%'}} color="primary" onClick={Post}>
                                    Upload
                                </Button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

