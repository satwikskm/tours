import React from 'react'
import { useState } from 'react'
import './tour.css'

const Tour = ({tour,deleteTour}) => {

    return(
        <section>
             <h1>Available Tours</h1>
        <div>
            {tour.map((val)=>{
                return <TourCard key ={tour.id} {...val} deleteTour={deleteTour}/>
          
        })}

        </div>

        </section>
       
        
    )
    
  
    // console.log(tour.map((val)=>val.image))
       
          
           
               
    //                tour.map((val)=>{
    //                    return(
    //                   <div>
                          
    //                   </div>
    //                    )
                      
    //                })
               
           
       
        
    } 

export default Tour
    
const TourCard =({id,image,name,info,price,deleteTour})=>{
    const[readMore,setReadMore]=useState(false)
    console.log("HI")
    console.log({id,image,name,price})
    return(
        <div className="singleTour">
            <h1>Package :{name}</h1>
            <img src={image} alt="" />
            <p>{readMore? info : `${info.substring(0,100)}...`}
            <button className="read-more"onClick={()=>{!readMore?setReadMore(true):setReadMore(false)}}>Read More</button>
            </p>
            <h4>Price : $ {price}</h4>
            <button className="delete-btn" onClick={()=>deleteTour(id)}>I am not interested</button>

        </div>
    )
}


  

