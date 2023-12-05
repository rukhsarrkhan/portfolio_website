import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function CardSample() {

    const Item = styled(Paper)(() => ({
        backgroundColor: '#98d6a9',
        padding: 8,
        textAlign: 'center',
        color: 'black',
    }));

    return (
        <>
            <div className="p_block"></div>

            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <Item elevation={3}>One</Item>
                </Grid>

                <Grid item xs={3}>
                    <Item elevation={3}>Two</Item>
                </Grid>

                <Grid item xs={3}>
                    <Item elevation={3}>Three</Item>
                </Grid>

                <Grid item xs={3}>
                    <Item elevation={3}>Four</Item>

                </Grid>

            </Grid>
        </>
    );
}

export default CardSample;