import React from 'react';
import styles from "./Card.module.css"

interface CardProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void
    AnswerIsSelected: boolean;
}

const AnswerCard: React.FC<CardProps> = ({ children , className , onClick , AnswerIsSelected }) => {
    return (
        <div
            onClick={onClick}
            className={`border-2 rounded-md ${AnswerIsSelected ? styles.AnsLock : styles.AnsCard} ${className || ''}`}
            >
            {children}
        </div>
    );
};

export default AnswerCard;
