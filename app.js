// const GroceryListItem = ['eggs', 'bacon'];
const App = () => (
	<div>
		<h2> Grocery list </h2>
		<GroceryList list={['eggs', 'cheese']}/>
	</div>
);

const GroceryList = (props) => (
	<ul> 
		{props.list.map(list => 
			<GroceryListItem list={list} />
		)}
	</ul>
);

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false
		};
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		let style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}> {this.props.list} </li>
		);
	}

}


ReactDOM.render(<App />, document.getElementById("app"))

