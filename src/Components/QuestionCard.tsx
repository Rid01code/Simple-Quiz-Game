import React from 'react';
import styles from "./Card.module.css"

interface CardProps {
    children?: React.ReactNode;
    className?: string
}

const QuestionCard: React.FC< CardProps > = ({ children , className }) => {
    return (
        <div className={`border-2 rounded-md px-6 py-3 ${styles.QuestionCard} ${className || ''}`}>
            {children}
        </div>
    );
};

export default QuestionCard;
