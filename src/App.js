import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import { QuoteProvider } from "./component/context/QuoteContext";
import RandomQuote from "./component/RandomQuote";
import QuoteResults from "./component/QuoteResults";
import About from "./pages/About";
import FavoriteQuotes from "./pages/FavoriteQuotes";
import ErrorPage from "./pages/ErrorPage";


function App() {

  return (

    <div className="lg:mx-10">

      <QuoteProvider>
        <Router>
          <Navbar />
          <Home />
          <Routes>
            <Route path='/' element={<RandomQuote />} />
            <Route path='/quotes' element={<QuoteResults />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorite' element={<FavoriteQuotes />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </Router>

      </QuoteProvider>


    </div>
  );
}

export default App;
