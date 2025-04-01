'use client';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularProgress({ value, maxValue, text, color }) {
    return (
        <CircularProgressbar
            value={value}
            maxValue={maxValue}
            text={text}
            styles={buildStyles({
                textSize: '32px',
                pathColor: color,
                textColor: color,
            })}
        />
    );
}