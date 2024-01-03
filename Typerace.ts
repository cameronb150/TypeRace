import React, {useState, useEffect} from 'react';
import SnippetSelector from './SnippetSelector';



const App = () =>  {
    const buttonTextItems = [
        'Bears, beets, battlestar galactica',
        "What's Forrest Gump's password? 1forrest1",
        "Where do programmers like to hang our? The Foo Bar"
      ];
      
      const initialGameState = {
          victory : false,
          startTime: null,
          endTime : null
      }
  
  const [hasError,setHasError] = useState(false);
  const [userText, setUserText] = useState('');
  const [snippet, setSnippet] = useState('');
  const [gameState, setGameState] = useState(initialGameState);
  const [wins,setWins] = useState(null);
  const [films, setFilms] = useState([]);

  const updateUserText = event => {
    setUserText(event.target.value);

    if(event.target.value === snippet){
        setGameState({
            ...gameState,
            victory: true,
            endTime: new Date().getTime() - gameState.startTime

        });
    }
    console.log(`updating user text to ${event.target.value}`);
  };

  const chooseSnippet = selectedSnippet => {
    console.log('Choose snippet!');
    console.log(selectedSnippet)
    setSnippet(selectedSnippet);
    setGameState({...gameState, startTime: new Date().getTime()});

  }
  const fetchData = async () => {
    let response = await fetch("https://ghibliapi.vercel.app/films?limit=3")
    response
    
    console.log('Attained films');
    console.log(response);
    response = [
      {
        title: 'Castle in the Sky',
        description:"The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director:"Hayao Miyazaki"
      },
      {
        title:'Grave of the Firefiles',
        description:"In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
        director:"Isao Takahata"
      },
      {
        title: 'My neighbor Totoro',
        description: "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        director:"Hayao Miyazaki"
      }
    ]
    setFilms(response);
  }


  useEffect(() => {
    if(gameState.victory){
    document.title = 'Victory!';
    }
    // setWins(wins + 1);


  });

  useEffect(() => {
    fetchData();
  }, []);
  


  
  return (
   <div>
     <h2>TypeRace</h2>
     <hr/>
     <h3>Snippet</h3>
     <div>{snippet}</div>
     <h4>{gameState.victory ? `Done! Woot! Time: ${gameState.endTime}ms` : null}</h4>
     <input onChange={updateUserText} value={userText} />
     <hr />
     
     {
     buttonTextItems.map((textItem, index) => <button onClick = {() => chooseSnippet(index)} >{textItem}</button>)
     }

    <SnippetSelector
    films={films}
    chooseSnippet={chooseSnippet}
    />
     
          
  </div>
  );
};

export default App;
