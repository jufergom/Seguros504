import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
import Button from '../../../components/CustomButtons/Button.js';
import Card from '../../../components/Card/Card.js';
import CardBody from '../../../components/Card/CardBody.js';
import CardFooter from '../../../components/Card/CardFooter.js';

import styles from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle';
// import styles from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.js';

import team1 from '../../../assets/img/faces/testimonio1.jpeg';
import team2 from '../../../assets/img/faces/testimonio2.jpeg';
import team3 from '../../../assets/img/faces/testimonio3.jpeg';

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Testimonios</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Darwin Luque
                <br />
                <small className={classes.smallTitle}>Estudiante</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  "Se me hizo muy amigable la plataforma, facil de usar."
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Billy Alcerro
                <br />
                <small className={classes.smallTitle}>Profesion</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  "Contiene la informacion necesaria, bien concisa."
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-linkedin'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Leonora Madrigal
                <br />
                <small className={classes.smallTitle}>Profesion</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  "Estan todos los beneficios de todas las compañias"
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
