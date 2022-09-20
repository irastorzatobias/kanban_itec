import "./App.css";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App w-[100vw] h-[100vh]">
      <Header title="kanban board"/>
      <CardContainer>
        <Card type='TO DO'/>
        <Card type='IN PROGRESS'/>
        <Card type='UNDER REVIEW'/>
        <Card type='DONE'/>
      </CardContainer>
    </div>
  );
}

export default App;
