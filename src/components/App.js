// create your App component here
import React, {useState, useEffect} from "react";
function App() {
    const [dogImages, setDogImages] = useState([]);
    const [isloaded, setIsloaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImages((img) => img = data.message);
            setIsloaded(true);
        });
    }, []);

    if (!isloaded) return <p>Loading...</p>;

    return(
        <div>
            <img src = {dogImages} alt = "A Random Dog"/>
        </div>
    );
}

export default App;