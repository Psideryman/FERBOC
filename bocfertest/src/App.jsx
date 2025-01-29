import styles from "./App.module.css";
import { ExchangeRateTool } from "./components/Exchange Rate Tool/ExhangeRateTool";
import { Navbar } from "./components/Nav/Navbar";

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <ExchangeRateTool />
    </div>
  )
}

export default App
