import React, {useEffect, useState} from 'react'
function App(){
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=> response.json())
        .then((data)=>{
            setImage(data.message)
            setIsLoaded(true)
        })
    },[])
    const[image, setImage]= useState('')
    const[isLoaded, setIsLoaded] = useState(false)
    if (!isLoaded) return <p>Loading...</p>;
    return(
        <>
         <img src={image} alt="A Random Dog"></img>
        </>
    )
}
export default App;