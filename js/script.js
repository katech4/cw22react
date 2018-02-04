var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	src: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9d/Harry-Potter-Wizarding-World-Weekly.jpg/revision/latest/scale-to-width-down/670?cb=20160914202759'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	src:'https://vignette.wikia.nocookie.net/fanowska-krol-lew/images/f/fe/Asha-_Kr%C3%B3l_Lew.jpg/revision/latest?cb=20170623150420&path-prefix=pl'
  },
    {
    id: 3,
    title: 'Zakręceni',
    desc: 'Film o królu księżniczce uwięzioneh w wieży',
	src:'http://www.tapeciarnia.pl/tapety/normalne/228390_bajka_zaplatani.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movieX: React.PropTypes.object.isRequired
  },
  
  render: function() {
    return React.createElement('li', {},
      React.createElement(MovieTitle, {titleX: this.props.movieX.title}),
      React.createElement(MovieDescription, {descX: this.props.movieX.desc, srcX: this.props.movieX.src})
    );
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    titleX: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return React.createElement('h2', {}, this.props.titleX)
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    descX: React.PropTypes.string.isRequired,
    srcX: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('p', {}, this.props.descX),
        React.createElement('img', {src: this.props.srcX, width: 200})
      )
    )
  }
});

var MoviesList = React.createClass({
  propTypes: {
     moviesX: React.PropTypes.array.isRequired
  },
  
  render: function() {
    var moviesElements = this.props.moviesX.map(function(movie, id) {
      return React.createElement(Movie, {key: id, movieX: movie})
    });
    
    return (
      React.createElement('ul', {}, moviesElements)
    )
  }
})

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {moviesX: movies})
);
  
ReactDOM.render(element, document.getElementById('app'));