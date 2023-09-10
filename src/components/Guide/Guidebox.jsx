import React from 'react'
import {styled} from "@mui/material/styles"
import { Box, Typography } from '@mui/material'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Guidebox = ({imageIcon, text1, text2 }) => {
    const GuideBox = styled(Box)(({theme})=>({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
      }))

    return (
        <GuideBox>
          <img src={imageIcon} alt={text1} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            {text1}
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              {text2}
            </Typography>

            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>
    )
}

export default Guidebox

/*

*/