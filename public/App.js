const issues = [{
  id: 1,
  status: 'New',
  owner: 'Christian Aquino',
  effort: 5,
  created: new Date('2020-08-15'),
  due: undefined,
  title: 'Application does not render when clicking add.'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Kevin Laguerta',
  effort: 14,
  created: new Date('2020-09-07'),
  due: new Date('2020-10-10'),
  title: 'Unable to login into account.'
}];

class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for filtering issues!");
  }

}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, issue.title));
  }

}

class IssueTable extends React.Component {
  render() {
    const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Issue Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
  }

}

class IssueAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for adding new issues!");
  }

}

class DisplayIssues extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
  }

}

const element = /*#__PURE__*/React.createElement(DisplayIssues, null);
ReactDOM.render(element, document.getElementById('contents'));