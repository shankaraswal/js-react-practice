import { useContext } from 'react'
import { DataContext } from '../context';

const Home = () => {
  const userdata = useContext(DataContext)

  console.clear()
  // HOISTING AND TDZ
  var a;

  console.log("Hello World");

  console.log(a);

  a = 10;

  console.log(a);


  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page {userdata.name}</p>
    </div>
  );
};

export default Home;
