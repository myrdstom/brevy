import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
import logo from '../../assets/G.png';
import './card.scss';

interface Avatar {
    avatarUrl: string;
}

interface Card {
    progress: string;
    calculatedProgress: string;
    avatars: Avatar[] | [];
    error: boolean;
    avatarLength: number;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Card: FC<Card> = ({
    progress,
    calculatedProgress,
    avatars,
    avatarLength,
    handleChange,
    handleKeyPress,
    error
}) => {
    return (
        <div className="card">
            <div className="container">
                <div className="logo">
                    <div className="logo__container">
                        <img className="logo__img" src={logo} alt="Google Logo" />
                    </div>
                    <div className="logo__details">
                        <span className="logo__title">Google</span>
                        <span className="logo__desc">Google inc.</span>
                    </div>
                </div>
                <div className="progressButton">
                    <button className="progressButton__select" type="submit">
                        Select Progress
                    </button>
                    <></>
                    <button className="progressButton__high" type="submit">
                        High
                    </button>
                </div>
                <div className="progress__task">
                    Task Done:
                    <input
                        type="text"
                        className="progress__input"
                        name="progress"
                        value={progress}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        id="username"
                        required
                    />{' '}
                    / 50
                    {error ? <div className="progress__error">Error: please review the provided value</div> : null}
                </div>
                <div className="progress__bar">
                    <div className="progress__done" data-done="50" style={{ width: `${calculatedProgress}` }} />
                </div>
                <div className="ios">
                    <button className="ios__button" type="submit">
                        IOS APP
                    </button>
                </div>
                <div className="avatar__group">
                    {avatars.map(avatar => (
                        <div className="avatar__img">
                            <img className="avatar_icon" src={avatar.avatarUrl} alt="Google Logo" />{' '}
                        </div>
                    ))}
                    {avatarLength > 0 ? <span className="avatar__hidden"> +{avatarLength}</span> : null}
                </div>
            </div>
        </div>
    );
};

export default Card;
