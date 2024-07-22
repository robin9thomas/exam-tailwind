import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import ToggleViewWrapper from './components/ToggleViewWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faList } from '@fortawesome/free-solid-svg-icons'; import Card from './components/card';

import TableRow from './components/TabRow';

function App() {


  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/user/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const jsonResponse = await response.json();

    setUsers(jsonResponse.data);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => { fetchData() }, [])

  console.log(users)

  const [view, setView] = useState('card');

  const toggleView = (viewValue) => {
    setView(viewValue);
  };


  return (
    <div className="App bg-gray-900 min-h-screen">
      <div className='flex pt-2 px-8'>
        <SearchBar />
        <ToggleViewWrapper>
          <div className={`w-1/2 cursor-pointer hover:bg-gray-600 active:bg-gray-600 text-white rounded-l-md p-1 flex items-center justify-center ${view === "tab" ? "bg-gray-600" : "bg-gray-700"}`} onClick={() => toggleView('tab')}>
            <FontAwesomeIcon icon={faList} />
          </div>
          <div className={`w-1/2 cursor-pointer hover:bg-gray-600 active:bg-gray-600 text-white rounded-r-md p-1 flex items-center justify-center ${view === "card" ? "bg-gray-600" : "bg-gray-700"}`} onClick={() => toggleView('card')}>
            <FontAwesomeIcon icon={faTable} />
          </div>
        </ToggleViewWrapper>
      </div>
      <div className={`flex flex-wrap m-1 w-screen p-3 ${view === "card" ? "" : "hidden"}`}>
        {users.map((user) => (
          <Card id={user.id} firstName={user.firstName} lastName={user.lastName} jobTitle={user.jobTitle} email={user.email} image={user.imageUrl} />
        ))}
        <div className="h-[38vh] w-40 ml-5 transform scale-100 hover:scale-110 transition-transform relative bg-gray-500 rounded-md text-xl justify-center flex items-center text-white">
          <div className="flex">
            load more
          </div>
        </div>
      </div>
      <div className={`flex justify-center p-8 ${view === "tab" ? "" : "hidden"}`}>
        <table className='text-center'>
          <thead className='text-white'>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Job</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <TableRow
                key={user.id}
                index={index}
                firstName={user.firstName}
                lastName={user.lastName}
                jobTitle={user.jobTitle}
                email={user.email}
                image={user.imageUrl}
              />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;