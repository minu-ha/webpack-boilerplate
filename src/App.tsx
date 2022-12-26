import { Provider } from 'react-redux';
import InboxScreen from './pages/task/InboxScreen';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
};

export default App;
