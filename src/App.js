import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className='container'>
          {/* <div className='row'>
              <div className='col-md-12'>
                    <h3>Class Counter without using HOOK</h3>
                    <ClassCounter/>
              </div>
          </div><hr></hr>
          <div className='row'>
              <div className='col-md-12'>
                    <h3>Class Counter using UseState (HOOK)</h3>
                    <HookCounter/>
              </div>
          </div><hr></hr>
          <div className='row'>
              <div className='col-md-12'>
                    <h3>Class Counter  using UseState & Previous State (HOOK)</h3>
                    <HookCounterTwo/>
              </div>
          </div><hr></hr>
          <div className='row'>
              <div className='col-md-12'>
                    <h3>UseState with Object (HOOK)</h3>
                    <HookCounterThree/>
              </div>
          </div><hr></hr>
          <div className='row'>
              <div className='col-md-12'>
                    <h3>UseState with Array (HOOK)</h3>
                    <HookCounterFour/>
              </div>
          </div><hr></hr> */}
          <div className='row'>
              <div className='col-md-12'>
                    <h3>To Do List</h3>
                    <ToDoList/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
