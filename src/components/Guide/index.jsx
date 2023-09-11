import { Box, Typography } from '@mui/material'
import React from 'react'
import {styled} from '@mui/material/styles'

import buyIcon from '../../assets/media/buy_icon.png';
import sellIcon from '../../assets/media/sell_icon.png'; 
import rentIcon from '../../assets/media/rent_icon.png';


import CustomButton from '../Common/CustomButton';
import Guidebox from './Guidebox';


const Guide = () => {

  const CustomBox = styled(Box)(({theme})=>({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }))

  const GuidesBox = styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }))

 

  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    }}>
      
      <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
          }}
      ></div>      
      
      <Typography
          variant="h3"
          sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3,textAlign:"center" }}
        >
          Como funciona nuestro sistema
      </Typography>

      <CustomBox>
          <Typography
            variant='body2'
            sx={{
              fontSize:"16px",
              fontWeight: "500",
              color: "#5A6473",
              textAlign:"center"
            }}
          >
            Todo lo que necesitas cuando quieres una comprar, rentar o vender - Todo en el mismo lugar
          </Typography>
      </CustomBox>

      <GuidesBox>
            <Guidebox imageIcon={buyIcon} text1={"Buying Guides"} text2={"How to buy"} />
            <Guidebox imageIcon={rentIcon} text1={"Renting Guides"} text2={"How to rent"} />
            <Guidebox imageIcon={sellIcon} text1={"Selling Guides"} text2={"How to sell"} />
      </GuidesBox>
      
      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
      />
    </Box>
  )
}



export default Guide


