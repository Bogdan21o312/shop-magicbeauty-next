import React, {useEffect, useState} from "react";
import classes from "./Timer.module.scss"

interface TimeState {
    hoursTens: number;
    hoursOnes: number;
    minutesTens: number;
    minutesOnes: number;
    secondsTens: number;
    secondsOnes: number;
}

export const Timer: React.FC = () => {
    const [time, setTime] = useState<TimeState>({
        hoursTens: 2,
        hoursOnes: 4,
        minutesTens: 0,
        minutesOnes: 0,
        secondsTens: 0,
        secondsOnes: 0,
    });

    useEffect(() => {
        const countToDate = new Date();
        countToDate.setHours(countToDate.getHours() + 24);

        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeBetweenDates = Math.ceil(
                (countToDate.getTime() - currentDate.getTime()) / 1000
            );

            const seconds = timeBetweenDates % 60;
            const minutes = Math.floor(timeBetweenDates / 60) % 60;
            const hours = Math.floor(timeBetweenDates / 3600);

            setTime({
                hoursTens: Math.floor(hours / 10),
                hoursOnes: hours % 10,
                minutesTens: Math.floor(minutes / 10),
                minutesOnes: minutes % 10,
                secondsTens: Math.floor(seconds / 10),
                secondsOnes: seconds % 10,
            });
        }, 250);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <>
            <div className={classes.container}>
                <div className={classes.containerSegment}>
                    <div className={classes.segmentTitle}>Hours</div>
                    <div className={classes.segment}>
                        <div className={classes.flipCard}>
                            <div className={classes.top}>{time.hoursTens}</div>
                            <div className={classes.bottom}>{time.hoursTens}</div>
                        </div>
                        <div className={classes.flipCard}>
                            <div className={classes.top}>{time.hoursOnes}</div>
                            <div className={classes.bottom}>{time.hoursOnes}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.containerSegment}>
                    <div className={classes.segmentTitle}>Minutes</div>
                    <div className={classes.segment}>
                        <div className={classes.flipCard}>
                            <div className={classes.top}>{time.minutesTens}</div>
                            <div className={classes.bottom}>{time.minutesTens}</div>
                        </div>
                        <div className={classes.flipCard}>
                            <div className={classes.top}>{time.minutesOnes}</div>
                            <div className={classes.bottom}>{time.minutesOnes}</div>
                        </div>
                    </div>
                </div>
                <div className={classes.containerSegment}>
                    <div className={classes.segmentTitle}>Seconds</div>
                    <div className={classes.segment}>
                        <div className={classes.flipCard}>
                            <div className={classes.top}>{time.secondsTens}</div>
                            <div className={classes.bottom}>{time.secondsTens}</div>
                        </div>
                        <div className={classes.flipCard}>
                            <div className={classes.top}>{time.secondsOnes}</div>
                            <div className={classes.bottom}>{time.secondsOnes}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
