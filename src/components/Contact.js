// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
} from "@mui/material";
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ bgcolor: "background.paper", margin: "20px" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={data.photo} sx={{ width: 60, height: 60 }} />
        </ListItemAvatar>
        <ListItemText
          sx={{ marginLeft: "20px" }}
          primary={data.name}
          secondary={
            <React.Fragment>
              <span
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {data.phone}
              </span>
              <br />
              <span
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {data.email}
              </span>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default Contact;
