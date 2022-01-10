import React from 'react'
import { useLocation } from "react-router";
import { Card, Button, Form } from "react-bootstrap"
import axios from "axios";
import {useNavigate } from 'react-router-dom';
export default function NewUser() {
    const [job, setJob] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const history =useNavigate();
    const updateDetails = async () => {
        let res = await axios.post("https://reqres.in/api/users/" , {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "job": job
        });
        console.log("res", res);
        alert("Profile has been updated");
        history("/");
    }
    return (
        <div style={{display:"flex", marginTop:"20px"}}>
        <Card style={{ width: '15rem', margin: "auto" }}>
               
                <Card.Body >
                    <Card.Title>User Data</Card.Title>
                    <label>Email :</label>
                    <Form.Control size="sm" type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
                    <label>First Name :</label>
                    <Form.Control size="sm" type="text" placeholder="First Name"  onChange={(e) => setFname(e.target.value)} />
                    <label>Last Name :</label>
                    <Form.Control size="sm" type="text" placeholder="Last Name"  onChange={(e) => setLname(e.target.value)} />
                    <label>Job :</label>
                    <Form.Control size="sm" type="text" placeholder="Job"  onChange={(e) => setJob(e.target.value)} />
                    <hr />
                        <Button variant="primary" onClick={updateDetails}>Update Details</Button>
                </Card.Body>
            </Card>
            </div>
        

    )
}
