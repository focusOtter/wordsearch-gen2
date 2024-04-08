import Card from './components/Card'
import Hero from './components/Hero'
import { NavbarPublic } from './components/NavbarPublic'

const cardDetails = [
	{
		id: 1,
		title: 'NextJS',
		bgColor: `bg-primary`,
		description:
			'This application uses the NextJS app router and combines both client-side and server-side rendering! ',
	},
	{
		id: 2,
		title: 'AWS Amplify Gen 2',
		bgColor: `bg-warning`,
		description:
			'With Amplify Gen 2, developers use Typescript to interact with their AWS services. This provides a safe and more readable way of building fullstack serverless applications🚀',
	},
	{
		id: 3,
		title: 'Focus Otter approved',
		bgColor: `bg-secondary`,
		description:
			'To learn more about how this application came to life, feel free to checkout the repo, blog post, or video!',
	},
]
function HomePage() {
	return (
		<main>
			<Hero />
			<article className="flex flex-wrap justify-around my-10 gap-10">
				{cardDetails.map((card) => (
					<Card
						key={card.id}
						title={card.title}
						description={card.description}
						bgColor={card.bgColor}
					/>
				))}
			</article>
		</main>
	)
}

export default HomePage
