import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy, useEffect, useState, useContext } from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyLoader from "./assets/MyLoader.jsx";
import AutoNavigateContext from './assets/Contexts.jsx';

const Home = lazy(() => import('./assets/Home.jsx'));
const First = lazy(() => import('./assets/First.jsx'));
const Second = lazy(() => import('./assets/Second.jsx'));
const Third = lazy(() => import('./assets/Third.jsx'));
const Fourth = lazy(() => import('./assets/Fourth.jsx'));
const Fifth = lazy(() => import('./assets/Fifth.jsx'));
const Sixth = lazy(() => import('./assets/Sixth.jsx'));
const Credits = lazy(() => import('./assets/Credits.jsx'));

const App = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(0);
  const { isAutoNavigate } = useContext(AutoNavigateContext);

  const pages = ["/", "/first", "/second", "/third", "/fourth", "/fifth", "/sixth", "/credits"];

  useEffect(() => {
    let interval;
    if (isAutoNavigate) {
      interval = setInterval(() => {
        setCurrentPage(prevPage => {
          const nextPage = (prevPage + 1) % pages.length;
          navigate(pages[nextPage]);
          return nextPage;
        });
      }, 8000); // Navigate every 10 seconds
    }
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoNavigate, navigate]);

  return (
    <main>
      <Container>
        <Suspense fallback={<MyLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first" element={<First />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/fourth" element={<Fourth />} />
            <Route path="/fifth" element={<Fifth />} />
            <Route path="/sixth" element={<Sixth />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </Suspense>
      </Container>
    </main>
  );
};

export default App;
