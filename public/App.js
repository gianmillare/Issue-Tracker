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

var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  var _super = _createSuper(IssueFilter);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _super.apply(this, arguments);
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the feature that allows users to filter issues.");
    }
  }]);

  return IssueFilter;
}(React.Component);

var IssueRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueRow, _React$Component2);

  var _super2 = _createSuper(IssueRow);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _super2.apply(this, arguments);
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var issue = this.props.issue;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ""), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.title));
    }
  }]);

  return IssueRow;
}(React.Component);

var IssueTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueTable, _React$Component3);

  var _super3 = _createSuper(IssueTable);

  function IssueTable() {
    var _this;

    _classCallCheck(this, IssueTable);

    _this = _super3.call(this);
    _this.state = {
      issues: []
    };
    return _this;
  }

  _createClass(IssueTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          issues: initialIssues
        });
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      var issueRows = this.state.issues.map(function (issue) {
        return /*#__PURE__*/React.createElement(IssueRow, {
          key: issue.id,
          issue: issue
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
    }
  }]);

  return IssueTable;
}(React.Component);

var IssueAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(IssueAdd, _React$Component4);

  var _super4 = _createSuper(IssueAdd);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    return _super4.apply(this, arguments);
  }

  _createClass(IssueAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for users' ability to add new issues.");
    }
  }]);

  return IssueAdd;
}(React.Component);

var DisplayIssues = /*#__PURE__*/function (_React$Component5) {
  _inherits(DisplayIssues, _React$Component5);

  var _super5 = _createSuper(DisplayIssues);

  function DisplayIssues() {
    _classCallCheck(this, DisplayIssues);

    return _super5.apply(this, arguments);
  }

  _createClass(DisplayIssues, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
    }
  }]);

  return DisplayIssues;
}(React.Component);

var element = /*#__PURE__*/React.createElement(DisplayIssues, null);
ReactDOM.render(element, document.getElementById('contents'));