import { Button, Grid, Link, makeStyles, Paper, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { DataContext } from '../../contexts/auth'

const useStyles = makeStyles((theme)=>({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      }
}))
const Account = props =>{
    const classes = useStyles()
    const context = useContext(DataContext)
    const [state, setState] = useState(null)
    const [values, setValues] = useState(context.user)
    console.log(context)
    return(
        <>
            <Grid container spacing={3}
                direction="row"
                justify="center"
            > 
                <Paper style={{padding: 10}}>
                    <Grid item xs={8}
                        justify="center"
                    >
                        <form className={classes.form}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={e=>setValues({...values,email:e.target.value})}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Nome"
                                name="name"
                                autoComplete="name"
                                value={values.name}
                                onChange={e=>setValues({...values,name:e.target.value})}
                                autoFocus
                            />
                            <Link to="/app">
                                <Button variant="contained">Alterar</Button>
                            </Link>
                            
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}
export default Account