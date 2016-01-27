var React = require('react');
var ReactDOM = require('react-dom');


var Application = require('./components/Application.react');
ReactDOM.render(<Application />, document.getElementById('react-application'));

/**
var h1 = React.createElement('h1', { className: 'header', key: 'header' }, "This is React");
var p = React.createElement('p', { className: 'content', key: 'content' }, "And that's how it works.");
var listOfItems = <ul className="list-of-items" key="ul" >
                       <li className="item-1">Item 1</li>
                       <li className="item-2">Item 2</li>
                       <li className="item-3">Item 3</li>
                  </ul>;

var reactFragment = [h1, p, listOfItems];
var section = React.createElement('section', { className: 'container' }, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'))

*/

/*
var ReactClass  = React.createClass({
	getInitialState: function () {
      return {
      	isHeaderHidden: false      	
      };
	},

	handleClick: function () {
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden			
		});
	},

	render: function() {
		var title = 'Stateful React Component';

		var headerElement = React.createElement('h1', { classsName: 'header', key: 'header' } ,title);
		var buttonElement = React.createElement('button', { classsName: 'btn btn-default',onClick: this.handleClick, key: 'button' } ,'Toggle header');
		if (this.state.isHeaderHidden) {
			return  React.createElement('div', null ,[ buttonElement]);
		}

        //var header = this.props.tweets.length + ' Latest Tweets';
		return  React.createElement('div', null ,[ buttonElement, headerElement]);
	}
});
var reactComponentElement = React.createElement(ReactClass)
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

*/
























