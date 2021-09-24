import React, { useState, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import Card from '../../components/card';
import { ENTER } from '../../constants/constants';
import { mockAvatarCall } from '../../api/api';

const Homepage = () => {
    const [progress, setProgress] = useState('0');
    const [calculatedProgress, setCalculatedProgress] = useState('0px');
    const [error, setError] = useState(false);
    const [avatars, setAvatars] = useState([]);
    const [avatarLength, setAvatarLength] = useState(0);

    useEffect(() => {
        const results = mockAvatarCall();
        if (results.length > 5) {
            const excessLength = results.length - 5;
            const splicedResults = results.slice(0, 5);
            setAvatars(splicedResults);
            setAvatarLength(excessLength);
        } else {
            setAvatars(results);
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setProgress(e.target.value);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => e.key === ENTER && progressPercentage();

    const progressPercentage = () => {
        const progressValue = parseInt(progress, 10);
        if (Number.isInteger(progressValue) && progressValue >= 0 && progressValue <= 50) {
            const result = (progressValue / 50) * 400;
            setCalculatedProgress(`${result}px`);
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <div>
            <Card
                progress={progress}
                handleChange={handleChange}
                handleKeyPress={handleKeyPress}
                calculatedProgress={calculatedProgress}
                avatars={avatars}
                avatarLength={avatarLength}
                error={error}
            />
        </div>
    );
};

export default Homepage;
