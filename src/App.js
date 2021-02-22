import logo from './logo.svg';
import './App.css';

function App() {
  var person =
  {
    name:"Pink Floyel",
    job:"Singer"
  }
  var person2 = 
  {
    name:"Anup",
    job:"Web Developer"
  }
  var design=
  {
    color : "black",
    backgroundColor : "white"
  }
  const playerNames = ['Sakib-Al-Hasan', 'Ponting', 'Sachin-Tendulker', 'Bond']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Try to edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h2 style = {design}>Rock-Band: {person.name+" "+person.job}</h2>
        <h3 style = {{backgroundColor:"black",color:"white"}}>My name is {person2.name+" and I am a "+person2.job}</h3>
        <p>sum{5+8*9}</p>
        <h1>Cricket Player List</h1>
        <Player name= {playerNames[0]} country= "Bangladesh"></Player>
        <Player name= {playerNames[1]} country= "Australia"></Player>
        <Player name= {playerNames[2]} country= "India"></Player>
        <Player name= {playerNames[3]} country= "New Zealand"></Player>
        <h1>Developers List</h1>
        <Developer name = "Anup" profession = "Web" ></Developer>
        <Developer name = "Sam" profession = "Software"></Developer>
        <Developer name = "Ripon" profession = "Web"></Developer>
        <Developer name = "Shovon" profession = "Software"></Developer>
        <Developer name = "Paul" profession = "Web"></Developer>
      </header>
    </div>
  );
}

function Player(props)
{
  const design = 
  {
    border: "3px solid black",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px"
  }
  return (
    <div style={design}>
      <h1>Name: {props.name}</h1>
      <h2>Player of {props.country}</h2>
    </div>
  );
}

function Developer(values)
{
  const design = 
  {
    backgroundColor:"white",
    color:"steelblue",
    border:"2px solid white", 
    borderRadius: "5px",
    margin:"10px",
    padding:"10px",
    width:"400px"
  }
  return(
    <div style = {design}>
      <h2>My name is {values.name}</h2>
      <h3>I am a {values.profession} developer</h3>
    </div>
  )
}

export default App;
