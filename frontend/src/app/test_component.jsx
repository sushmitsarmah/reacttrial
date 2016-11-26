import React from 'react';
import FormComponent from './form_component';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class TestComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {likesCount: +props.num, othercount: 0, date: new Date()};
        this.onLike = this.onLike.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        // console.log(d3.select(".sushmit").attr('class'));
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }   

    onLike () {
        // let newLikesCount = this.state.likesCount + 1;
        this.setState((prevState, props) => ({
            likesCount: prevState.likesCount + 1,
            othercount: prevState.likesCount + 2
        }))
        // this.setState({likesCount: newLikesCount, othercount: newLikesCount+1});
    }

    render() {
        return (
            <div className="sushmit">
                <Welcome name="Sara" />
                <Greeting isLoggedIn={true} />
                <FormComponent value="sushmit"/>
                Likes : <span>{this.state.likesCount}</span> -
                <span> {this.state.othercount}</span>
                <div>{this.state.date.toLocaleTimeString()}</div>
                <div><button onClick={this.onLike}>Like Me</button></div>
            </div>
        );
    }
}

export default TestComponent;
