var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
    },

    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Film o hobbitach',
    },
    {
        id: 4,
        title: 'Gwiezdne Wojny',
        desc: 'Dawno, dawno temu w odległej galaktyce',
    }

];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {
                content: this.props.movie.title
            }),
            React.createElement(MovieDesc, {
                content: this.props.movie.desc
            })
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        content: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('h2', {}, this.props.content)
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        content: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('p', {}, this.props.content)
    }
});

var MovieList = React.createClass({
    propTypes: {
        content: React.PropTypes.array.isRequired,
    },
    render: function () {
        var moviesElements = this.props.content.map(function (movie) {
            return React.createElement(Movie, {
                movie: movie,
                key: movie.id
            })
        });

        return React.createElement('ul', {}, moviesElements)
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {
        content: movies
    })
);

ReactDOM.render(element, document.getElementById('app'));