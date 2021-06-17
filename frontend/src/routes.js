import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import Home from './pages/Home'

import { isAuthenticated } from './services/auth'
import Camera from './pages/Camera'
import Account from './pages/Account'

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props=>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: {from: props.location} }} />
            )
        }
    />
)

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signout" component={SignOut} />
            <Route path="/camera" component={Camera} />
            <PrivateRoute path="/account" component={Account} />
            <PrivateRoute path="/app" component={Home} />
            <Route path="*" component={() => <h1>Page Not Found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes