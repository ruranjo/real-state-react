import {styled} from '@mui/material/styles'
import { Typography } from '@mui/material';
import React from 'react'



const Logo = ({visible}) => {

    const CustomLogo = styled(Typography)(({ theme }) => ({
        color:"#0F1B4C",
        fontWeight:"900",
        fontSize:"1.2rem",
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
          display: visible ? "" : "none",
        },
      }));

    return (
    <CustomLogo >RUBENS-STATE</CustomLogo> 
  )
}

export default Logo