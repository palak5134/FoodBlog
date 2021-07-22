import React from "react";
import Content from './components/Content';
import GetContent from './components/Getcontent';
import { BottomNavigation } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BackupIcon from '@material-ui/icons/Backup';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import {
	BrowserRouter as Router,
	Switch, NavLink, Link,
	Route,
  } from "react-router-dom";

  
function App() {
	const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = React.useState(pathname);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
	
  	
	return (
		<>
			<div className="container bg-white header">
				<div className="row">
					<div className="col-4 my-auto">
						<h3>F<span className="h-logo">oo</span>die</h3>
					</div>
					<div className="col-4"></div>
					<div className="col-4 my-3">
						<img src="./images/logo.png" className="float-end" alt="logo" />
					</div>
				</div>
			</div>
			
			<Router>
			<Switch>
				<Route exact path="/" component={Content}>
					{/* <Content/> */}
				</Route>
				<Route path="/getcontent" component={GetContent}>
				{/* <GetContent/> */}
				</Route>
				</Switch>	
				{/* <Link to="/">Home</Link>
				<Link to="/getcontent">Posts</Link> */}

				<div className="container-fluid px-0 fixed-bottom" style={{height:"50px"}}>
					<BottomNavigation
						showLabels
						value={value}>

						<BottomNavigationAction  label="Upload" component={NavLink} to={"/"} value="Upload" icon={<BackupIcon />} />
						<BottomNavigationAction label="Content" component={NavLink} to={"/getcontent"} value="/getcontent" icon={<ViewStreamIcon />} />
						
					</BottomNavigation>	 
				               
			
				</div>


			</Router>
			
		</>
	);
}

export default App;
