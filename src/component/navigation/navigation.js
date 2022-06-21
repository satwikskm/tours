import Tour from '../tour/tour'
import Loading from '../loading/loading'
import {useState,useEffect} from 'react'
import React from 'react'



const url = 'https://course-api.com/react-tours-project/'

const Navigation = () => {

    const [loading,setLoading] = useState(true)
    const [tours,setTours] = useState([])

    

    const fetchtours = async () =>{
        setLoading(false)
        try {
            const response = await fetch(url)
            console.log(response)
            const tours = await response.json()   
            console.log(tours)
            setTours(tours)
           
        } catch (error) {
            setLoading(true)
            
            console.log("Some error occured")
            
        }
    }
         useEffect(()=>{ fetchtours()}
        ,[])

    

    if(loading){
        console.log("loading")
        return(
            <Loading />
        )
    }
    return(
        <div>
            <h1>Tour</h1>
            <Tour tour={tours}/>
        </div>
            
        
       
    )
   
    
    // tours.map((tour)=>{
    //     console.log(tour)

    // })
        

    }
    


//   return (
//     <div>
//         \

        
//         <Tour />
//         <button>Refresh</button>
//         </div>
//   )


export default Navigation