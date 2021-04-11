import Challenges from './components/Challenges'

const challenges = [
  {
    title: 'Challenge 1',
    description: 'this is the first challenge, this is just a random text'
  },
  {
    title: 'Challenge 2',
    description: 'additional random text'
  }
]

function App() {
  return (
    <div>
      <h1>Tries One</h1>
        <Challenges listOfChallenges={challenges}/>
    </div>
  );
}

export default App;
