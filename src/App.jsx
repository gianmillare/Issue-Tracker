class HelloWorld extends React.Component {
    render() {
        const continents = ['Africa', 'Asia', 'America', 'Australia', 'Europe'];
        const helloContinents = [];

        for (var i = 0; i < continents.length; i++) {
            helloContinents.push(`Hello ${continents[i]}!`);
        }

        const message = helloContinents.join(' ');

        return (
            <div title='Outer div'>
                <h1>{message}</h1>
            </div>
        );
    }
}

const element = <HelloWorld />;
ReactDOM.render(element, document.getElementById('contents'));