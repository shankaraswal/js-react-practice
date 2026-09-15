import React, { useState } from 'react';

const initialStock = {
    like: {
        count: 100,
        disabled: false,
    },
    dislike: {
        count: 50,
        disabled: false,
    },
};

const Coforge = () => {
    const [feedbackCount, setFeedbackCount] = useState(initialStock);

    const handleFeedback = (type) => {
        setFeedbackCount(() => {
            const other = type === 'like' ? 'dislike' : 'like';
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
        <div className="p-5">
            <h1 className="text-2xl font-medium mb-4 text-sky-800!">
                With use of dynamic like and dislike key and their objects creation and state updattion
            </h1>
            <div className='gap-10 flex mt-10 font-bold tracking-widest text-2xl'>
                <button
                    disabled={feedbackCount.like.disabled}
                    onClick={() => handleFeedback('like')}
                    className="px-16 py-6 text-white bg-sky-600 rounded transition-colors w-50 disabled:opacity-60 hover:cursor-pointer disabled:cursor-not-allowed"
                >
                    Like {feedbackCount.like.count}
                </button>

                <button
                    disabled={feedbackCount.dislike.disabled}
                    onClick={() => handleFeedback('dislike')}
                    className="px-16 py-6 text-white bg-sky-600 rounded transition-colors w-50 disabled:opacity-60 hover:cursor-pointer disabled:cursor-not-allowed"
                >
                    Dislike {feedbackCount.dislike.count}
                </button>
            </div>
        </div>
    );
};

export default Coforge;