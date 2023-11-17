/*import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
let data = [
  {
     restaurentName : "krithuga", 
     cuisines:"indian,italian ",
      rating: "5stars" ,
      imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTSdIJUW-EKivCOoegUkCeJF3fZVcfaWRDQ9LSvzLIwyv5X1Zy3JoDASEYXiNmao3rRw&usqp=CAU",
    },
    {
      restaurentName: "shdab",
      cuisines:"indian,chinese" ,
      rating: "4stars" ,
      imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTSdIJUW-EKivCOoegUkCeJF3fZVcfaWRDQ9LSvzLIwyv5X1Zy3JoDASEYXiNmao3rRw&usqp=CAU",
    },
    {
      restaurentName: "dawath",
      cuisines:"indian " ,
      rating: "5stars" ,
      imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTSdIJUW-EKivCOoegUkCeJF3fZVcfaWRDQ9LSvzLIwyv5X1Zy3JoDASEYXiNmao3rRw&usqp=CAU",
    
    },
    {
      restaurentName: "shilpi",
      cuisines:"indian chinese" ,
      rating: "3stars" ,
      imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTSdIJUW-EKivCOoegUkCeJF3fZVcfaWRDQ9LSvzLIwyv5X1Zy3JoDASEYXiNmao3rRw&usqp=CAU",
    },
    
];

function App(){
  return(
        <div className ='container'>
          {
            data.map((eachObj)=>{
                const {imageURL,restaurentName,cuisines,rating}=eachObj;
                return <Restaurent imageURL={imageURL} restaurentName={restaurentName}
                cuisines={cuisines} rating={rating}/>


            }
            )
          }



        </div>

  )
}



 
const Restaurent = (props)=> {
  console.log(props)
  return(
<>
<img src={props.imageURL} alt="restaurent"/>
<h4>{props.restaurentName}</h4>
<h5>{props.cuisines}</h5>
<h6>{props.rating}</h6>

</>
  )
}
export default App
import './App.css';
import React,{useState} from 'react';


function App() {
const [data,setData]= useState(0)
const changeHandler=()=>{
    setData(data-1)

}
const increaseHandler = ()=>{
    setData(data+1)
}
return(
    <div className='container'>
      <button onClick={changeHandler}>-</button>
      <span>{data}</span>
      <button onClick={increaseHandler}>+</button>


    </div>
)
}

export default App
import './App.css';*/


