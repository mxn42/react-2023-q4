import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Searcher from './components/Searcher';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <header>
        <Header title="React. Components" />
      </header>
      <main>
        <ErrorBoundary>
          <Searcher />
        </ErrorBoundary>
      </main>
      <footer>
        <Footer text="2023" />
      </footer>
    </>
  );
}

export default App;
