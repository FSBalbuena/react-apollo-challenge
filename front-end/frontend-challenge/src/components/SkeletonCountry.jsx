import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    card: {
      maxWidth: "80%",
      margin:"10px auto",
    },

  }));

export default ()=>{
    const classes = useStyles();

    return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Skeleton variant="circle" width={40} height={40} />}
        title={<Skeleton height={15} width="30%" />}
        subheader={<Skeleton height={10} width="10%" />}
      />
      <CardContent>
            <Skeleton height={12} width="15%" />
            <Skeleton variant="circle" width={100} height={40} />
      </CardContent>
    </Card>
  );
}
