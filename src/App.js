import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import List from './components/List';

function App() {
  return (
    <>
      <Card
      name="Judy Panaligan"
      description="This is me."
      />
       <Counter/>
       <List/>
    </>
  )
}

export default App;
