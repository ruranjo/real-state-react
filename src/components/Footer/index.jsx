import { Typography } from '@mui/material';
import { styled} from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import React from 'react';

import fbIcon from '../../assets/media/fbicon.png';
import twitterIcon from '../../assets/media/twittericon.png';
import linkedinIcon from '../../assets/media/linkedinicon.png';

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              
              Productos
            </Typography>

            <FooterLink>Listado</FooterLink>
            <br />
            <FooterLink>Propiedades</FooterLink>
            <br />
            <FooterLink>Agentes</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Recursos
            </Typography>

            <FooterLink>Nuestras casas</FooterLink>
            <br />
            <FooterLink>Historias</FooterLink>
            <br />
            <FooterLink>Videos</FooterLink>
            <br />
            <FooterLink>tratos Libres</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Compañia
            </Typography>

            <FooterLink>compañeros</FooterLink>
            <br />
            <FooterLink>termino de uso</FooterLink>
            <br />
            <FooterLink>privacidad</FooterLink>
            <br />
            <FooterLink>Sistema</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Tomalo
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Encuentra tu nuevo hogar, en cualquier estilo que quieras
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;