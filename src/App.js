import {Button, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";

export default function App() {
    const [data, setData] = useState("")
    const [displayName, setDisplayName] = useState("")

    function onChangeName(e) {
        setData(e.target.value)
        setData(e.target.value)
    }

    let role = {
        awsAssumeRole : "hsad"
    }

    let awsKey = {
        awsKey : "dnjnkw",
        awsSecret: "weqne"
    }

    let payload = {
        config : role?.awsAssumeRole?.length ? role : awsKey
    }

    function handleClick() {
        axios.post(`http://127.0.0.1:8000/test`, payload).then((response) => {
            setDisplayName(response.data.message)
        }).catch((err) => setDisplayName("No company"))
    }

    return (
        <div style={{textAlign: "center", paddingTop: "2rem"}}>
            <h2>Welcome Page</h2>
            <TextField
                style={{width : "20rem"}}
                size={"small"}
                onChange={onChangeName}
                value={data}
            />
            <br /><br />
            <Button
                variant={"outlined"}
                onClick={handleClick}
            >
                submit
            </Button>
            <br /><br />
            {displayName}
        </div>
    )
}