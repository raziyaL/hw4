import './App.css';
import {useEffect, useState} from "react";
import MainPage from "./mainpage/MainPage";
import ErrorPage from "./errorpage/ErrorPage";

function App() {
    const [user, setUser] = useState({
        name: '',
        lastname: ''
    });

    useEffect(() => {
        const name = prompt('Enter your name');
        const lastname = prompt('Enter your lastname');

        if(name === 'john' && lastname === 'john'){
            setUser({name: name, lastname: lastname})
        }else{
            setUser({name: name, lastname: lastname})
        }
    }, []);
  return (
    <div className="App">
        {user && user.name === 'john' && user.lastname === 'john'?(
            <MainPage user={user}/>
        ):(
            <ErrorPage user={user}/>
        )}
    </div>
  );
}

export default App;
