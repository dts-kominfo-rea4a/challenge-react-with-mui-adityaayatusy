import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { Grid } from "@mui/material";
import data from "./data/contacts.json";
// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(data);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const formSubmitHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  return (
    <div className="App">
      <Header></Header>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ContactForm propsSubmitHandler={formSubmitHandler}></ContactForm>
        </Grid>
        <Grid item xs={6}>
          {contacts.map((contact) => {
            return <Contact data={contact} key={contact.phone}></Contact>;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
