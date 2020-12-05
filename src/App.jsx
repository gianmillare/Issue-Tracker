// class HelloWorld extends React.Component {
//     render() {
//         const continents = ['Africa', 'Asia', 'America', 'Australia', 'Europe'];
//         const helloContinents = [];

//         for (var i = 0; i < continents.length; i++) {
//             helloContinents.push(`Hello ${continents[i]}!`);
//         }

//         const message = helloContinents.join(' ');

//         return (
//             <div title='Outer div'>
//                 <h1>{message}</h1>
//             </div>
//         );
//     }
// }

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This area will hold all the issue filters!</div>
        );
    }
}

// Works with IssueRow
class IssueTable extends React.Component {
    render() {
        // define the style of the IssueRows here
        const rowStyle = {border: "1px solid silver", padding: 4};
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={rowStyle}>ID</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>

                <tbody>
                    <IssueRow rowStyle={rowStyle} issue_id={1} issue_title="Error when adding a new issue."/>
                    <IssueRow rowStyle={rowStyle} issue_id={2} issue_title="Panel is missing styling on corners."/>
                </tbody>
            </table>
        );
    }
}

// Works with IssueTable
class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return (
            <tr>
                <td style={style}>{this.props.issue_id}</td>
                <td style={style}>{this.props.issue_title}</td>
            </tr>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This area will hold a form to add an issue!</div>
        );
    }
}

class IssueList extends React.Component{
    render() {
        return (
            <React.Fragment>
                {/* Insert the title of the App */}
                <h1>Issue Tracker</h1>

                {/* Insert the IssueFilter class */}
                <IssueFilter />
                <hr/>

                {/* Insert the IssueTable class */}
                <IssueTable />
                <hr />

                {/* Insert the IssueAdd class */}
                <IssueAdd />
            </React.Fragment>
        )
    }
}
const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));