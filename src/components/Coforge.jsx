import React, { useState } from 'react'

const initialStock
    = {
    like: {
        count: 100,
        disabled: false,
    },
    dislike: {
        count: 50,
        disabled: false,
    }
}

const Coforge = () => {
    const [feedbackCount, setFeedbackCount] = useState(initialStock)
    const handleFeedback = (type) => {
        setFeedbackCount(() => {
            const other = type === "like" ? "dislike" : "like";
            return {
                [type]: {
                    count: initialStock[type].count + 1,
                    disabled: true,
                },
                [other]: {
                    count: initialStock[other].count,
                    disabled: false,
                },
            };
        });
    };

    return (
        <div style={styles.main}>
            <h1 style={styles.title}>With use of dynamic like and dislike key and their objects creation and state updattion </h1>
            <button
                style={{ ...styles.button, ...(feedbackCount.like.disabled && styles.disabledButton) }}
                disabled={feedbackCount.like.disabled}
                onClick={() => handleFeedback('like')}
            >Like {feedbackCount.like.count}</button>

            <button
                style={{ ...styles.button, ...(feedbackCount.dislike.disabled && styles.disabledButton) }}
                disabled={feedbackCount.dislike.disabled}
                onClick={() => handleFeedback('dislike')}
            >Dislike {feedbackCount.dislike.count}</button>


        </div >
    )
}

export default Coforge


const styles = {
    main: {
        padding: '20px',
    },
    title: {
        color: '#5C6AC4',

        font:
            'bold 24px Arial',
    },
    button: {
        margin: '10px',
        border: '1px solid red',
        background: 'blue',
        color: 'white',
        padding: '10px 50px'
    },

    disabledButton: {
        border: "1px solid black",
        background: "#eeeeee",
        color: "grey",
    },
};