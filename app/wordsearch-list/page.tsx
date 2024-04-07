import { cookiesClient } from '@/utils/amplifyUtils'
import Link from 'next/link'
import React from 'react'

async function WordSearchList() {
	const { data: wordsearches } = await cookiesClient.models.WordSearch.list()
	console.log(wordsearches)
	return (
		<main>
			<h1>WordSearchList</h1>
			<section>
				{wordsearches.map((wordsearch) => (
					<div key={wordsearch.id}>{wordsearch.name}</div>
				))}
			</section>
			<Link href="/wordsearch">Create Wordsearch</Link>
		</main>
	)
}

export default WordSearchList
