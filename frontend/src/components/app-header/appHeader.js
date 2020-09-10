import React from 'react'
import useStyles from './styleAppHeader'

const Header = () => {
    const classes = useStyles();
    return (
        <div className= {classes.Header}>To do tasks</div>
    )
}

export default Header;