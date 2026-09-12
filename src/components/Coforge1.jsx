import React, { useState } from 'react';

function Coforge() {
  const [feedback, setFeedback] = useState({
    like: {
      count: 100,
      disabled: false
    },
    dislike: {
      count: 25,
      disabled: false
    },
  })

  const handleFeedbackCount = (ftype) => {
    setFeedback((prev) => {
      if (ftype === "like") {
        return {
          like: {
            count: prev.like.count + 1,
            disabled: true,
          },
          dislike: {
            count: prev.dislike.count - 1,
            disabled: false,
          },
        };
      }

      return {
        like: {
          count: prev.like.count - 1,
          disabled: false,
        },
        dislike: {
          count: prev.dislike.count + 1,
          disabled: true,
        },
      };
    });
  };

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

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>With use of    setFeedback(prev).... state</h1>
      <div>
        <button
          style={{
            ...styles.button,
            ...(feedback.like.disabled ? styles.disabledButton : {}),
          }}
          onClick={() => handleFeedbackCount('like')}
          disabled={feedback.like.disabled}>
          Like {feedback.like.count}
        </button>
        <button
          style={{
            ...styles.button,
            ...(feedback.dislike.disabled ? styles.disabledButton : {}),
          }}
          onClick={() => handleFeedbackCount('dislike')}
          disabled={feedback.dislike.disabled}>
          Dislike {feedback.dislike.count}
        </button>
      </div>
    </div>
  )
}

export default Coforge
