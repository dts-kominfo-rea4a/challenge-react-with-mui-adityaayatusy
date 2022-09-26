// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
  TextField,
  Card,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import "./ContactForm.css";
import React, { useState } from "react";

const ContactForm = ({ propsSubmitHandler }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  //   "name": "Devi",
  // "phone": "084857384793",
  // "email": "devi@email.com",
  // "photo": "http://placekitten.com/400"
  const [inputContact, setInputContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const inputOnChangeHandler = (event, type) => {
    switch (type) {
      case "name":
        setInputContact((prevState) => ({
          ...prevState,
          name: event.target.value,
        }));
        break;
      case "phone":
        setInputContact((prevState) => ({
          ...prevState,
          phone: event.target.value,
        }));
        break;
      case "email":
        setInputContact((prevState) => ({
          ...prevState,
          email: event.target.value,
        }));
        break;
      case "photo":
        setInputContact((prevState) => ({
          ...prevState,
          photo: event.target.value,
        }));
        break;
      default:
        console.log("not found");
    }
  };

  const localSubmitHandler = (event) => {
    event.preventDefault();
    propsSubmitHandler(inputContact);
    // setelah selesai, kosongkan input
    setInputContact({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };

  return (
    <Card variant="outlined" pd={10} id="card">
      <form action="" onSubmit={localSubmitHandler}>
        <CardContent>
          <TextField
            id="inputName"
            fullWidth
            required
            className="inputLayout"
            label="Name"
            type="text"
            variant="filled"
            value={inputContact.name}
            onChange={(e) => inputOnChangeHandler(e, "name")}
          />
          <TextField
            id="inputPhone"
            fullWidth
            required
            className="inputLayout"
            label="Phone"
            type="tel"
            variant="filled"
            value={inputContact.phone}
            onChange={(e) => inputOnChangeHandler(e, "phone")}
          />
          <TextField
            id="inputEmail"
            fullWidth
            required
            className="inputLayout"
            label="Email"
            type="email"
            variant="filled"
            value={inputContact.email}
            onChange={(e) => inputOnChangeHandler(e, "email")}
          />
          <TextField
            id="inputPhoto"
            fullWidth
            required
            className="inputLayout"
            label="Photo URL"
            type="text"
            variant="filled"
            value={inputContact.photo}
            onChange={(e) => inputOnChangeHandler(e, "photo")}
          />
        </CardContent>
        <CardActions>
          <Button type="submit">Add New</Button>
        </CardActions>
      </form>
    </Card>
  );
};
export default ContactForm;
