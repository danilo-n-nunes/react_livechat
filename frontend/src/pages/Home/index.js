import { AppBar, Badge, IconButton, Typography } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react'
import {Link} from 'react-router-dom'

const Home = props =>{
    
    return(
        <div>
            <AppBar style={{paddingLeft: 10}} position="relative" >
                <Typography component="h1" variant="h6" color="inherit" noWrap style={{flexGrow: 1}}>
                    <h3>Dashboard</h3>
                </Typography>
                {/*<IconButton color="inherit">
                    <Badge badgeContent={7} color="secondary" style={{display: "flex",flexDirection: "row-reverse",float: "right",position: "absolute"}}>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>*/}
            </AppBar>
            <div style={{marginLeft: 10}}>
                
                <h2>Home</h2>
                <Link to="/camera">Camera</Link>
                <br/>
                <Link to="/signout">Sair</Link>
            </div>
        </div>
    )
}
export default Home