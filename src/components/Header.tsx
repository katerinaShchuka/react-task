import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AddHomeIcon from '@mui/icons-material/AddHome';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

export const Header = () => {

    return (
        <div>
            <Box
    sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 2, m: 2, 
        }}
        >
            <Button
              color="primary"
              LinkComponent={NavLink}
              variant="outlined"
              startIcon={<AddHomeIcon />}
              {...{ to: "/", end: true }}
            >
              Home
            </Button>

            <Button
               color="primary"
              LinkComponent={NavLink}
              variant="outlined"
              startIcon={<DashboardCustomizeIcon />}
              {...{ to: "/form", end: true }}
            >
              Form
            </Button>
            </Box>
</div>  )
 
}