import React from 'react'
import Routes from './routes'

import MainContext from './contexts/auth';

const App = () =>
<MainContext>
    <Routes />
</MainContext>

export default App;
