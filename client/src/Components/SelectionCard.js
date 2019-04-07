import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,

    },
    media: {
        height: 140,
    },
};

const SelectionCard = props => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">
                        Points: {props.points}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={props.addHandler}>
                    Add
                </Button>
            </CardActions>
        </Card>
    );
};

SelectionCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    points: PropTypes.number,
    image: PropTypes.string,
    addHandler: PropTypes.func,

};

export default withStyles(styles)(SelectionCard);