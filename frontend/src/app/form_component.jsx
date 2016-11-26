import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import ReactFauxDOM from 'react-faux-dom';

class FormComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
						value: props.value, 
						values: [
							{text: 'New', desc: ''},
							{text: 'Open...', desc: 'ctrl + o'},
							{text: 'Save as...', desc: 'ctrl + r'},
							{text: 'New', desc: ''},
							{text: 'New', desc: ''},																												
						]
					};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event){
		// event.persist();
		var e = event.target.value;
		this.setState((prevState,props) => ({value: e}));
		// this.setState({value: event.target.value});
	}

	componentDidMount() {
		// $('.ui.dropdown').dropdown();	
	}

	render(){

		var list = ReactFauxDOM.createElement('ul');

		  d3.select(list)
		    .selectAll('li')
		    .data([1,2,3]) // 1, 2, 3...
		    .enter()
		    .append('li')
		    .text(function (d) {
		      return d
		    })
		    .on('click', function(d){
		    	console.log('sushmit',d);
		    })	

		return (
			<form>
				<input name="test" value={this.state.value} onChange={this.onInputChange}/>

				<div className='renderedD3'>
				    {list.toReact()}
				</div>				

				  <Dropdown text='File'>
				    <Dropdown.Menu>
				      <Dropdown.Item text='New' />
				      <Dropdown.Item text='Open...' description='ctrl + o' />
				      <Dropdown.Item text='Save as...' description='ctrl + s' />
				      <Dropdown.Item text='Rename' description='ctrl + r' />
				      <Dropdown.Item text='Make a copy' />
				      <Dropdown.Item icon='folder' text='Move to folder' />
				      <Dropdown.Item icon='trash' text='Move to trash' />
				      <Dropdown.Divider />
				      <Dropdown.Item text='Download As...' />
				      <Dropdown.Item text='Publish To Web' />
				      {/* item text can also be defined as children */}
				      <Dropdown.Item>E-mail Collaborators</Dropdown.Item>
				    </Dropdown.Menu>
				  </Dropdown>

			</form>
		)
	}

}

export default FormComponent;