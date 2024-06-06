import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const handleClick = () => {
    toast.success("Hello World!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <ToastContainer className="my-toast-container" />
    </div>
  );
};

export default App;
