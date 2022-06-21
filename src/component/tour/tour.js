import React from 'react'

const Tour = ({tour}) => {

    return(
        <section>
             <h1>Available Tours</h1>
        <div>
            {tour.map((val)=>{
                return <TourCard key ={tour.id} {...val}/>
          
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
    
const TourCard =({id,image,name,price})=>{
    console.log("HI")
    console.log({id,image,name,price})
    return(
        <div className="singleTour">
            <h1>Head</h1>
            <img src={image} alt="" />
            <p>{name}</p>
            <h4>{price}</h4>

        </div>
    )
}


  

