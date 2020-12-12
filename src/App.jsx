const initialIssues = [
    {
        id: 1, status: "New", owner: "Kevin", effort: 5, created: new Date("2020-12-08"), 
        due: new Date("2020-12-10"), title: "Users are unable to add new issues.",
    },
    {
        id: 2, status: "New", owner: "Christian", effort: 2, created: new Date("2020-12-11"), 
        due: new Date("2020-12-20"), title: "Borders around the issue table is missing.",
    },
    {
        id: 3, status: "Completed", owner: "Calvin", effort: 8, created: new Date("2020-12-02"), 
        due: undefined, title: "Registration page leads to blank page after registering.",
    },
];

function IssueFilter() {
    return (
        <div>This is a placeholder for users to filter out what kind of issues they want to see.</div>
    );
}

function IssueRow(props) {
    const issue = props.issue;
    return (
        <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.owner}</td>
            <td>{issue.effort}</td>
            <td>{issue.created.toDateString()}</td>
            <td>{issue.due ? issue.id.toDateString() : ""}</td>
            <td>{issue.title}</td>
        </tr>
    );
}

function IssueTable(props) {
    const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>);
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
                    <th>Title</th>
                </tr>
            </thead>

            <tbody>
                {issueRows}
            </tbody>
        </table>
    );
}

class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = document.forms.issueAdd;
        const issue = {
            owner: form.owner.value, title: form.title.value, status: "New",
        }
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