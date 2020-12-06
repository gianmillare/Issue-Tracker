const issues = [
    {
        id: 1, status: 'New', owner: 'Christian Aquino', effort: 5, created: new Date('2020-08-15'), due: undefined, title: 'Application does not render when clicking add.',
    }, 
    {
        id: 2, status: 'Assigned', owner: 'Kevin Laguerta', effort: 14, created: new Date('2020-09-07'), due: new Date('2020-10-10'), title: 'Unable to login into account.',
    }
];

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for filtering issues!</div>
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
                <td>{issue.owner}</td>
                {/* CAUTION: Not changing the Date field to string will cause a bug */}
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                {/* CAUTION: Not changing the Date field to string will cause a bug */}
                <td>{issue.due ? issue.due.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Issue Title</th>
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
            <div>This is a placeholder for adding new issues!</div>
        );
    }
}

class DisplayIssues extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr/>

                <IssueTable/>
                <hr />

                <IssueAdd/>
            </React.Fragment>
        );
    }
}

const element = <DisplayIssues/>;
ReactDOM.render(element, document.getElementById('contents'));