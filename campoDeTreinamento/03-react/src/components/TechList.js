import React, { Component } from "react";
import TechItem from './TechItem'
class TechList extends Component {
  
  state = {
    newTech: "",
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <h1>{this.state.newTech}</h1> */}
        <ul>
          {this.state.techs.map(tech => (
            <TechItem key={tech} tech={tech}
            onDelete={() => this.handleDelete(tech)}/>
          ))}
        
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;