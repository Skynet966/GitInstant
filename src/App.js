import AppContainer from "./App.styles";
import SearchBar from "./components/searchbar/searchbar.component";

const App =()=>{
    const handleSearch=({target:{value},key})=>{
        console.log(value);
    }
    return (<AppContainer><SearchBar handleChange={handleSearch}/></AppContainer>)
}

export default App;