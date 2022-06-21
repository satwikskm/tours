import Tour from '../tour/tour'
import Loading from '../loading/loading'
import {useState,UseEffect, useEffect} from 'react'
import React from 'react'
import data from '../../api'
console.log(data)

// const url = 'https://course-api.com/react-tours-project/'

const Navigation = () => {

    const [loading,setLoading] = useState(true)
    const [tours,setTours] = useState([])

    

    // const fetchtours = () =>{
    //     setLoading(false)
    //     try {
    //         // const response = await fetch(url)
    //         // tours = response.json()
    //         console.log("try")
    //         setTours({
    //             id	:	"rec6d6T3q5EBIdCfD",
    //             name	:	"Best of Paris in 7 Days Tour",
    //             info	:	"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    //             image	:	"https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    //             price	:	"1,995"

    //         })
           

    //     } catch (error) {
    //         console.log(error.code)
    //         console.log("Some error occured")
            
    //     }
    // }
    // setTimeout(
        //  useEffect(
        // fetchtours()
      
        // ,[])
    //     ,50000)
    // useEffect(
       
        // ,[])
    

    if(loading && data.length < 0 ){
        console.log("loading")
        return(
            <Loading />
        )
    }
   
    
    if(data.length > 0 ){
       setLoading(false)
        setTours(data)
        console.log("Tours")
        return(
            data.map((tour)=>{
                <Tour tour={[]}/>
            })
           
        )

    }
    


//   return (
//     <div>
//         \

        
//         <Tour />
//         <button>Refresh</button>
//         </div>
//   )
}

export default Navigation