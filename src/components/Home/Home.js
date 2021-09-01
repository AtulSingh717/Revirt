import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Particles from '../Particles';
import './Home.css';
import Cards from '../Cards/Cards'

function Home() {

    const[photos, setPhotos] = useState([]); 

//Use of async function to fetch data from the API using axios
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos/")
            // console.log(response.data);  -------  We get an object containing 5000 arrays from API
            setPhotos(response.data);
        }
        fetchData();
    },[]);

    // console.log(photos);  -------  After upadating the state of photos array that we created, from the fetched data 

    
    return (
        <>
         <Particles />
         <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4"> {/*ClassName used from Bootstrap 5 Grid Layout*/}
              <Cards photos={photos}/>  {/* Sending the fetched data as props to the child component Card */}
            </div>  
         </div>
        </>
    )
}

export default Home;
