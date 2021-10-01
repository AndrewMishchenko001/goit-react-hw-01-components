import Profile from "./Components/Profile";
import user from "./Components/Profile/user.json"
// import './App.css';


function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>)
}
       
export default App;
