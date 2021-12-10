import React, { useEffect } from "react";
import { makeStyles } from '@mui/styles'
import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppsIcon from "@mui/icons-material/Apps";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const transitionDuration = 1000; //can also use theme.transitions.duration

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: 16
  },
  hide: {
    display: "none"
  },
  appBar: {
    zIndex: 1200 + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    //this will hide the backdrop when varient="temporary"
    "& .MuiBackdrop-root": {
      display: "none"
    }
    //backgroundColor: "rgba(0,0,0,0.6)" Don't target this
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2)"
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: 24,
    // transition: transitions.create("margin", {
    //   easing: transitions.easing.sharp,
    //   duration: transitionDuration
    // }),
    marginLeft: 0
  },
  contentShift: {
    // transition: transitions.create("margin", {
    //   easing: transitions.easing.easeOut,
    //   duration: transitionDuration
    // }),
    marginLeft: drawerWidth
  }
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();
  const greaterThan375 = useMediaQuery("(min-width:375px)");
  const [open, setOpen] = React.useState(greaterThan375);
 


  useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleMenuClick}
            edge="start"
            className={clsx(classes.menuButton, greaterThan375 && classes.hide)}
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive Drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        
        className={classes.drawer}
        variant="temporary"
        //elevation={3} only works with variant="temporary"
        open={open}
        // transitionDuration={{
        //   enter: transitionDuration,
        //   exit: transitionDuration
        // }}
        classes={{
          paper: classes.drawerPaper
        }}
        PaperProps={{ elevation: 9 }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          <ListItem button>
						<Link to='/'>
							<ListItemText primary='Home' />
						</Link>
					</ListItem>
					<ListItem button>
						<Link
							to={{
								pathname: '/usmap',
								// search: "?color=red",
								// state: { count: count }
							}}
						>
							<ListItemText primary='Map' />
						</Link>
					</ListItem>
					<ListItem button>
						<Link
							to='/counties'
							//  ref={ref}
						>
							<ListItemText primary='Counties' />
						</Link>
					</ListItem>
          </List>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Toolbar />
        <Typography>
          Resize the screen above/below 375px to see responsiveness
        </Typography>
      </main>
    </div>
  );
}
