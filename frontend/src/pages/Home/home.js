import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import ImgMediaCard from './news'
import MenuDashBoard from '../templates/MenuDashBoard';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Home = props =>{
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return(
    <>
    <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={3}>
              {/* <Paper className={fixedHeightPaper}>
                {/* <Chart /> 
              </Paper> */}
                <ImgMediaCard 
                  name="Michael Jackson"
                  news="Michael Jackson est?? vivo? Saiba como teorias dizem que sim"
                  urlImage="https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/capa_8.jpg?8dVs_tPGPGyRI.rokYBUJrX9OjphfJvB"
                />
            </Grid>
            <Grid item xs={12} md={8} lg={3}>
              {/* <Paper className={fixedHeightPaper}>
                {/* <Chart /> 
              </Paper> */}
                <ImgMediaCard 
                  name="Anita"
                  news="Anita explode depois de sua nova musica. confira..."
                  urlImage="https://lh3.googleusercontent.com/proxy/bVCb7lnPKT3bQQRgtwEHaqmx-rgnsRw7pAeqyKgaQyEnxcBU-WZVnGHbnSaS1444VEOI4mnboCvvXYB1UM3tENSwkNum4rCMZlpwmK7LuiiN36i5hQfImf_18r1XCg_UGcY"
                />
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={2}>
              {/* <Paper className={fixedHeightPaper}>
                {/* <Deposits /> 
              </Paper> */}
              <ImgMediaCard 
                  name="Problemas na VideoChamada?"
                  news="Aprenda passo a passo a ter a melhor transmiss??o"
                  urlImage="https://www.neoassist.com/wp-content/uploads/2020/04/video-chat-02-1024x683.jpg"
                  height={"69"}
                />
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
                
              </Paper>
              <Link to="/account">Account</Link>
            </Grid>
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
    </>
)
}

export default Home