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