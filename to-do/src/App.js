import ObjectTest, { myObject } from "./Components/ObjectTest";

if (true) {
  console.log(Object.entries(myObject));
} 

function App() {
  return (
    <div>
      <ObjectTest/>

    </div>
  );
}

export default App;
