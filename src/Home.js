import React from 'react'
import {Link} from "react-router-dom";
export default function Home() {
  
  const [users, setUsers] = React.useState([]);
  const fetchDetails = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
    
  };
  React.useEffect(() => {
    fetchDetails();
  },[]);
    return (
          <div className="App">
     
      <div className="flex">
        {
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                {/* <Link to = "/profile/${user.id}"> */}
                <Link to = {`/profile/${user.id}`}>
                <img key={user.avatar} src={user.avatar} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
    )
}
