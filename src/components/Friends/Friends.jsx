const FriendList = ({ arrays }) => {
  return (
    <ul className="friend-list">
      {arrays.map(array => (
        <li className="item" key={array.id}>
          <span className="status">{array.isOnline}</span>
          <img
            className="avatar"
            src={array.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
