const issues = [
    {
        id: 1, status: 'New', owner: 'Christian Aquino', effort: 5, created: new Date('2020-08-15'), due: undefined, title: 'Application does not render when clicking add.',
    }, 
    {
        id: 2, status: 'Assigned', owner: 'Kevin Laguerta', effort: 14, created: new Date('2020-09-07'), due: undefined, title: 'Unable to login into account.',
    }
];

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for filtering issues!</div>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for adding new issues!</div>
        )
    }
}

class DisplayIssues extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter/>
                <hr/>

                <IssueAdd/>
            </React.Fragment>
        );
    }
}

const element = <DisplayIssues/>;
ReactDOM.render(element, document.getElementById('contents'));