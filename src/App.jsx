const initialIssues = [
    {
        id: 1, status: 'Completed', created: new Date('2020-12-05'), owner: 'Christian Aquino', due: new Date('2020-12-07'), effort: 4, title: 'Login page does not load correctly.',
    },
    {
        id: 2, status: 'Completed', created: new Date('2020-12-06'), owner: 'Kevin Laguerta', due: new Date('2020-12-07'), effort: 2, title: 'Naming conventions are not centered.',
    },
    {
        id: 3, status: 'In Process', created: new Date('2020-12-06'), owner: 'Calvin Figueroa', due: undefined, effort: 10, title: 'Restructure the tasks list on all pages.',
    }
];

// IssueFilter is a placeholder and is a stateless function
function IssueFilter() {
    return (
        <div>This is a placeholder for a function that will filter issues.</div>
    )
}

// IssueRow will also be a stateless function that takes an argument "props"
function IssueRow(props) {
    const issue = props.issue;
    return (
        <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.created.toDateString()}</td>
            <td>{issue.owner}</td>
            <td>{issue.due ? issue.due.toDateString() : ""}</td>
            <td>{issue.effort}</td>
            <td>{issue.title}</td>
        </tr>
    );
}

// IssueTable is a stateless function that takes in argument props, that is the issues list above.
function IssueTable(props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>)
    return (
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Owner</th>
                    <th>Due Date</th>
                    <th>Effort</th>
                    <th>Title</th>
                </tr>
            </thead>

            <tbody>
                {issueRows}
            </tbody>
        </table>
    );
}
// because Issue add has some interactivity (it contains a constructor and user input), it will be a class, but still no state
class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Create the handleSubmit method here
    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.issueAdd;
        const issue = {
            owner: form.owner.value, title: form.title.value, status: 'New',
        };
        this.props.createIssue(issue);
        form.owner.value = ""; form.title.value = "";
    }
    render() {
        return (
            <form name="issueAdd" onSubmit={this.handleSubmit}>
                <input type="text" name="owner" placeholder="Owner" />
                <input type="text" name="title" placeholder="Title" />
                <button>Add</button>
            </form>
        );
    }
}

// DisplayIssues will require a state to render all above functions and classes. This is a state-based class.
class DisplayIssues extends React.Component {
    // Establish the constructor and super here. 
    constructor() {
        super();
        // Set the state to an empty issue list
        this.state =  {issues: []};
        // bind the method to create a new issue
        this.createIssue = this.createIssue.bind(this);
    }
    // mount the date
    componentDidMount() {
        this.loadData();
    }
    // load the data
    loadData() {
        setTimeout(() => {
            this.setState({issues: initialIssues});
        }, 500);
    }
    // Create the method here to add a new issue
    createIssue(issue) {
        issue.id = this.state.issues.length + 1;
        issue.created = new Date();
        const newIssueList = this.state.issues.slice();
        newIssueList.push(issue);
        this.setState({ issues: newIssueList });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />

                <IssueTable issues={this.state.issues}/>
                <hr />

                <IssueAdd createIssue={this.createIssue}/>
            </React.Fragment>
        );
    }
}

const element = <DisplayIssues />
ReactDOM.render(element, document.getElementById('contents'));