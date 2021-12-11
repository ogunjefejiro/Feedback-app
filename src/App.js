import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedBackProvider} from "./context/FeedBackContext";


function App() {
  return (
    <FeedBackProvider>
      <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <FeedBackForm />
              <FeedBackStats />
              <FeedBackList />
              <AboutIconLink />
            </>
            }>
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </FeedBackProvider>
  );
}

export default App;
