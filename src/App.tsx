
import Header from './components/Header/Header';
import RepoList from './components/RepoList/RepoList';
import Searcher from './components/Searcher/Searcher';
import { GenericContextProvider } from './context/context';

function App() {


  return (
    <GenericContextProvider>
    <div className="flex flex-col items-center min-h-screen text-white mx-auto" >
      <Header/>
      <main className="flex items-center flex-col  max-w-screen-md p-5 sm:w-4/5">
        <Searcher/>
        <RepoList/>
      </main>
    </div>
    </GenericContextProvider>
  )
}

export default App
