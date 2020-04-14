import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{ 
    if(!confirmed){
        return 'Loading..';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography variant="h4" className={styles.gradientTextOrange} gutterBottom>Infected</Typography>
                    <Typography variant="h4" className={styles.gradientTextBlue}>
                        <CountUp start={0} end={confirmed.value}  duration={2} separator=","/>
                        </Typography>
                    <Typography className={styles.gradientTextOrange}>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography  variant="BODY2">Number of active cases of COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography variant="h4" className={styles.gradientTextGreen} gutterBottom>Recovered</Typography>
                    <Typography className={styles.gradientTextBlue}variant="h4"><CountUp start={0} end={recovered.value}  duration={2} separator=","/></Typography>
                    <Typography className={styles.gradientTextGreen}>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="BODY2">Number of Recoveries cases of COVID-19</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography variant="h4" className={styles.gradientTextRed} gutterBottom>Deaths</Typography>
                    <Typography className={styles.gradientTextBlue} variant="h4"><CountUp start={0} end={deaths.value}  duration={2} separator=","/></Typography>
                    <Typography className={styles.gradientTextRed}>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="BODY2">Number of Deaths caused by COVID-19</Typography>
                </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;