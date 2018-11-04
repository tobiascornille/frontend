import React from 'react';
import '../stylesheets/TopBarApp.css'
import { withStyles } from '@material-ui/core/styles';
import {ReactComponent as LogoLong} from "../static/logo_long.svg";
import {ReactComponent as LogoSquare} from "../static/logo_square.svg";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button/Button";

const styles = {
    menuButton: {
        marginLeft: 20,
        marginRight: 20,
    },
};

function TopAppBar(props) {
    const { classes } = props;
    return (
        <div className="TopAppBar">
            {window.innerWidth > 600 ? <LogoLong className="logo" alt="logo"/> : <LogoSquare className="logo" alt="logo"/>}
            <div className="grow"></div>
            <Button variant="outlined" color="primary">Login</Button>
            <IconButton aria-label="Menu" className={classes.menuButton}>
                <MenuIcon color="primary" />
            </IconButton>
        </div>
    );
}

export default withStyles(styles)(TopAppBar);