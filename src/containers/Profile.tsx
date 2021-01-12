import React from 'react'
import { Container, Typography, Grid, Divider, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { 
    EmojiObjectsOutlined, 
    AssistantPhotoOutlined, 
    StarBorderOutlined,
    AssignmentOutlined,
    YouTube
} from '@material-ui/icons'
import programmingImg from '../assets/heroImg2.jpg'


const useStyles = makeStyles(theme => ({
    profileDescription: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        backgroundImage: `url(${programmingImg})`,
        backgroundSize: 'cover'
    },

    profileContent: {
        backgroundColor: '#FAFAFA',
        padding: theme.spacing(5, 0, 8),
    },

    prueba: {
        border: 1,
        borderColor: '#000'
    },

    cardContainer: {
        display: 'flex',
    },

    cardIconSection: {
        display: 'flex',
        flexDirection: 'column',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 40px'
    },

    anchorButton: {
        color: '#fff',
        display: 'flex',
        border: '0 solid #000',
        borderRadius: 8,
        padding: '10px 15px',
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',    
        },
    },
    
    listStyle: {
        listStyleType: 'none', 
        padding: '0 15px',
        '& li':{
            marginBottom: '10px'
        },
    },
}))


const ProfileComponent: React.FC = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.profileDescription}>
                <Container maxWidth="sm" >
                    <Typography component="h2" variant="h2" align="center" gutterBottom style={{color: '#fff'}}>
                        Perfil Profesional
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" style={{color: '#fff'}} paragraph>
                        Me considero una persona seria, responsable con muchas ganas de aprender y adquirir experiencia laboral, con la capacidad de adaptarme a cualquier entorno, ademas de ser una persona practica que trata de encontrar siempre una solución simple a cualquier problema y con mucha curiosidad siempre de querer aprender algo nuevo. 
                    </Typography>
                </Container>
            </div>

            <div className={classes.profileContent}>
                <Container maxWidth="md">
                    <Typography component="h3" variant="h4" color="textPrimary" gutterBottom>
                        Caracteristicas Profesionales
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={8}>
                            <Typography component="h4" variant="h5" color="textPrimary" gutterBottom>
                                Perfil 
                            </Typography>
                            <Grid container direction='column' spacing={2}>
                                <Grid item>
                                    <Card className={classes.cardContainer}>
                                        <div className={classes.cardIconSection} style={{backgroundColor: '#F4D03F'}}>
                                            <EmojiObjectsOutlined style={{fill: "white"}} fontSize="large"/>
                                        </div>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Competencias
                                            </Typography>
                                            <ul>
                                                <li>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Trabajo en equipo
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Puntualidad
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Creatividad
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Programas Informaticos:
                                                    </Typography>
                                                    <ul>
                                                        <li>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                Jira
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                React
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                Vue
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                Flutter
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                Kotlin
                                                            </Typography>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </CardContent>                                      
                                    </Card>
                                </Grid>

                                <Grid item>
                                    <Card className={classes.cardContainer}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Objetivo Profesional
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Mi objetivo es el de poder desenvolverme de la mejor manera colaborando en un proyecto real, el cual pueda desenpeñar todo lo que he podido aprender hasta el momento, además de nutrirme del equipo de trabajo con el que tenga que colaborar, de esta manera poder demostrar mis capacidades
                                            </Typography>
                                        </CardContent>                      
                                        <div className={classes.cardIconSection} style={{backgroundColor: '#39729B'}}>
                                            <AssistantPhotoOutlined style={{fill: "white"}} fontSize="large"/>
                                        </div>                
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card className={classes.cardContainer}>
                                        <div className={classes.cardIconSection} style={{backgroundColor: '#58D68D'}}>
                                            <StarBorderOutlined style={{fill: "white"}} fontSize="large"/>
                                        </div>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Logros
                                            </Typography>
                                            <ul>
                                                <li>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        He podido alcanzar el nivel avanzado de ingles gracias a la escuela Conversa.
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Conocimientos basicos en el manejo de proyecto con metodologias ágiles.
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Curso basico de manejo de servidores en la nube
                                                    </Typography>
                                                </li>
                                            </ul>
                                        </CardContent>                                      
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Divider variant='middle' orientation='vertical' flexItem />

                        <Grid item sm={3}>
                            <Typography  component="h4" variant="h5" align='center' color="textPrimary" gutterBottom>
                                Información Extra
                            </Typography>
                            <ul className={classes.listStyle}>
                                <li>
                                    Teléfono Móvil: 
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        978583601
                                    </Typography>
                                </li>
                                <li>
                                    Correo Electrónico:
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        elecord2014@gmail.com
                                    </Typography>
                                </li>
                            </ul>
                            <Grid container direction='column' spacing={4} alignItems='center'>
                                <Grid item>
                                    <a 
                                        href='#'
                                        className={classes.anchorButton} 
                                        style={{backgroundColor: '#F2BF5E'}}
                                    >
                                        <AssignmentOutlined style={{fill: "white"}}/>
                                        <Divider variant='middle' orientation='vertical' flexItem />
                                        Curriculum Vitae
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a 
                                        href='https://www.youtube.com/watch?v=USwcMWwjWeo'
                                        className={classes.anchorButton} 
                                        style={{backgroundColor: '#FF6161'}}
                                    >
                                        <YouTube style={{fill: "white"}}/>
                                        <Divider variant='middle' orientation='vertical' flexItem />
                                        VideoCurriculum
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default ProfileComponent