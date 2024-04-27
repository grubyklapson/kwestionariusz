import { Header } from "./components/Header";
import { QuestionnaireCreator } from "./components/QuestionnaireCreator";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <QuestionnaireCreator />
      </main>
    </div>
  );
}

export default App;
