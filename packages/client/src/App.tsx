import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  return (
    <div className="p-4">
      <p className="font-bold text-4xl">{message || "Loading..."}</p>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
