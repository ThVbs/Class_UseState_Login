import { StatusBar } from 'expo-status-bar';
// import Home from './src/screens/home'
import UseState from "./src/screens/UseState"

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='trasnparent'
        translucent
      />
      {/* <Home></Home> */}
      <UseState></UseState>
    </>
  );
}


