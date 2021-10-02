import Profile from "./Components/Profile/Profile";
import user from "./Components/Profile/user.json";
import Statistics from "./Components/Statistic/Statistic";
import statisticalData from './Components/Statistic/statistic.json';
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
      <Statistics title="Upload stats" stats={statisticalData} />;
</>);
  
}
       
export default App;
