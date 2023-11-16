const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friends) => (
        <Friend friends={friends} key={friends.id} />
      ))}
    </ul>
  );
}

function Friend({ friends }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>

      {friends.balance < 0 && (
        <p className="red">
          You owe {friends.name} {friends.balance}€
        </p>
      )}

      {friends.balance > 0 && (
        <p className="green">
          {friends.name} owes You {friends.balance}€
        </p>
      )}

      {friends.balance === 0 && <p>You and {friends.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend name</label>
      <input type="text" />

      <label>🌴 Image URL </label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split bill with X</h2>

      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🧍‍♂️ Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option className="user">You</option>
        <option className="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
