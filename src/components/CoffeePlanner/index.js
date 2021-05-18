// Write your code here.
import './index.css'
import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion/index'

class CoffeePlanner extends Component {
  state = {
    first: -1,
    second: -1,
    third: -1,
    fourth: -1,
    fifth: -1,
    isClicked: false,
  }

  changeState = id => {
    const num = Math.floor(id / 3)
    if (num === 0) {
      this.setState({first: id, isClicked: false})
    } else if (num === 1) {
      this.setState({second: id, isClicked: false})
    } else if (num === 2) {
      this.setState({third: id, isClicked: false})
    } else if (num === 3) {
      this.setState({fourth: id, isClicked: false})
    } else {
      this.setState({fifth: id, isClicked: false})
    }
  }

  checkPlanstate = () => {
    this.setState({isClicked: true})
  }

  checkPlan = () => {
    const {first, second, third, fourth, fifth} = this.state
    const {coffeePlannerData} = this.props
    // const {optionsData} = coffeePlannerData[0]
    // const firstOption = optionsData[first]
    // console.log(firstOption.optionTitle)
    if (
      first === -1 ||
      second === -1 ||
      third === -1 ||
      fourth === -1 ||
      fifth === -1
    ) {
      return (
        <p className="kindly-select">
          Kindly select options for all the questions.
        </p>
      )
    }
    return (
      <p className="kindly-select">
        I Drink my coffee as{' '}
        <span>{coffeePlannerData[0].optionsData[first].optionTitle}</span>, with
        a{'  '}
        <span>
          {' '}
          {coffeePlannerData[1].optionsData[second % 3].optionTitle}
        </span>{' '}
        type of bean.{' '}
        <span>{coffeePlannerData[2].optionsData[third % 3].optionTitle}</span>{' '}
        ground ala{' '}
        <span>{coffeePlannerData[3].optionsData[fourth % 3].optionTitle}</span>,
        sent to me{' '}
        <span>{coffeePlannerData[4].optionsData[fifth % 3].optionTitle}</span>.
      </p>
    )
  }

  render() {
    const {coffeePlannerData} = this.props
    const {first, second, third, fourth, fifth, isClicked} = this.state
    return (
      <div className="container">
        <div className="background-container">
          <h1 className="create-a-plan">Create a Plan</h1>
        </div>
        <div className="container2">
          <div className="question-answers">
            {coffeePlannerData.map(eachItem => (
              <CoffeePlannerQuestion
                coffeePlannerData={eachItem}
                key={eachItem.id}
                changeState={this.changeState}
                first={first}
                second={second}
                third={third}
                fourth={fourth}
                fifth={fifth}
              />
            ))}
            <button
              type="button"
              className="plan-style"
              onClick={this.checkPlanstate}
            >
              Create my plan!
            </button>
            <div className="suggestion">
              {isClicked ? this.checkPlan() : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
