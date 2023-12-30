import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import Adduser from "./api";

const AddUser = () => {
  const initialValue = {
    download_url: "",
    author: "",
  };
  const [user, setuser] = useState(initialValue);
  // const navigate =useNavigate();

  const onValuechange = (e) => {
    // console.log(e.target.name,e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const Adduserdetails = async () => {
    await Adduser(user);
    // navigate("/all")
  };

  return (
    <div>
      <Typography variant="h4" align="center">
        Add Card
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="download_url" />
      </FormControl>
      <FormControl>
        <InputLabel>username</InputLabel>
        <Input onChange={(e) => onValuechange(e)} name="author" />
      </FormControl>

      <FormControl>
        <Button onClick={() => Adduserdetails()} variant="contained">
          Add user
        </Button>
      </FormControl>
    </div>
  );
};

export default AddUser;
