import { useEffect, useState } from "react"

const apiURL = 'https://sample-dogs-api.netlify.app/api/v1/';
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

export const Home = ()=>{
    const [dogs, setDogs] = useState<DogsSchema[]>([]);
    const getDogs = async () => {
        try{
            const result = await fetch(`${apiURL}dogs`);
            const data = await result.json();
            setDogs(data)
        } catch(error){
            console.error('Error: ',error)
        }
    }
    useEffect(()=>{
        getDogs()
    },[])
    return(
        <div>
            {dogs.map((dog)=>(
                <div key={dog._id}>
                    {dog.name}
                </div>
            ))}
        </div>
    )
}