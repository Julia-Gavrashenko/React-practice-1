import React, { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    // працюємо з масивом, по індексу
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');

      return optionClasses.join('  ');
    }
  };

  render() {
    // обчислювальна властивість вираховується на базі пропів і стейтів
    // з масиву опцій по індексу беремо нам потрібний обєкт
    const activeOptionLabel = this.props.options[this.state.activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title"> Color Picker</h2>
        <p>Active color: {activeOptionLabel.label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              // треба передати функцію, яка визоветься під час кліку, а не просто посилання на функціюб передаємо
              // шнлайн-функцію, що під час свого визову, визове і колбек
              onClick={() => {
                this.setActiveIndex(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// render() {
//     return (
//       <div className="ColorPicker ">
//         <h2 className="ColorPicker__title"> Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className="ColorPicker__option"
//               //   порівнюємо те, що є в стейті та поточний індекс при переборі, в умові прямо в обєкті стилів
//               style={{
//                 backgroundColor: color,
//                 border: index === this.state.activeOptionIdx ? '3px solid black' : 'none'}}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }}
