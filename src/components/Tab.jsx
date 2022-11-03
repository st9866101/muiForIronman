import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function BasicTabs(props) {


    return (
        <Box sx={{ width: "100%" }}>
            <Tabs
                value={props.value}
                textColor="inherit"
                onChange={props.handleChange}
                aria-label="basic tabs example"

            >
                <Tab label="技術問答" {...a11yProps(0)} />
                <Tab label="技術文章" {...a11yProps(1)} />
                <Tab label="聊天室" {...a11yProps(2)} />
            </Tabs>
        </Box>
    );
}
