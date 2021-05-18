// Write your code here.
import {Component} from 'react'
import './index.css'
import QuestionOption from '../QuestionOption/index'

class CoffeePlannerQuestion extends Component {
  changeOption = id => {
    const {changeState} = this.props
    changeState(id)
  }

  render() {
    const {coffeePlannerData, first, second, third, fourth, fifth} = this.props
    const {questionTitle, optionsData} = coffeePlannerData
    return (
      <div>
        <h1>{questionTitle}</h1>
        <div className="options-flex">
          {optionsData.map(eachItem => (
            <QuestionOption
              key={eachItem.id}
              optionsData={eachItem}
              changeOption={this.changeOption}
              first={first}
              second={second}
              third={third}
              fourth={fourth}
              fifth={fifth}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default CoffeePlannerQuestion
