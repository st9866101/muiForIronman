import * as React from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material/';
import PropTypes from "prop-types";
import BasicTabs from "../components/Tab";
import TechnicalQA from "./technicalQA";

// Tabs
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};
//

function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            {/* Day 3 */}
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ minWidth: '90px' }}>
                    IT 幫鐵人
                </Typography>
                <BasicTabs handleChange={handleChange} value={value} />
                {/*  */}
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

        <Container >

            <TabPanel value={value} index={0}>
                <TechnicalQA />
            </TabPanel>
            <TabPanel value={value} index={1}>
                技術文章
            </TabPanel>
            <TabPanel value={value} index={2}>
                聊天室
            </TabPanel>
        </Container>

    </Box>

    )
}

export default Home