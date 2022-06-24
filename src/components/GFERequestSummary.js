import React from 'react';
import { Grid, Typography, CardContent, Card, makeStyles, createStyles, Box } from '@material-ui/core'
import Divider from '@mui/material/Divider';


const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            minWidth: "50vw",
            textAlign: "left",
            color: theme.palette.text.secondary,
            backgroundColor: "#D3D3D3"
        }
    }),
);

export default function GFERequestsummary(props) {
    const classes = useStyles();
    const { summary } = props;

    const SummaryText = props => (
        <div>
            <Typography variant="subtitle2" component="h6" className={classes.card}>
                {props.content}
            </Typography>
        </div>
    )
    const TitleText = props => (
        <div>
            <Typography variant="h6" className={classes.card}>
                {props.content}
            </Typography>
        </div>
    )

    const card = (
        <React.Fragment>
            <CardContent justifyContent="left" className={classes.card}>
                <Grid container>
                    <Grid item xs={6} >
                        <Box sx={{ mb: 2 }}>
                            <TitleText content="Demographics:" class="label" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Patient:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={summary.patientId} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Birthdate:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Gender:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Telephone:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Address:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={summary.addressId} />
                    </Grid>
                </Grid>
                <Box sx={{ my: 2 }}>
                    <Divider />
                    <Divider light />
                </Box>

                <Grid container>
                    <Box sx={{ mb: 2 }}>
                        <TitleText content="Insurance:" class="label" />
                    </Box>
                </Grid>

                {(summary.payorId !== undefined) ?
                    <Grid container>
                        <Grid item xs={6} >
                            <SummaryText content="Payor:" class="label" />
                        </Grid>
                        <Grid item xs={6}>
                            <SummaryText content={summary.payorId} />
                        </Grid>
                    </Grid> : null
                }
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Subscriber ID:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Member ID:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Subscriber Relationship:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Plan:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Coverage Period:" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={"x"} />
                    </Grid>
                </Grid>
            </CardContent>
        </React.Fragment >
    )

    console.log('THIS SHOULD PRINT ADDRESS', summary.addressId)

    return (
        <div>
            <Card variant="outlined">{card}</Card>
        </div>
    )
}




/*
const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            minWidth: 200,
            textAlign: "left",
            marginLeft: 20, 
            color: theme.palette.text.secondary,
            backgroundColor: "#fff"
        }
    }),
);

export default function GFERequestsummary(props) {
    const classes = useStyles();
    const { summary } = props;

    const SummaryText = props => (
        <div>
            <Typography variant="subtitle1" component="h3" className={classes.card}>
                {props.content}
            </Typography>
        </div>
    )

    const card = (
        <React.Fragment>
            <CardContent justifyContent="left" className={classes.card}>
                <Grid container>
                    <Grid item xs={6} >
                        <SummaryText content="Patient" class="label" />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryText content={summary.patientId} />
                    </Grid>
                </Grid>
                {(summary.coverageId !== undefined) ?
                    <Grid container>
                        <Grid item xs={6} >
                            <SummaryText content="Insurance" class="label" />
                        </Grid>
                        <Grid item xs={6} >
                            <SummaryText content={summary.coverageId} />
                        </Grid>
                    </Grid> : null
                }
                {(summary.payorId !== undefined) ?
                    <Grid container>
                        <Grid item xs={6} >
                            <SummaryText content="Payor" class="label" />
                        </Grid>
                        <Grid item xs={6}>
                            <SummaryText content={summary.payorId} />
                        </Grid>
                    </Grid> : null
                }           
            </CardContent>
        </React.Fragment>
    )

    return (
        <div>
            <Card variant="outlined">{card}</Card>
        </div>
    )
}
*/

