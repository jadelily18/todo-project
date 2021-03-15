import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import AllTodoListItems from "./components/AllTodoListItems"
import Footer from "./components/Footer"


class App extends React.Component {

    render() {

      return (
          <div className="App">
              <AllTodoListItems/>
              <Footer/>
          </div>
      );
    }
}

export default App;
