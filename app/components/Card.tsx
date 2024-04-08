import Link from 'next/link'
import { deleteWordsearch } from '../wordsearch/actions'

type Props = {
	title: string
	description: string
	bgColor: string
	id?: string
}
function Card({ id, title, description, bgColor }: Props) {
	return (
		<div className={`card card-compact w-96 ${bgColor} text-primary-content`}>
			<div className="card-body">
				{id ? (
					<Link href={`/wordsearch?id=${id}`}>
						<h2 className="card-title">{title}</h2>
						<p>{description}</p>
					</Link>
				) : (
					<>
						<h2 className="card-title">{title}</h2>
						<p>{description}</p>
					</>
				)}
			</div>
			{id && (
				<div className="card-actions justify-end m-4">
					<form action={deleteWordsearch}>
						<input type="text" hidden defaultValue={id} name="wordsearchId" />
						<button type="submit" className="btn btn-error">
							Delete
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default Card
