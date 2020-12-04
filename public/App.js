// class HelloWorld extends React.Component {
//     render() {
//         const continents = ['Africa', 'Asia', 'America', 'Australia', 'Europe'];
//         const helloContinents = [];
//         for (var i = 0; i < continents.length; i++) {
//             helloContinents.push(`Hello ${continents[i]}!`);
//         }
//         const message = helloContinents.join(' ');
//         return (
//             <div title='Outer div'>
//                 <h1>{message}</h1>
//             </div>
//         );
//     }
// }
class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This area will hold all the issue filters!");
  }

}

class IssueTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This area will hold a table of issues!");
  }

}

class IssueAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This area will hold a form to add an issue!");
  }

}

class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
  }

}

const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));