import user from './Profile/user.json';
import Profile from './Profile/Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './Friends/friends.json';
import FriendList from './Friends/FriendList';
import transactions from './Transactions/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 26,
        // color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
