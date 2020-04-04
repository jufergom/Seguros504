// import React, { component, Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Visibility from '@material-ui/icons/Visibility';
// import Grid from '@material-ui/core/Grid';

// export default class ViewInsurances extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { insuranceList: [] };
//   }

//   componentDidMount() {
//     axios
//       .get('http://localhost:5000/insurance')
//       .then(response => {
//         this.setState({ insuranceList: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <Grid container spacing={2}>
//         {this.state.insuranceList.map(insurance => {
//           return (
//             <Grid item xs={12} md={3} zeroMinWidth>
//               <Card key={insurance._id} className={classes.paper}>
//                 <CardHeader title={insurance.name} />

//                 {/* <CardMedia
//                   className={classes.media}
//                   image={`${BASE_IMG_URL + recipe.image}`}
//                   title={recipe.title}
//                 /> */}
//                 <CardContent>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     {insurance.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     );
//   }
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';

const BASE_IMG_URL = 'https://spoonacular.com/recipeImages/';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  },
  paper: {
    padding: theme.spacing(3, 2),
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  }
}));

export default function ViewInsurances(props) {
  let [insuranceList, setInsuranceList] = React.useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/insurance')
      .then(response => {
        // this.setState({ insuranceList: response.data });
        setInsuranceList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {insuranceList.map(insurance => {
        return (
          <Grid item xs={12} md={3} zeroMinWidth>
            <Card key={insurance.id} className={classes.paper}>
              <CardHeader title={insurance.name} />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {insurance.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
