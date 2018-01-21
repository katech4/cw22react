var GalleryItem = React.createClass({
    render: function() {
    return React.createElement('h2', {}, 'Pierwszy komponent');
}
});

var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var image = {
  name: 'Film',
  src: 'http://imgur.com/n8OYCzR.png'
};
var element = React.createElement(GalleryItem, {image: image});


var Movie = React.createClass({  
    render: function(){
	return React.createElement('h3', {}, 'Drugi komponent');
} 
});

var Movie = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var image = {
  name: 'Film',
  src: 'http://imgur.com/n8OYCzR.png'
};
var element = React.createElement(Movie, {image: image});
  
ReactDOM.render(element, document.getElementById('app'));