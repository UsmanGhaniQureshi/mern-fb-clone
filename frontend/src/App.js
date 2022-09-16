import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/");
      console.log(res);
    })();
  },[]);
  return <h1>Welcome to Facebook</h1>;
}

export default App;
