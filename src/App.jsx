const issues = [
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
        return (
            <div>This is a placeholder.</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        return (
            <div>This is a placeholder.</div>
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