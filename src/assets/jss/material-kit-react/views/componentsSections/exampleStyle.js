import { conatinerFluid } from '../../../material-kit-react';

import imagesStyle from '../../../material-kit-react/imagesStyles';

const exampleStyle = {
  section: {
    padding: '70px 0'
  },
  container: {
    ...conatinerFluid,
    textAlign: 'center !important'
  },
  ...imagesStyle,
  link: {
    textDecoration: 'none'
  }
};

export default exampleStyle;
