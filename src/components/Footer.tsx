import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons'


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Jean Marco Miranda
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme => ({
    footer: {
        display: 'inline-flex',
        flexDirection: 'column',
        marginTop: 'auto',
        backgroundColor: '#333333',
        padding: theme.spacing(6),
        '& p': {
            color: '#FFF',
        }
    },

    iconContainer: {
        margin: '15px auto',
        width: '200px',
        display: 'inline-flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    iconColor: {
        backgroundColor: '#FFF',
        
    }
}))

const Footer: React.FC = () => {
    const classes = useStyles()

    return(
        <footer className={classes.footer}>
            <div className={classes.iconContainer}>
                <a href='https://www.linkedin.com/in/jean-marco-miranda-56a5141b5'>
                    <LinkedIn style={{fill: "white"}} fontSize="large"/>
                </a>
                <a href='https://github.com/JeanMarcoMiranda'>
                    <GitHub style={{fill: "white"}} fontSize="large"/>
                </a>
                <a href='https://twitter.com/JeanM40100'>
                    <Twitter style={{fill: "white"}} fontSize="large"/> 
                </a>
            </div>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                La tecnología es el futuro
            </Typography>
            <Copyright />
        </footer>
    )
}

export default Footer