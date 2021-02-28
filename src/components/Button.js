import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes((buttonSize)
        ? buttonSize
        : SIZES[0]);

        return (
            <Link to={"/sign-up"} className={"btn-mobile"}>
                {/*The children is whatever is between Button tags. */}
                {/* So <Button> Hello </Button> the child that gets rendered and displayed is 'Hello'*/}
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        )
};

