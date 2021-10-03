import FriendList from "./Components/Friends/Friends";
import friends from "./Components/Friends/friends.json"
import Profile from "./Components/Profile/Profile";
import user from "./Components/Profile/user.json";
import Statistics from "./Components/Statistic/Statistic";
import statisticalData from './Components/Statistic/statistic.json';
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./Components/TransactionHistory/transactions.json"
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
      <FriendList friends={friends} />,
      <TransactionHistory transactions={transactions} />;
</>);
  
}
       
export default App;
