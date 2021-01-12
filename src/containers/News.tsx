import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    CardActionArea,
    CardActions,
    CardMedia
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    newsContent: {
        backgroundColor: '#515A5A',
        padding: theme.spacing(8, 0, 8),
    },

    anchorButton: {
        color: '#85C1E9',
        display: 'flex',
        borderRadius: 5,
        padding: '5px 9px',
        marginLeft: '5px',
        '&:hover': {
            backgroundColor: '#D6EAF8',
            borderColor: '#EBF5FB',
            boxShadow: 'none',    
        },
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
}))

const NewsComponent: React.FC = () => {
    const classes = useStyles()

    return(
        <div className={classes.newsContent}>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary"    gutterBottom style={{color: '#FFF'}}>
                    Noticias
                </Typography>

                <Grid container spacing={3}>
                    <Grid item sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    //className={classes.projectCardImg}
                                    component="img"
                                    width="35%"
                                    alt="Mapa geolozalizable"
                                    image="https://static.wixstatic.com/media/f97357_a39924a28ffb46998377813518b492b2~mv2.png/v1/fill/w_575,h_425,al_c,q_85,usm_0.66_1.00_0.01/FCC-Article-Cover.webp"
                                />
                                <CardContent style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        How to Get a Job as a Professional Developer in 2021
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        And so far, 2021 has been...also interesting.
                                        We can't control the actions of those around us, we can only control our own. So rather than drowning ourselves in the negative, let's focus on what we can do to improve ourselves, improving the world around us in the process.
                                        It's a New Year - Time to Make Some Changes
                                        And so here we are in 2021 with a new opportunity to do something amazing. I don't know what it is about a new year, but something about that calendar change spurs motivation in people.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                <a 
                                    href='https://www.freecodecamp.org/news/how-to-become-a-professional-developer/'
                                    className={classes.anchorButton} 
                                >
                                    Leer más
                                </a>
                            </CardActions>                 
                        </Card>
                    </Grid>
                    
                    <Grid item sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    //className={classes.projectCardImg}
                                    component="img"
                                    width="35%"
                                    alt="Mapa geolozalizable"
                                    image="https://static.wixstatic.com/media/f97357_5739029b6f92449987feac21e80325ee~mv2.jpg/v1/fill/w_575,h_425,al_c,q_80,usm_0.66_1.00_0.01/html5-css3.webp"
                                />
                                <CardContent style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        CSS Snapshot 2020
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        I think it’s great that the CSS Working Group does these. It’s like planting a flag in the ground saying this is what CSS looks like at this specific point in time. They do specifically say it’s not for us CSS authors though…

                                        ​Remember “CSS3”? That was the closest thing we had to a “snapshot” that was designed for CSS authors (and learners). Because CSS3 was so wildly successful, we saw a short round of enthusiasm for CSS4, me included. There is zero marketing panache on that snapshot page, which is exactly what CSS4 would need to succeed. Remember, HTML5 and friends (including CSS3) even had fancy logos!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                <a 
                                    href='https://css-tricks.com/css-snapshot-2020/'
                                    className={classes.anchorButton} 
                                >
                                    Leer más
                                </a>
                            </CardActions>                 
                        </Card>
                    </Grid>


                    <Grid item sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    //className={classes.projectCardImg}
                                    component="img"
                                    width="35%"
                                    alt="Mapa geolozalizable"
                                    image="https://static.wixstatic.com/media/f97357_9086e48f10244af0971b4fa872bebd31~mv2.jpeg/v1/fill/w_575,h_425,al_c,q_80,usm_0.66_1.00_0.01/phpThumb_generated_thumbnail.webp"
                                />
                                <CardContent style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Pronóstico del análisis de participación y tamaño del mercado
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        El informe de mercado de Engranaje de Diseño de Software ofrece una descripción general detallada del tablero de las compañías líderes que abarca sus estrategias de marketing exitosas, su contribución al mercado y desarrollos recientes en contextos históricos y actuales.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                <a 
                                    href='https://lavanguardianoticias.com/2021/01/11/pronostico-del-analisis-de-participacion-y-tamano-del-mercado-engranaje-de-diseno-de-software-2021-hasta-2025-con-respecto-a-los-competidores-la-demanda-futura-las-regiones-cubiertas-y-las-tendencia/'
                                    className={classes.anchorButton} 
                                >
                                    Leer más
                                </a>
                            </CardActions>                 
                        </Card>
                    </Grid>


                    <Grid item sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    //className={classes.projectCardImg}
                                    component="img"
                                    width="35%"
                                    alt="Mapa geolozalizable"
                                    image="https://static.wixstatic.com/media/f97357_dcef803036ce4e18ac0e44e9f24a45ca~mv2.png/v1/fill/w_531,h_392,al_c,lg_1,q_85/about_page_img1.webp"
                                />
                                <CardContent style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Inicio de registro de Diseño de Software Tamaño del mercado 2021
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        El informe de mercado de Inicio de registro de Diseño de Software centrado en nuestra metodología de investigación única ofrece una evaluación de esto distribuida en secciones. El informe Inicio de registro de Diseño de Software se compone de las principales dimensiones de la industria combinadas con perspectivas prospectivas.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                <a 
                                    href='https://lavanguardianoticias.com/2021/01/11/inicio-de-registro-de-diseno-de-software-tamano-del-mercado-2021-compartir-tacticas-clave-de-la-industria-global-analisis-historico-segmentacion-aplicacion-tecnologia-tendencias-y-pronosticos-de/'
                                    className={classes.anchorButton} 
                                >
                                    Leer más
                                </a>
                            </CardActions>                 
                        </Card>
                    </Grid>


                    <Grid item sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    //className={classes.projectCardImg}
                                    component="img"
                                    width="35%"
                                    alt="Mapa geolozalizable"
                                    image="https://static.wixstatic.com/media/f97357_5236b5109ff643e18362913aeedb0c94~mv2.jpg/v1/fill/w_552,h_408,al_c,lg_1,q_80/2994308ed1adf7bc141fcf1fdd7c1105.webp"
                                />
                                <CardContent style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        5 JavaScript Tools to Look Out For in 2021
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        It’s impossible to keep up with all libraries, frameworks, and techniques, but you can observe trends and directions of movement within the industry. React.js, Vue.js, Svelte, Node.js, and Express.js will remain popular during 2021, but some interesting helper tools are bubbling to the surface.
                                        Here are my top picks for 2021. But please don’t rely on my opinion. Evaluate them for yourself. Node.js is not dead and Deno is yet to take the world by storm, but 2021 will be an interesting year for the runtime.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                <a 
                                    href='https://www.sitepoint.com/javascript-tools-to-look-out-for/'
                                    className={classes.anchorButton} 
                                >
                                    Leer más
                                </a>
                            </CardActions>                 
                        </Card>
                    </Grid>


                    <Grid item sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    //className={classes.projectCardImg}
                                    component="img"
                                    width="35%"
                                    alt="Mapa geolozalizable"
                                    image="https://static.wixstatic.com/media/f97357_a66b869951a649979379a0e8d3bfacf3~mv2.jpg/v1/fill/w_575,h_425,al_c,lg_1,q_80/8.webp"
                                />
                                <CardContent style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Front-End Performance Checklist 2021
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Web performance is a tricky beast, isn’t it? How do we actually know where we stand in terms of performance, and what exactly our performance bottlenecks are? Is it expensive JavaScript, slow web font delivery, heavy images, or sluggish rendering? Have we optimized enough with tree-shaking, scope hoisting, code-splitting, and all the fancy loading patterns with intersection observer, progressive hydration, clients hints, HTTP/3, service workers and — oh my — edge workers? And, most importantly, where do we even start improving performance and how do we establish a performance culture long-term?
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{borderTop: '1px', borderTopColor: '#E5E8E8', borderTopStyle: 'solid'}}>
                                <a 
                                    href='https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/'
                                    className={classes.anchorButton} 
                                >
                                    Leer más
                                </a>
                            </CardActions>                 
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default NewsComponent