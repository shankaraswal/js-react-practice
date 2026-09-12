import {useContext} from 'react'
import { DataContext } from '../context';

const Home = () => {
 const userdata = useContext(DataContext)

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page {userdata.name}</p>
    </div>
  );
};

export default Home;
