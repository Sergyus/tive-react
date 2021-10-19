import moment from "moment";
import 'moment/locale/ru';

moment.locale('ru');

function App() {

  return (
    <div className="App">
      <h1>Moment Locale: {moment().locale()}</h1>
        <p>Problem with locale</p>
        <p>with webpack good work</p>
    </div>
  )
}

export default App
