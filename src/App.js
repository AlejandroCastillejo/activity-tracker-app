import { ActivitiesContextProvider } from "./context/activities-context";

import Header from "./components/header/header";
import MainPage from "./pages/main-page/main-page";

import "./App.css";

function App() {
  return (
    <ActivitiesContextProvider>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </ActivitiesContextProvider>
  );
}

export default App;
