import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Button } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
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
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Acerca de mi
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
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
                            <Button variant="outlined" color="primary">
                                <a href='https://angelmottam.wixsite.com/aemmetallurgist/perfil-profesional-1'>
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