import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import Banner from '../assets/heroImg.jpg'

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 9),
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
    },

    heroButtons: {
        marginTop: theme.spacing(4),
    },

    anchorButton: {
        color: '#FFF',
        display: 'flex',
        borderRadius: 5,
        padding: '8px 15px',
        marginLeft: '5px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
}))

const HomeComponent: React.FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{color: '#FFF'}}>
                    Acerca de mi
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph style={{color: '#FFF'}}>
                    Mi nombre es Jean Marco Miranda, estudiante egresado de la carrera de Desarrollo de Software en el instituto técnico superio TECSUP.
                    Me considero un apasionado de la tecnología y mas concretamente del software, debido a que se puede implementar para desarrollar un producto único dentro de cualquier rubro. 
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <NavLink to="/my-portfolio/profile" className={classes.anchorButton} style={{backgroundColor: '#4150B3'}}>
                                Leer más
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <a 
                                href='https://github.com/JeanMarcoMiranda/my-portfolio'
                                className={classes.anchorButton}
                                style={{backgroundColor: '#FD0053'}}
                            >
                                CÓDIGO FUENTE   
                            </a>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            
        </div>
    )
}

export default HomeComponent