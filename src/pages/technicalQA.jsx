import * as React from "react";
import {
    Box,
    Button,
    Typography,

} from '@mui/material/';



function TechnicalQA() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<Box>
        <Button variant="contained" color="primary">
            公告
        </Button>
        &nbsp; &nbsp;2022 年 iThome 鐵人賽告一段落，恭賀新一代鐵人誕生 ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡
        <Typography sx={{ marginTop: 2, }}>
            技術問答
        </Typography>
    </Box>
    )
}

export default TechnicalQA