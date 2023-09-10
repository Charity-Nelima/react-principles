import React from "react";
import ReactComp from './ReactComp';


class MyyComponent extends React.Component {
    // The render method defines what the component should render.
    render() {
      return (
        <div>
          <h1>Hello, Second page!</h1>
          <p>This is not a simple React component.</p>
        </div>
      );
    }
  }

  function PageTwo(){

    return(
        <div>
        <ReactComp />
        </div>
    )
}

export default PageTwo;