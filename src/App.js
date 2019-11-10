import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import PplCard from './PplCard';

// setting your users initial state with React Hook
function App() {
  const [users, setUsers] = useState([])

//setting up our async await fetch and turing response to json
  useEffect(()=>{
    async function fetchData() {
        setUsers(
      await fetch('https://reqres.in/api/users?page=2')
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log(err, 'warning'))
        )
    }
    fetchData();
  } 
  ,[])

  //setting up our nested grids from material ui
  //outer grid is the container, the inner grid sets up the items
  
  //we iterate through the inner grid into the ppl card to gain control  
  //PplCard propogated with API data. 
  
  return (
    <div className="App">
        <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
        <Grid
        container
        spacing={10}
        style={{padding: '24px'}}
        >
        {users.map( users =>  
          <Grid
          key={users.id}
          item
          xs={12} sm={6} md={4} lg={4} xl={3}
        >
          <PplCard
          key={users.id}
          email={users.email}
          firstname={users.first_name}
          lastname={users.last_name}
          avatar={users.avatar}
          />
        </Grid>
        )}
        </Grid>
    </div>
  );
}

export default App;
