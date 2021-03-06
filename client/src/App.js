import React, { useEffect }from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import { useDispatch } from "react-redux";


import { getPosts } from './actions/posts.js';
import Posts from './components/posts/posts.js';
import Form from './components/form/form.js';
import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar ClassName={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img ClassName={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container >
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;