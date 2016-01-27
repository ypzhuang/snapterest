var React = require('react')
var ReactDOM = require('react-dom');
var Header = require('./Header.react')
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
  getInitialState: function() {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');

    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null;
    };
  },

  componentWillMount: function() {
    console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    //global object
    window.snapterest = { 
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  },
    
  render: function() {
    console.log('[Snapterest] StreamTweet: Running render()');
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={tis.props.tweet}
          onImageClick={this.props.onAddTweetToCollection} />
      </section>
    );
  },

  componentDidMount: function() {
    console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

    var componentDOMRepresentation = ReactDOM.findDOMNode(this);

    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;

  },

  componentWillReceiveProps: function(nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    var headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of charactres is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText: headerText
    });

    window.snapterest.numberOfReceivedTweets++;

  },

  componentWillUnmount: function() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

    delete window.snapterest;
  }
});


module.exports = StreamTweet;





















