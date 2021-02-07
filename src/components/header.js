import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // position  avatar button  right side
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: "bold",
  },
  toolbar: {
    "&.MuiToolbar-gutters": {
      paddingLeft: "30px",
      // paddingRight: "50px",
    },
  },
  appbar: {
    "&.MuiAppBar-colorPrimary": {
      background: "#00203FFF",
      boxShadow: "none",
      borderBottom: " 0.1px solid black",
    },
  },
  link: {
    "&.MuiTypography-colorPrimary": {
      color: "white",
      textDecoration: "none",
    },
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    maxWidth: "50px",
    height: "auto",
    paddingTop: 5,
    paddingBottom: 5,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            <Link href="/home" color="inherit" underline="none">
              <img className={classes.logo} alt="logo" src="\images\nick.jpg" />
            </Link>
          </Typography>
          <Typography variant="body1" component="h2" className={classes.title}>
            <Link href="/home" color="inherit" underline="none">
              Home
            </Link>
          </Typography>
          <Typography variant="body1" component="h2" className={classes.title}>
            <Link href="/discord" color="inherit" underline="none">
              Restaurant
            </Link>
          </Typography>
          <Typography variant="body1" component="h2" className={classes.title}>
            <Link href="/blog" color="inherit" underline="none">
              How it works
            </Link>
          </Typography>
          <Typography variant="body1" component="h2" className={classes.title}>
            <Link href="/bookmark" color="inherit" underline="none">
              Page
            </Link>
          </Typography>
          <Typography variant="body1" component="h2" className={classes.title}>
            <Link
              onClick={() => window.open("https://www.notion.so/", "_blank")}
              color="inherit"
              underline="none"
            >
              List your restaurant
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
