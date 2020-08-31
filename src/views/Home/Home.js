import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Warning from "@material-ui/icons/Warning";
import Error from "@material-ui/icons/Error";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/components/homeStyle.js";

const useStyles = makeStyles(styles);

export default () => {
  const classes = useStyles();
  const MomentumUp = () => <ArrowDropUp className={classes.momentumUp} />;
  const MomentumDown = () => <ArrowDropDown className={classes.momentumDown} />;
  const VolatilityLow = () => <Warning className={classes.volatilityLow} />;
  const VolatilityVeryLow = () => (
    <Error className={classes.volatilityVeryLow} />
  );
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Overview</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["Timeframe", "Momentum", "Volatility"]}
              tableData={[
                ["1H", <MomentumUp />, ""],
                ["2H", <MomentumDown />, ""],
                ["3H", <MomentumDown />, ""],
                ["4H", <MomentumDown />, <VolatilityVeryLow />],
                ["6H", <MomentumUp />, <VolatilityVeryLow />],
                ["12H", <MomentumUp />, <VolatilityLow />],
                ["1D", <MomentumUp />, ""],
                ["2D", <MomentumDown />, ""],
                ["3D", <MomentumDown />, <VolatilityVeryLow />],
                ["1W", <MomentumDown />, <VolatilityVeryLow />],
                ["1M", <MomentumUp />, "n/a"],
                ["3M", "n/a", "n/a"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Recent Posts</h4>
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Hello, world!</h4>
            <p className={classes.cardCategory}>
              My name is Maurits. I like coding and trading. Through this app I
              share a piece of my heart and soul.
            </p>
          </CardBody>
          <CardFooter stats>
            <div className={classes.stats}>
              <AccessTime /> 6 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
