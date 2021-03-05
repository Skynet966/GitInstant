import AppContainer from "./App.styles";
import Navbar from "./components/navbar/navbar.component";
import SearchBar from "./components/searchbar/searchbar.component";

const App =()=>{
    const handleSearch=({target:{value},key})=>{
        if(key==='Enter'){
            console.log(value);
        }
    }
    return (<AppContainer><Navbar/><SearchBar handleSearch={handleSearch}/></AppContainer>)
}
export default App;