import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="container">
      <PageTitle>ToDo List</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent></AppContent>
      </div>
      <Toaster
        position="top-right"
      />
    </div>
  );
}

export default App;
