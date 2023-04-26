import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onINcreatement = () => {
    this.setState(prevStat => {
      console.log(`previous state count is ${prevStat.count}`)
      return {count: prevStat.count + 1}
    })
  }
  onDecreasement = () => {
    this.setState(prevStat => {
      console.log(`previous state count is ${prevStat.count}`)
      return {count: prevStat.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onINcreatement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecreasement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
