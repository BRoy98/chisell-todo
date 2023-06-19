import "./App.css";
import Tab from "./components/tab/tab";

function App() {
  const panes = [
    {
      title: "Home",
      render: <div>Tab 3 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 3 Content</div>,
    },
  ];

  return (
    <div className="App antialiased">
      <Tab panes={panes} />
    </div>
  );
}

export default App;
