import { useState } from "react";
import AppContainer from "./App.styles";
import Navbar from "./components/navbar/navbar.component";
import Profiler from "./components/profiler/profiler.component";
import SearchBar from "./components/searchbar/searchbar.component";

const App =()=>{
    const [userData,setUserData] = useState({
        avatar_url: "https://avatars.githubusercontent.com/u/10152?v=4",
        bio: null,
        company: "Space Cubics",
        created_at: "2008-05-13T09:34:05Z",
        email: null,
        followers: 6,
        following: 3,
        followers_url: "https://api.github.com/users/yashi/followers",
        following_url: "https://api.github.com/users/yashi/following{/other_user}",
        location: "Sapporo, Japan",
        name: "Yasushi SHOJI",
        twitter_username: null,
        id: 10152,
        });

    const handleSearch=({target:{value},key})=>{
        if(key==='Enter'){
            getDatafromServer(value);
        }
    }
    const getDatafromServer = async username =>{
        let res=await fetch(`https://api.github.com/users/${username}`);
        res=await res.json();
        setUserData(res);
    }
    return (<AppContainer><Navbar/><SearchBar handleSearch={handleSearch}/><Profiler data={userData}/></AppContainer>)
}
export default App;