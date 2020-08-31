import {
  successColor,
  dangerColor,
  warningColor,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const homeStyle = {
  momentumUp: {
    color: successColor[0],
    position: "relative",
    top: "5px",
  },
  momentumDown: {
    color: dangerColor[0],
    position: "relative",
    top: "2px",
  },
  volatilityLow: {
    color: warningColor[0],
    position: "relative",
    top: "4px",
  },
  volatilityVeryLow: {
    color: dangerColor[3],
    position: "relative",
    top: "4px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "3px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "5px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  // cardCategoryWhite: {
  //   color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
  //   margin: "0",
  //   fontSize: "14px",
  //   marginTop: "0",
  //   marginBottom: "0",
  // },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

export default homeStyle;