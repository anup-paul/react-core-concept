import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
  const playerNames = ['Sakib-Al-Hasan', 'Ponting', 'Sachin-Tendulker', 'Bond'];

  const productDetails =[
    {name:'photoShope',price:'$89.99'},
    {name:'Illustrator',price:'$89.99'},
    {name:'PDF Reader',price:'$89.99'},
    {name:'Premium Er',price:'$89.99'}
  ]
  // const productNames = productDetails.map(pdc => pdc.name);
// console.log(productNames);

  const friendsName = ['sam', 'pritam', 'Ripon', 'Bhubon'];
  
  const friendsDetails = [
    {name:"Sam" ,profession:"Businessman", address:"Dhaka,Dhanmondi"},
    {name:"pritam" ,profession:"Traveller", address:"Dhaka,Munshigonh"},
    {name:"Ripon" ,profession:"Developer", address:"Dhaka,laxibazar"},
    {name:"Shimanto" ,profession:"Developer", address:"Dhaka,Savar"},
    {name:"Biplop" ,profession:"Businessman", address:"Dhaka,Munshigonhj"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        <h1>Product-List</h1>
        <Products name={productDetails[0].name} price={productDetails[0].price}></Products>
        {/* <Products product= {productDetails[0]}></Products> */}
        <Products  name={productDetails[0].name} price={productDetails[0].price}></Products>
        <Products  name={productDetails[0].name} price={productDetails[0].price}></Products>
        <Products  name={productDetails[0].name} price={productDetails[0].price}></Products>

        <h2>FriendList</h2>
        <ul>
          {
            friendsName.map(frndName => <li>{frndName}</li>)
          }
          <h2>ProductList</h2>
          {
            productDetails.map(prd => <li>{prd.name}</li>)
          }
        </ul>
        <h1>FriendsInformation</h1>

         {
          friendsDetails.map(friendInfo => <FriendsData info = {friendInfo}></FriendsData>)
         }

        <h1>Set Counter</h1>
        <Counter></Counter>

        <Users></Users>
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

function Products(props)
{
  const productsDesign = 
  {
    border: "1px solid gray",
    borderRadius: "2px",
    backgroundColor: "gray",
    height: "250px",
    width: "200px",
    margin:"5px",
  }
  // const {name, price} = props.product
  // console.log(props.product);
  return(
    <div style={productsDesign} >
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      {/* <h1>Name{name}</h1>
      <h2>price{price}</h2> */}
      <button>BuyNow</button>
    </div>
  )
}

function FriendsData(props)
{
  const dataDesign =
  {
    border: "1px solid gray",
    borderRadius: "2px",
    backgroundColor: "gray",
    height: "250px",
    width: "200px",
    margin:"5px",
  }
  const {name, profession, address} = props.info;
  return(
    <div style={dataDesign}>
      <h3>Name: {name}</h3>
      <h4>profession: {profession}</h4>
      <h5>Address: {address}</h5>
    </div>
  )
}

//use state
function Counter()
{
  const [count,setCount] = useState(0);
  // const handleDecrease = () =>
  // {
  //   const value = count-1;
  //   setCount(value)
  // }
  const handleDecrease = () => setCount(count - 1)

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() =>setCount(count +1)}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      {/* mouse move korle value barbe */}
      <button onMouseMove ={() => setCount(count + 1)}>IncreaseByMouseMove</button>  
      <button onMouseMove ={() => setCount(count - 1)}>DecreaseByMouseMove</button> 
    </div>
  )
}

function Users()
{
  const [users, setUsers] = useState([])
  useEffect(() =>
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  
  return(
    <div>
      <h2>DynamicUser: {users.length}</h2>
      {/* {
        console.log(users)
      } */}
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
