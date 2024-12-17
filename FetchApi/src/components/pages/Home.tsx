import { useFetch } from "../hooks/useFetch";

const apiURL = 'https://sample-dogs-api.netlify.app/api/v1';

export const Home = ()=>{
    const {dogs} = useFetch(apiURL)
    
    return(
        <div>
            {dogs.map((dog)=>(
                <div key={dog._id} className="cardDog">
                    <img src={dog.image} alt={`Dog ${dog.name}`} />
                    <h2>{dog.name}</h2>
                    <div>{dog.age}</div>
                </div>
            ))}
        </div>
    )
}