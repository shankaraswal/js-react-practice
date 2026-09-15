import React, { useState } from 'react';

function Coforge1() {
  const [feedback, setFeedback] = useState({
    like: {
      count: 100,
      disabled: false,
    },
    dislike: {
      count: 25,
      disabled: false,
    },
  });

  const handleFeedbackCount = (ftype) => {
    setFeedback((prev) => {
      if (ftype === 'like') {
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

  return (
    <div className="p-5">
      <h1 className="text-2xl font-medium mb-4 text-amber-800!">
        With use of setFeedback(prev).... state
      </h1>

      <div className="gap-10 flex mt-10 font-bold tracking-widest text-2xl">
        <button
          onClick={() => handleFeedbackCount('like')}
          disabled={feedback.like.disabled}
          className="px-16 py-6 text-white bg-amber-600 rounded transition-colors w-50 disabled:opacity-60 hover:cursor-pointer disabled:cursor-not-allowed"
        >
          Like {feedback.like.count}
        </button>

        <button
          onClick={() => handleFeedbackCount('dislike')}
          disabled={feedback.dislike.disabled}
          className="px-16 py-6 text-white bg-amber-600 rounded transition-colors w-50 disabled:opacity-60 hover:cursor-pointer disabled:cursor-not-allowed"
        >
          Dislike {feedback.dislike.count}
        </button>
      </div>
    </div>
  );
}

export default Coforge1;