import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, Container, Grid, CardContent, CardMedia, Typography } from '@material-ui/core'
 

const useStyles = makeStyles(theme => ({
    projectsContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0, 6),
    },

    projectCard: {
        display: 'flex'
    },

    projectCardImg: {
        width: 250,
        height: 250
    }
}))

const ProjectsPage: React.FC = () => {
    const classes = useStyles()

    return(
        <div className={classes.projectsContent}>
            <Typography variant="h2" color="textPrimary" component="p" align='center' style={{marginBottom: 20, textDecoration: 'underline'}}>
                Proyectos
            </Typography>
            <Container maxWidth='md'>
                <Grid container spacing={3} direction='column' alignItems='center'>
                    <Grid item sm={10}>
                        <Card className={classes.projectCard}>
                            <CardMedia
                                className={classes.projectCardImg}
                                component="img"
                                width="35%"
                                alt="Mapa geolozalizable"
                                image="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_Petroperu_vertical_negativo.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Aplicación web de Geolocalización
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Esta aplicacion fue diseñada para la empresa Petroperu, la cual solicitaba el poder visualizar la ubicacion de todos sus vehiculos dentro un un mapa mediante el cual pudiera administrarlos, saber la ruta se debian seguir, el tiempo estimado para alcanzar su destino y los puntos de salida y llegado de cada vehiculo. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={10}>
                        <Card className={classes.projectCard}>
                            <CardMedia
                                className={classes.projectCardImg}
                                component="img"
                                width="35%"
                                alt="Mapa geolozalizable"
                                image="https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-716.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Chat en tiempo real
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Desarrollo de una aplicacion de chat realizada con las tecnologías React, Node.js, Socket.io. Mediante estas herramientas se logró implementar la interacción constante con un servidor, el cual actualizar un estado de manera constante, este es enviado a la parte del front-end y segun el valor que tenga en ese momento, ayudará a saber que es lo que se tendrá que renderizar en pantalla.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={10}>
                        <Card className={classes.projectCard}>
                            <CardMedia
                                className={classes.projectCardImg}
                                component="img"
                                width="35%"
                                alt="Mapa geolozalizable"
                                image="https://partners.telefonica.com/images/partners/bc95b1c2-b49f-e711-8114-e0071b650211.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Aplicación móvil para la administración de vehiculos
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Esta aplicacion fue realizada en el lenguaje Kotlin para dispositivos Android nativos, medainte esta, la empresa GoldCar pretendia visualizar la data extraida de la base de datos que genereban sus vehiculos, de tal manera que con esta pudirá visualizar dentro del dispositivo movil el tiempo de salida y llegada de un vehiculo a su destino, de tal manera que segun si este legó retrasado o no, se visualizará un mensaje de un color especifico segun el estado de llegada.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )  
}

export default ProjectsPage