import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import RedeemIcon from '@material-ui/icons/Redeem';
import StarIcon from '@material-ui/icons/Star';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button
      onClick={()=>alert('Acessando conta')}
    >
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Conta" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Compras" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Galeria" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideoCallIcon />
      </ListItemIcon>
      <ListItemText primary="Camera" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ImportantDevicesIcon />
      </ListItemIcon>
      <ListItemText primary="Estrelas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Presentes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventAvailableIcon />
      </ListItemIcon>
      <ListItemText primary="Eventos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Hist??rico</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Favoritos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="??ltimo V??deo" />
    </ListItem>
  </div>
);