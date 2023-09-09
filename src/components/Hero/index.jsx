import { Box, Typography } from '@mui/material';
import {styled} from '@mui/material/styles'
import { Container } from '@mui/system';
import React from 'react'
import Navbar from '../Navbar';

import CustomButton from '../Common/CustomButton';
import heroImg from '../../assets/media/hero_illustration.png'

const Hero = () => {


  const CustomBox = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    gap:theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    
  }))

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{backgroundColor:"#E6F0FF", minHeight:"80vh"}}>
        <Container>
            <Navbar/>
            <CustomBox >
              <Box>
            
                <Typography 
                
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}>
                  Bienvenido a Rubens-state Agency 
                </Typography>
                
                <Title variant='h1'>
                  Descubra un lugar donde amaras estar,
                </Title>
                
                <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                >
               
                Se el Primero para Obtener los Mejores Acuerdos antes que entren al Mercado!
                El poder de un buen negocio en una simple busqueda

                </Typography>

                <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Nosotros"
                heroBtn={true}
                />
                
              </Box>
              
              <Box>
                <img
                  src={heroImg}
                  alt="heroImg"
                  style={{ maxWidth: "100%", marginBottom: "2rem" }}
                />
              </Box>
              

            </CustomBox>
            

        </Container>
    </Box>
  )
}



export default Hero;
