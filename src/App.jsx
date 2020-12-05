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

class IssueTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>

                <tbody>
                    <IssueRow />
                    <IssueRow />
                </tbody>
            </table>
        );
    }
}

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