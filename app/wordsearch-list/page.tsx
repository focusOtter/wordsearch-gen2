import { cookiesClient } from '@/utils/amplifyUtils'
import Link from 'next/link'
import React from 'react'
import { NavbarPrivate } from '../components/NavbarPrivate'
import Card from '../components/Card'

async function WordSearchList() {
	let { data: wordsearches } = await cookiesClient.models.WordSearch.list()
	const formatter = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	})
	return (
		<>
			<NavbarPrivate /> 
			<main className="mx-8">
				<Link className="btn btn-success mb-8" href="/wordsearch">
					Create Wordsearch
				</Link>
				<section className="flex justify-around">
					{wordsearches.map((wordsearch) => (
						<Card
							id={wordsearch.id}
							key={wordsearch.id}
							title={wordsearch.name}
							description={`Created: ${formatter.format(
								new Date(wordsearch.createdAt)
							)}`}
							bgColor="bg-primary"
						/>
					))}
				</section>
			</main>
		</>
	)
}

export default WordSearchList
