import React from "react";
import PropTypes from 'prop-types';


class App extends React.Component{
  // return 이 없다. React.component에 render method를 가져온다. class-는 클래스인데 보여주기 위해서는 render method안에 넣어줘야한다. 리엑트는 자동으로 class component안에 render method를 자동으로 렌더링한다

  state = {
    //변하는 state는 여기에 넣는다. 바꾸고싶은 데이터를 넣는거다.
    count: 0
    
  }

  add = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => { 
    // this.setState({ count: this.state.count - 1})
    this.setState(current => ({ count: current.count - 1 }));
    // render 가 다시 호출되어야한다. 그래서 'set'state. setState은 새로운 state으로 render를 호출한다.
    // current 사용하기
  }
  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('I just updated');
  }

  componemtWillUnmount(){
    console.log('good bye');
  }
  render() {
    console.log('i am rendering')
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
  // react component does
  // mouting - being born
  // Updating - updating
  // Unmounting- when component dies. when page changes
  // construnctor - con
}

export default App;

