// import PropTypes from 'prop-types';
import React from 'react';
import { Controls } from './Controls';

export class Counter extends React.Component {
  // дефолтні пропси для класу
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    console.log('click on level up');

    // метод setState(update, callback)
    //   об'єктна форма, тільки для перезапису значення)
    //   this.setState({
    //    value: 10,
    //   })

    // метод setState(updateFunction, callback)
    // для розрахунку на основі попередніх значень

    this.setState(prevState => {
      // повертає update
      // prevState - реакт надає посилання на актуальний стан
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    console.log('click on level down');

    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        {/* приймає методи класу як пропси і передає в компонент Controls */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />

        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Level up
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Level down
          </button>
        </div>  */}
      </div>
    );
  }
}
