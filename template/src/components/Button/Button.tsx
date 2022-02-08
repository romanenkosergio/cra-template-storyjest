import React, {FC} from 'react';

import IButton from "./Button.type";

import styles from './Button.module.scss';

const Button: FC<IButton> = ({label}) => {

    return (
            <button className={styles.Button}>
                <span className={styles.Button__text}>{label}</span>
            </button>
    );
};

export default Button;
