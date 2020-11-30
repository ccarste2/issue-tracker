import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-lg-10">
                    Body
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
