class IssueFilter extends React.Component {
    render() {
        return (
            <div>This area is a placeholder for filtering issues.</div>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This area is a placeholder for user's ability to add issues.</div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />

                <IssueAdd />
            </React.Fragment>
        );
    }
}

const element = <IssueList />;
ReactDOM.render(element, document.getElementById("contents"));