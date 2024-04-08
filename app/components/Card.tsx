import React from 'react'

type Props = {
	title: string
	description: string
	bgColor: string
}
function Card({ title, description, bgColor }: Props) {
	return (
		<div className={`card w-96 ${bgColor}  text-primary-content`}>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Card
