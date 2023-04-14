import "./App.css";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import { QuoteProvider } from "./component/context/QuoteContext";


function App() {

  return (

    <div className="lg:mx-10">

      <QuoteProvider>
        <Navbar />
        <Home />
      </QuoteProvider>

    </div>
  );
}

export default App;
