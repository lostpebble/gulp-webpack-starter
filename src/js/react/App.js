var HelloComponent = require('./components/HelloComponent');
var React = require('react');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <HelloComponent />
            </div>
        );
    }
});

module.exports = App;