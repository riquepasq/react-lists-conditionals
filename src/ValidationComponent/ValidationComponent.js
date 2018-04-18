import React from 'react';

const validationComponent = (props) => {
    const showText = props.textSize > 5 ? 'Text too long!' : 'Text too short!';

    return (
        <div className="Validation">
            <p>{showText}</p>
        </div>
    )
};

export default validationComponent;