import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import React, { useState } from 'react'

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu"
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import CustomButton from '../Common/CustomButton';




const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false, });


  const toggleDrawer = (anchor, open) => (event) =>{
    if( event.type === "keydown" && (event.type === "Tab" || event.type === "Shift" )){
      return;
    }
    console.log("hola Custonm Menu Icon")
    setMobileMenu({...mobileMenu, [anchor]:open})
  }

  const list = (anchor) => (
    <Box
      sx={{width: anchor === "top" || anchor === "bottom" ? "auto" : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          ["Home", "Caracteristicas", "Servicios", "Atencion", "Contacto"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton >
              </ListItem>
            )
          )
        }
      </List>
      
    </Box>
  )
  
  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display:"none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]:{
      display:"block",
    }
    
  }));

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize:"14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor:"pointer",
    "&:hover":{
      color:"#000",
    }
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    gap:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
      display:"none"
    }
  }));

  const NavbarLogo = styled(Typography)(({ theme }) => ({
    color:"#0F1B4C",
    fontWeight:"900",
    fontSize:"1.2rem",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

    return (
        <NavbarContainer>
            
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:"2.5rem"}}>

              <Box sx={{ display:"flex", alignItems:"center"}}>
                <CustomMenuIcon  onClick={toggleDrawer("left", true)}/>
                <Drawer
                anchor='left'
                open={mobileMenu["left"]}
                onClose={toggleDrawer("left",false)}
                >
                  {list("left")}
                </Drawer>
                <NavbarLogo >RUBENS-STATE</NavbarLogo> 
              </Box>

              <NavbarLinksBox>
                  <NavLink variant="body2">Home</NavLink>
                  <NavLink variant="body2">Caracteristicas</NavLink>
                  <NavLink variant="body2">Servicios</NavLink>
                  <NavLink variant="body2">Atencion</NavLink>
                  <NavLink variant="body2">Contacto</NavLink>
              </NavbarLinksBox>
            </Box>
            
            <Box sx={{display:"flex",alignItems: "center", justifyContent:"center", gap:"1rem",}}>
                <NavLink variant="body2">Ingresar</NavLink>
                <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Registro"/>
            </Box>
        </NavbarContainer>
    )
}

export default Navbar;