import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [friendName, setFriendName] = useState("");
  const [age, setAge] = useState(0);
  const [listOfFriend, setListFriend] = useState([]);
  const addFriend = () => {
    axios
      .post("http://localhost:3001/insert", { name: friendName, age: age })
      .then((response) => {
        setListFriend([
          ...listOfFriend,
          { _id: response.data, name: friendName, age: age },
        ]);
      });
    setFriendName("");
    setAge(0);
  };
  const UpdateFriend = (id, age) => {
    const newAge = prompt("Enter New Age: ", age);
    // if (isString({ newAge })) {
    //   console.log("yes");
    // } else {
    //   console.log("No");
    // }
    if (typeof newAge == "number") {
      console.log("NUm,bner");
    } else {
      console.log("Nop");
    }
    if (newAge !== "") {
      axios
        .put("http://localhost:3001/update", { newAge: newAge, id: id })
        .then(() => {
          setListFriend(
            listOfFriend.map((val) => {
              return val._id === id
                ? { _id: id, name: val.name, age: newAge }
                : val;
            })
          );
        });
    } else {
      console.log("Invalide Number");
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then((response) => {
        setListFriend(response.data);
      })
      .catch(() => {
        console.log("Err");
      });
  }, []);
  const onDeleteFriend = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      setListFriend(
        listOfFriend.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };
  return (
    <div className="App">
      <div className="inputs">
        <input
          placeholder="Friend Name"
          value={friendName}
          onChange={(event) => {
            setFriendName(event.target.value);
          }}
          type="text"
        />
        <input
          placeholder="Age"
          value={age}
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <button className="button" onClick={addFriend}>
          Add Friend
        </button>
      </div>

      <div className="listOfFriend">
        <h2>List of Friends</h2>
        {listOfFriend.map((result, key) => {
          return (
            <div className="friendContainer" key={key}>
              <div className="friend">
                <h3>
                  Name:<strong>{result.name}</strong>
                </h3>
                <h3> Age:{result.age}</h3>
              </div>
              <button
                onClick={() => {
                  UpdateFriend(result._id, result.age);
                }}
                className="updateBtn"
              >
                Update
              </button>
              <button
                className="removeBtn"
                onClick={() => {
                  onDeleteFriend(result._id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
