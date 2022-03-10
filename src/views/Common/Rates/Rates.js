import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useRating from '../../../Hooks/useRating';
import ShowRating from '../ShowRating/ShowRating';

const Rates = () => {
    const {rating}= useRating([])
    return (
        <Container sx={{ my: 5 }}>
            <Typography variant="h4" sx={{ my: 3 }} component="p">
                Our Customer Says
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    rating.map(rates => <ShowRating
                        key={rates._id}
                        rates={rates}
                    ></ShowRating>)
                }
            </Grid>
        </Container >
    );
};

export default Rates;