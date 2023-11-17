/*import logo from './logo.svg';
import './App.css';
import Parent from './Parent';*/

  export const Restaurent = [
  {
     restaurentName : "krithuga", 
     cuisines:"indian,italian ",
      rating: "5stars" ,
      imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTSdIJUW-EKivCOoegUkCeJF3fZVcfaWRDQ9LSvzLIwyv5X1Zy3JoDASEYXiNmao3rRw&usqp=CAU",
      id:12,
    },
    {
      restaurentName: "shdab",
      cuisines:"indian,chinese" ,
      rating: "4stars" ,
      imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTSdIJUW-EKivCOoegUkCeJF3fZVcfaWRDQ9LSvzLIwyv5X1Zy3JoDASEYXiNmao3rRw&usqp=CAU",
      id:13,
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

/*function App(){
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
export default App*/