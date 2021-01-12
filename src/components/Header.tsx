import { AppBar, Toolbar, Container, Typography, Divider } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
// import HeroImage from '../assets/heroImg.jpg'

const useStyles = makeStyles(theme => ({
    containerStyle: {
        display: 'inline-flex',
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            '& h4': {
                color: '#A18341',
                '&:hover': {
                    color: '#FFF'
                }
            },
            '& h6': {
                padding: '5px 8px',
            },
            '&:hover': {
                color: '#FFF',
                '& h6': {
                    backgroundColor: '#DFB045',
                    border: 1,
                    borderRadius: 3
                }
            }
        },    
    },

    dividerColor: {
        background: '#737E8F'
    },

    tabStyle: {
        margin: 'auto'
    },

    toolBarStyle: {
        backgroundColor: '#333333'
    }
}))

const HeaderComponent: React.FC = () => {
    const classes = useStyles()

    return(
        <AppBar position='relative'>
            <Toolbar className={classes.toolBarStyle}>
                <Container className={classes.containerStyle} maxWidth='md'>
                    <NavLink exact to='/my-portfolio/'>
                        <Typography variant="h4" color="inherit" noWrap>
                            Jean Marco
                        </Typography>
                    </NavLink>
                    <Divider  className={classes.dividerColor} orientation='vertical' flexItem />
                    
                    <NavLink to='/my-portfolio/profile'>
                        <Typography variant="h6" color="inherit" noWrap>
                            Perfil Porfesional
                        </Typography>
                    </NavLink>
                    <Divider  className={classes.dividerColor} orientation='vertical' flexItem />
                    
                    <NavLink to='/my-portfolio/projects'>
                        <Typography variant="h6" color="inherit" noWrap>
                            Proyectos
                        </Typography>
                    </NavLink>
                    <Divider  className={classes.dividerColor} orientation='vertical' flexItem />
                    
                    <NavLink to='/my-portfolio/news'>
                        <Typography variant="h6" color="inherit" noWrap>
                            Noticias
                        </Typography>
                    </NavLink>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderComponent