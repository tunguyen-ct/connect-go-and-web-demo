import {
  createConnectTransport,
  createPromiseClient,
} from "@bufbuild/connect-web";
import { useState } from "react";
import { GreetService } from "./gen/greet_connectweb";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

const client = createPromiseClient(GreetService, transport);

function App() {
  const [name, setName] = useState("Tu");
  const [greeting, setGreeting] = useState("");
  const handleClick = async () => {
    const res = await client.greet({ name });
    setGreeting(res.greeting);
  };
  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleClick}>Say Hi</button>
        <div>{greeting}</div>
      </div>
    </>
  );
}

export default App;
