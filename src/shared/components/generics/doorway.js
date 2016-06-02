import React from "react";
import {browserHistory} from 'react-router';

var GameObject = require('./gameObject');

var resources = require('resources');

/**
 * props:
 * description - A description to of the object to be displayed to the player on click
 * image - What the object should look like
 * actions - a list of actions. All actions have the following properties:
 * 		image - the sprite rendered for the action's button
 *		conditions - (optional) Any requirements which must be met before the action can be used. All conditions have the following properties:
 *			cName - the variable name against which the condition will be checked
 *			op - The type of varification. (valid values: 'equal', '!equal', 'greater', 'less')
 *			val - The value against which the cookie variable will be checked.
 *		result - a function that is run when the action is used
 * destination - the destination to which this doorway leads
 */
var doorway = React.createClass(
{
	getInitialState: function()
	{
		actions = [];

		if(this.props.actions != null)
		{
			actions = this.props.actions;
		}

		var link =	{
						image: "doorAction",
						result: this.linkRoom
					};

		return {actions: actions};
	},

	render: function()
	{
		return	<GameObject description={this.props.description} image={this.props.image} actions={this.state.actions} />;
	},

	linkRoom: function()
	{
		browserHistory.push(this.props.destination);
	}
});

module.exports = doorway;
