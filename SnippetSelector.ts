import React, {useState} from 'react';
import SelectorButton from './SelectorButton';

const SnippetSelector = ({films, chooseSnippet}) => {
    const selections = [
        {id: 1, title: 'Film Title'},
        {id: 2, title: 'Description'},
        {id: 3, title: 'Director'}
    ];

    const [whatToType, setWhatToType] = useState(null);

    const chooseWhatToType = (selection) => setWhatToType(selection);

    return (
        <div>
            {!whatToType ?
            <div>
                <h4>What would you like to type?</h4>
                <SelectorButton buttonNames={selections} onSelection={chooseWhatToType}/>
                </div>
           : null }
           {whatToType && films ? 
           <div>
            <h4>Choose One</h4>
            <SelectorButton buttonNames={films} onSelection={chooseSnippet} selectionType={whatToType}/>
            </div>
           : null}

        
        </div>
    )
}

export default SnippetSelector;
