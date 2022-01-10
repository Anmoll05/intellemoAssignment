import React from 'react'
import { useLocation } from "react-router";
import { Card, Button, Form } from "react-bootstrap"
import axios from "axios";
import {useNavigate } from 'react-router-dom';

export default function Profile() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    console.log(path)
    const [user, setUser] = React.useState([]);
    const [job, setJob] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const history =useNavigate();
    const fetchDetails = async () => {
        const res = await fetch("https://reqres.in/api/users/" + path);
        const json = await res.json();
        setUser(json.data);
        setEmail(json.data.email);
        setFname(json.data.first_name);


    };
    React.useEffect(() => {
        fetchDetails();
    }, []);

    const updateDetails = async () => {
        let res = await axios.put("https://reqres.in/api/users/" + path, {
            "name": fname,
            "email": email,
            "job": job
        });
        console.log("res", res);
        alert("Profile has been updated");
        history("/");
    }
    return (
        <div>
            <Card style={{ width: '17rem', margin: "auto" }}>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                    <Card.Title>User Data</Card.Title>
                    <label>Email :</label>
                    <Form.Control size="sm" type="text" placeholder="Small text" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>First Name :</label>
                    <Form.Control size="sm" type="text" placeholder="Small text" defaultValue={user.first_name} onChange={(e) => setFname(e.target.value)} />
                    <label>Last Name :</label>
                    <Form.Control size="sm" type="text" placeholder="Small text" defaultValue={user.last_name} onChange={(e) => setLname(e.target.value)} />
                    {user.job && <><label>Job :</label>
                        <Form.Control size="sm" type="text" placeholder="Small text" defaultValue={user.job} onChange={(e) => setJob(e.target.value)} /></>}

                    <hr />
                    {!user.job &&
                        <div>
                            <label>Add Job</label>
                            <input placeholder="Add Job" onChange={(e) => setJob(e.target.value)} />
                            <hr />
                            {/* <Button variant="primary" onClick={(e)=>setJob(e.target.value)}>Add Job</Button> */}
                        </div>
                    }

                    <div style={{ margin: "5px" }}>

                        <hr />
                        <Button variant="primary" onClick={updateDetails}>Update Details</Button>
                    </div>


                </Card.Body>
            </Card>
        </div>
    )
}
