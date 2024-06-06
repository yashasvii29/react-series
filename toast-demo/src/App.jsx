import React from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default App;