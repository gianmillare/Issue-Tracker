class HelloWorld extends React.Component {
  render() {
    const continents = ['Africa', 'Asia', 'America', 'Australia', 'Europe'];
    const helloContinents = [];

    for (var i = 0; i < continents.length; i++) {
      helloContinents.push(`Hello ${continents[i]}!`);
    }

    const message = helloContinents.join(' ');
    return /*#__PURE__*/React.createElement("div", {
      title: "Outer div"
    }, /*#__PURE__*/React.createElement("h1", null, message));
  }

}

const element = /*#__PURE__*/React.createElement(HelloWorld, null);
ReactDOM.render(element, document.getElementById('contents'));