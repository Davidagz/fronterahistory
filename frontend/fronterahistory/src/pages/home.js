import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



function Home(){
    return (
        <div className="home">
            <Grid item xs={12} md={8}>
            <Typography variant="h6"
            align="center" 
            gutterBottom>
            Map goes here
            </Typography>
            <Divider />
        </Grid>
        </div>
    );
}

export default Home;