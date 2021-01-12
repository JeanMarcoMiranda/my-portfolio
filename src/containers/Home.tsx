import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Button } from '@material-ui/core'
import Banner from '../assets/heroImg.jpg'

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 8),
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
    },

    heroButtons: {
        marginTop: theme.spacing(4),
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
                    Mi nimbre es Jean Marco Miranda, estudiante egresado de la carrera de Desarrollo de Software en el instituto técnico superio TECSUP.
                    Me considero un apasionado de la tecnología y mas concretamente del software, debido a que se puede implementar para desarrollar un producto único dentro de cualquier rubro. 
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Leer mas
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                                <a href='https://angelmottam.wixsite.com/aemmetallurgist/perfil-profesional-1' style={{color: '#FFF'}}>
                                    Código fuente
                                </a>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            
        </div>
    )
}

export default HomeComponent