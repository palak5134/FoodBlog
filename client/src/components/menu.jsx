import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      width: 500,
    },
    
  });

const Menu = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Router>
    <div class="container" className="fixed-bottom">
    <Container className="text-center" maxWidth="sm">
          
      <Grid container spacing={3} className=" fixed-bottom mb-2">
                      
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                     
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} component={NavLink} to={'/'} />
              
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} component={NavLink} to={'/getcontent'} />
                 
        </BottomNavigation>
      </Grid>
        </Container>
      </div>
  </Router>
      </>
  );
}
export default Menu;