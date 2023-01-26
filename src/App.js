import { Accordion } from "./components/accordion";

function App() {
  const handleExpand = ({ expand }) => {
    console.log("expand", expand);
  };
  return (
    <Accordion onExpand={handleExpand}>
      <Accordion.Header>
        <button>Click me</button>
        <button>Click me</button>
      </Accordion.Header>
      <Accordion.Content>
        <p>Hello, I'm the body</p>
      </Accordion.Content>
    </Accordion>
  );
}

export default App;
