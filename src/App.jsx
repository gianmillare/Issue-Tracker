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

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the feature that allows users to filter issues.</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
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
}

class IssueTable extends React.Component {
    constructor() {
        super();
        this.state = { issues: initialIssues };
    }
    render() {
        const issueRows = this.state.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
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
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for users' ability to add new issues.</div>
        );
    }
}

class DisplayIssues extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />

                <IssueTable />
                <hr />

                <IssueAdd />
            </React.Fragment>
        );
    }
}

const element = <DisplayIssues />
ReactDOM.render(element, document.getElementById('contents'));