/*import React, {useState} from 'react';
import {Restaurent} from './Data';

function App() {
const [data, setData]=useState(Restaurent)

const deleteHandler = (recieveid) =>{
  console.log(recieveid)
  const filterData= data.filter((eachObj) =>{
    return eachObj.id !== recieveid
  })
   setData(filterData)
}

return (
  <div className='container'>
   <ul>
    {
      data.map((eachObj)=>{
       const {imageURL,restuarentName,cuisines,rating,id} = eachObj
       return (
         <li key={id}>
          <div> <img src={imageURL} alt="" /></div>
          <div>{restuarentName}</div>
          <div>{cuisines}</div>
          <div>{rating}</div>
          <button onClick={() => deleteHandler(id)}>Delete</button>
         </li>

       )
     })
   }
</ul>
</div>)
}
export default App

import React, {useState,useEffect} from 'react';


function App(){
  const URL='https://jsonplaceholder.typicode.com/users'

   const [UsersData, setUsersData]= useState([])

   const fetchUsersData = async (apiURL)=>{
    const response = await fetch(apiURL)
    const data = await response.json()
    setUsersData(data)
   }

   useEffect(()=>{
    fetchUsersData(URL)
   },[])

  
return (
  <div className='container'>
   <ul>
    {
      UsersData.map((eachObj)=>{
       const {id,name,username,email,address} = eachObj
       return (
         <li key={id}>
          <div>{id}</div>
          <div> {name} </div>
          <div>{username}</div>
          <div>{email}</div>
          <div>{address.street}</div>
          <div>{address.city}</div>
          
          
         </li>

       )
     })
   }
</ul>
</div>)
} 

export default App

import  './App.css';
import React,{useReducer} from 'react';

const intialisation = {count : 0}

function reducer(state,action){
  switch (action.type){
    case 'increament' :
      return{count: state.count + 1 }
      case 'decrement' :
        return {count :state.count - 1}
        default:
          throw new Error()
    }
}

function App(){

  const [state,dispatch] = useReducer(reducer,intialisation)

  return (
    <div className ='container'>
        count : {state.count}
        <button onClick={()=>dispatch({type : 'decrement'})}>-</button>
        <button onClick={()=>dispatch({type : 'increament'})}>+</button>



    </div>
  )
}

export default App


import  './App.css';
import React,{useRef} from 'react';

function App(){
  let ref = useRef(0)

  function handlclick(){
    ref.current = ref.current +1
    alert("clicked" + ref.current + "times")


  }
  return(
    <div className='container'>
       <button onClick ={handlclick}>share the post</button>



    </div>


  )
}
export default App

import './App.css';
import React,{useRef,useState} from 'react';

const Watch =()=>{
  const [startTime,setStartTime] = useState(null)
  const[now,setNow] = useState(null)
  const intervalRef = useRef(null)

  function handleStart(){
    setStartTime(Date.now())
    setNow(Date.now())
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(()=>{
      setStartTime(Date.now())
    },10)
  }

  function stopTime(){
    clearInterval(intervalRef.current)
  }
  let secondsPassed = 0;
  if(startTime !== null && now !== null){
    secondsPassed = (startTime - now)/1000
  }

  return(
    <>
    <h4>{secondsPassed.toFixed(4)}</h4>
    <button onClick={handleStart}>start time</button>
    <button onClick={stopTime}>stop time</button>
    


    </>
  )
}
export default Watch

import React,{useState,useEffect} from "react";
// import './App.css'


const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const App= () =>{
  const [usersData,setUsersData] = useState([]);
  const [searchTerm, setSearchterm] = useState('');
  const [loading,setLoading] = useState(false);
  const [isError,setIsError] = useState({status:false,msg:''});

  const fetchData = async(apiURL) => {
    setLoading(true)
    setIsError({status:false,msg:''})
    try{
      const response = await fetch(apiURL);
      const{drinks}= await response.json();
      setUsersData(drinks)
      setLoading(false)
      setIsError({status:false,msg:''})
      if(!drinks){
        throw new Error("Data not found")
      }

    }catch(error){
      setLoading(false)
      setIsError({status:true,msg:error.message || "something went wrong. . ."})

    }
  }
  useEffect(()=>{
   const correctURL = `${URL}${searchTerm}`
   fetchData(correctURL)
   },[searchTerm])
   return (
    <>
    <div className="container">
      <div className="parent">
      <input type="text" name='search' placeholder='search' value={searchTerm} onChange={(e) =>setSearchterm(e.target.value)}/>
    </div>
    <hr />
    {loading && !isError?.status && <h5>Loading....</h5>}
    {isError?.status && <h5 style ={{color:'red'}}>{isError.msg}</h5>}
    {
      !loading && !isError?.status && <ul>
       {
        usersData.map((eachDrink)=>{
         const {strDrinkThumb,strDrink,idDrink} = eachDrink;
         return <li key={ idDrink}>
          <div className="image"><img src={strDrinkThumb} alt = "" /></div>
          <div className='brandName'>{strDrink}</div>
         </li>


        })
       }
      </ul>
    }
    </div>
    
    </>

   )





  }
  export default App*/

  import React,{useState} from "react";

  const App = ()=>{
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(5)
    const factorial = React.useMemo(()=>fact(number),[number])
    const handleChange = ()=>{
      setCount(count+1)
    }
    return(
      <>
      {factorial}
      <button onClick={handleChange}>share</button>
      {count}
      </>
    )
  }
  const fact =(n)=>{
  let answer=1;
  for (var i=n;i>=1;i--){
     answer=answer*1;
  }
  console.log("FACTORIAL CALLED")
  return answer

  }
  export default App;



  
