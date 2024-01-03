import React from 'react';

const SelectorButton = ({ buttonNames, onSelection, selectionType }) => {
    switch (selectionType){
        case 'Film Title':
            return buttonNames.map(buttonName => <button key={buttonName.id} onClick={() => onSelection(buttonName.title)}>{buttonName.title}</button>);
        case 'Description':
            return buttonNames.map(buttonName => <button key={buttonName.id} onClick={() => onSelection(buttonName.description)}>{buttonName.description}</button>);
        case 'Director':
            return buttonNames.map(buttonName => <button key={buttonName.id} onClick={() => onSelection(buttonName.director)}>{buttonName.director}</button>);
        default:
            return buttonNames.map(buttonName => <button key={buttonName.id} onClick={() => onSelection(buttonName.title)}>{buttonName.title}</button>);
    }
}

export default SelectorButton;
