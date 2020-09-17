import React, { Component } from "react";
import "./styles.css";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ItemInput: "",
      list: []
    };
  }

  updateInput(val) {
    this.setState({
      ItemInput: val
    });
  }

  addItem() {
    if (this.state.ItemInput !== "") {
      const ItemInput = {
        id: Math.random(),
        val: this.state.ItemInput
      };

      const list = [...this.state.list];
      list.push(ItemInput);

      this.setState({
        list,
        ItemInput: ""
      });
    }
  }

  render() {
    console.log(...this.state.list);
    return (
      <div>
        <h1>Todo list</h1>
        <input value={this.state.ItemInput} onChange={(item) => this.updateInput(item.target.value)}
        ></input>
        <button onClick={() => this.addItem()}>Add</button>
        <h1>{this.state.list.map((item)=>{ 
        return (item.val); 
        })
        }
        </h1>
      </div>
    );
  }
}
export default App;
