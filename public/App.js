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

} // Works with IssueRow


class IssueTable extends React.Component {
  render() {
    // define the style of the IssueRows here
    const rowStyle = {
      border: "1px solid silver",
      padding: 4
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        borderCollapse: "collapse",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "ID"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, {
      rowStyle: rowStyle,
      issue_id: 1,
      issue_title: "Error when adding a new issue."
    }), /*#__PURE__*/React.createElement(IssueRow, {
      rowStyle: rowStyle,
      issue_id: 2,
      issue_title: "Panel is missing styling on corners."
    })));
  }

} // Works with IssueTable


class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.issue_id), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.issue_title));
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