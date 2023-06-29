import { Box, Button, Container, FormGroup, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
const Posts = () => {



    return (<>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    width: 500,
                    height: 500,
                    backgroundColor: 'primary.ligth',
                }}
            >
                <Typography style={{textAlign:"center"}}>SignUp Page</Typography>
                <Box>
                    <FormGroup className="form-group-s1">
                        <TextField id="outlined-basic" label="Enter Email..." variant="outlined" />
                    </FormGroup>
                    <FormGroup className="form-group-s1">
                        <TextField id="outlined-basic" label="Enter Password..." variant="outlined" />
                    </FormGroup>
                    <FormGroup className="form-group-s1">
                        <TextField id="outlined-basic" label="Enter Confirm Password..." variant="outlined" />
                    </FormGroup>
                    <Button  fullWidth variant="contained">Login</Button>
                </Box>
            </Box>
        </Container>

    </>)

}
export default Posts