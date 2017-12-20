import React from 'react'

const Comment = props =>
	<p className="well">{props.comment.comment}
		<br />
		<b>por: {props.comment.user && props.comment.user.name}</b>
	</p>

export default Comment