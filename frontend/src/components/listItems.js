import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import StarIcon from '@material-ui/icons/Star';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { DataContext } from '../contexts/auth';
import { Redirect, useHistory } from 'react-router-dom';

export const MainListItems = props =>{
  const history = useHistory()
  const context = useContext(DataContext)
return(
  <div>
    <ListItem button
      onClick={()=>history.push("/app")}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button
      onClick={()=>history.push("/account")}
    >
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Conta" />
    </ListItem>
    <ListItem button
      onClick={()=>console.log(context.user)}
    >
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
    <ListItem button
      onClick={()=>history.push("/camera")}
    >
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
}

export const SecondaryListItems = props => (
  <div>
    <ListSubheader inset>Histórico</ListSubheader>
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
      <ListItemText primary="Último Vídeo" />
    </ListItem>
  </div>
);