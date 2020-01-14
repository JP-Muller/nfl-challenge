import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Auth/Login'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
    </Switch>

)