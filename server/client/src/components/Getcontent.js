import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css'


// import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 445,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));


export default function Getcontent() {
	// const history = useHistory();
	const [username, setUsername] = useState([])
	const callHomePage = async () => {
		try {
			const res = await fetch('/getdata', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			}
			)
			const data = await res.json();
			console.log(data)
			setUsername(data)
		}
		catch (err) {
			console.log(err)

		}
	}
	useEffect(() => {
		callHomePage();
	}, [])

	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
        
		setExpanded(!expanded);
	};
	const card = (val) => {
		return (
			<div className="conatiner">
				<div className="card mb-5">

					<CardHeader

						avatar={
							<Avatar aria-label="recipe" style={{backgroundColor: 
							"#1976d2"}} className={classes.avatar}>
								{val.name.slice(0, 1)}
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={val.name}
						subheader={new Date().toLocaleDateString()}
					/>
					{console.log(val.image)}
					<img src={`./uploads/${val.articleImage}`} className="card-img-top" alt="..." height="350" />
					<div className="card-body">



						<h5 className="card-title">{val.desc}</h5>
						<p className="card-text">{val.brief.slice(0, 100) + "...."}</p>
						<CardActions disableSpacing>

							
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick={handleExpandClick}
								aria-expanded={val._id}
								aria-label={val._id}
								id={val._id}	
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								{val.brief}
							</CardContent>
						</Collapse>
					</div>
				</div>

			</div>



		)
	}

	return (
		<p>{username.map(card)}</p>







	);
}
// export { data };