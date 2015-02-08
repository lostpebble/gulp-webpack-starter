var React = require('react');

var HelloComponent = React.createClass({
    render: function() {
        return (
            <div className="hello-component">
                <h1>Hello Wereld!</h1>
            </div>
        );
    }
});

module.exports = HelloComponent;