"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var initialIssues = [{
  id: 1,
  status: 'Completed',
  created: new Date('2020-12-05'),
  owner: 'Christian Aquino',
  due: new Date('2020-12-07'),
  effort: 4,
  title: 'Login page does not load correctly.'
}, {
  id: 2,
  status: 'Completed',
  created: new Date('2020-12-06'),
  owner: 'Kevin Laguerta',
  due: new Date('2020-12-07'),
  effort: 2,
  title: 'Naming conventions are not centered.'
}, {
  id: 3,
  status: 'In Process',
  created: new Date('2020-12-06'),
  owner: 'Calvin Figueroa',
  due: undefined,
  effort: 10,
  title: 'Restructure the tasks list on all pages.'
}];

function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a function that will filter issues.");
} // class IssueFilter extends React.Component {
//     render() {
//         return (
//             <div>This is a placeholder for the feature that allows users to filter issues.</div>
//         );
//     }
// }


function IssueRow(props) {
  var issue = props.issue;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ""), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.title));
} // class IssueRow extends React.Component {
//     render() {
//         const issue = this.props.issue;
//         return (
//             <tr>
//                 <td>{issue.id}</td>
//                 <td>{issue.status}</td>
//                 <td>{issue.created.toDateString()}</td>
//                 <td>{issue.owner}</td>
//                 <td>{issue.due ? issue.due.toDateString() : ""}</td>
//                 <td>{issue.effort}</td>
//                 <td>{issue.title}</td>
//             </tr>
//         );
//     }
// }


function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
} // class IssueTable extends React.Component {
//     render() {
//         const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
//         return (
//             <table className="bordered-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Status</th>
//                         <th>Created</th>
//                         <th>Owner</th>
//                         <th>Due Date</th>
//                         <th>Effort</th>
//                         <th>Title</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {issueRows}
//                 </tbody>
//             </table>
//         );
//     }
// }


var IssueAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueAdd, _React$Component);

  var _super = _createSuper(IssueAdd);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  } // Create the handleSubmit method here


  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        owner: form.owner.value,
        title: form.title.value,
        status: 'New'
      };
      this.props.createIssue(issue);
      form.owner.value = "";
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return IssueAdd;
}(React.Component);

var DisplayIssues = /*#__PURE__*/function (_React$Component2) {
  _inherits(DisplayIssues, _React$Component2);

  var _super2 = _createSuper(DisplayIssues);

  // Establish the constructor and super here. 
  function DisplayIssues() {
    var _this2;

    _classCallCheck(this, DisplayIssues);

    _this2 = _super2.call(this); // Set the state to an empty issue list

    _this2.state = {
      issues: []
    }; // bind the method to create a new issue

    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));
    return _this2;
  } // mount the date


  _createClass(DisplayIssues, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    } // load the data

  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          issues: initialIssues
        });
      }, 500);
    } // Create the method here to add a new issue

  }, {
    key: "createIssue",
    value: function createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date();
      var newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      this.setState({
        issues: newIssueList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
        issues: this.state.issues
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return DisplayIssues;
}(React.Component);

var element = /*#__PURE__*/React.createElement(DisplayIssues, null);
ReactDOM.render(element, document.getElementById('contents'));