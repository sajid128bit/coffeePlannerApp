// Write your code here.
import {Component} from 'react'
import './index.css'

class QuestionOption extends Component {
  changeColor = () => {
    const {changeOption, optionsData} = this.props
    const {id} = optionsData
    changeOption(id)
  }

  selectedOption = () => {
    const {first, second, third, fourth, fifth, optionsData} = this.props
    const {id, optionTitle, description} = optionsData
    if (
      id === first ||
      id === second ||
      id === third ||
      id === fourth ||
      id === fifth
    ) {
      return (
        <button
          type="button"
          onClick={this.changeColor}
          className="extraClass options-containers"
        >
          <div className="option-title-image">
            <h1>{optionTitle}</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png"
              alt="cup"
              className="image-options"
            />
          </div>
          <p className="options-para extra-para-options">{description}</p>
        </button>
      )
    }
    return (
      <button
        type="button"
        onClick={this.changeColor}
        className="options-containers"
      >
        <div className="option-title-image">
          <h1>{optionTitle}</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
            alt="cup"
            className="image-options"
          />
        </div>
        <p className="options-para">{description}</p>
      </button>
    )
  }

  render() {
    return <div className="options-container">{this.selectedOption()}</div>
  }
}
export default QuestionOption
