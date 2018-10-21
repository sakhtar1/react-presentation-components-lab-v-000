// Code SimpleComponent Here


class SimpleComponent extends Component {
  state = { mood: "happy" };
  handleClick = (event) => {
    this.setState: {
      mood: "sad"
    }
  }
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>{mood}</button>
      </div>
    );
  }
}
