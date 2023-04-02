import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle>ToDo List</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent></AppContent>
      </div>
    </div>
  );
}

export default App;
