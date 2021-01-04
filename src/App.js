import React,{useEffect,useState} from "react";
import Recipie from "./Recipie"
import"./App.css"
const App=()=>{

  
const APP_ID="74d9b7e3";
const APP_KEY="1da5130d83a401e85f711e5f95ded859";

const [counter,setCounter]= useState(0);
const [recipies,setrecipies]=useState([]);
const [search,setsearch]=useState("");
const [query,setquery]=useState("chicken");

  useEffect(()=>{
   
    getreceipes();
  },[query]) 

    const getreceipes=async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setrecipies(data.hits);
    console.log(data.hits);

  }

  const updateSearch=e=>{
    setsearch(e.target.value);

  }


  const getSearch =e=>{
  e.preventDefault();
  setquery(search);
setsearch("");
  }
 
return(
  <div className="App">
  <form className="search-form" onSubmit={getSearch}>
    <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
    <button type="submit" className="search-button" >Search</button>
  </form>
  <div className="recipies">
  {recipies.map(recipe=>(
    <Recipie 
    key={recipe.recipe.label}  
    title={recipe.recipe.label} 
    calories={recipe.recipe.calories} 
    image={recipe.recipe.image}
    ingredients={recipe.recipe.ingredients}
    />  
  ))}
    </div>
</div>
)
}

export default App;
