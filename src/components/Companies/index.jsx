import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'
import Logo from '../Common/Logo';
import logosImg from '../../assets/media/logos.png';


const Companies = () => {


    const CustomContainer = styled(Container)(({theme}) =>({
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: theme.spacing(4),
        },
    }))

    const CustomBox = styled(Box)(({theme}) =>({
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(4),
          },
    }))
  
    return (
        
        <Box sx={{mt:10}}>
            <CustomContainer>
                <CustomBox>
                    <Logo visible={true}/>
                    <Typography
                        variant="body2"
                        sx={{
                        color: "#7D8589",
                        fontSize: "16px",
                        fontWeight: "bold",
                        mt: 2,
                        }}
                    >
                        Mas que 45,000 Confian En Nosotros
                    </Typography>
                </CustomBox>

                <Box>
                    <img src="" alt="" />
                    <Typography
                    variant="body2"
                    sx={{
                        color: "#7D8589",
                        fontSize: "16px",
                        fontWeight: "bold",
                        mt: 2,
                    }}
                    >
                        5-Star Rating (2k+ Reviews)
                        5-Estrellas de Rating (2k+ Reviews)
                    </Typography>
                </Box>

            </CustomContainer>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
                    <img src={logosImg} alt="logos" />
            </Container>
        </Box>

    )
}

export default Companies;
