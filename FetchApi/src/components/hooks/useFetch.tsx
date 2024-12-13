import { useState, useEffect } from "react"
interface DogsSchema {
    _id:string,
    name: string,
    breed: string,
    image: string,
    color: string,
    age: number,
    favoriteToy: string,
    personality: string,
    bio: string,
}

export const useFetch = (apiURL:string) =>{
    const [dogs, setDogs] = useState<DogsSchema[]>([]);
    const getDogs = async () => {
        try{
            const result = await fetch(`${apiURL}/dogs`);
            if(result.ok){
                const data = await result.json();
                setDogs(data)
            }else{
                console.log(result.status)
            }
        } catch(error){
            console.error('Error: ',error)
        }
    }
    // las dependecias no deben estar vacio
    useEffect(()=>{
        getDogs()
    },[])
    return{
        dogs
        // getData
        // CRUD
    }
}