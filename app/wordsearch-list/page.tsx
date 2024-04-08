import { cookiesClient } from '@/utils/amplifyUtils'
import Link from 'next/link'
import React from 'react'
import { NavbarPrivate } from '../components/NavbarPrivate'

async function WordSearchList() {
	let { data: wordsearches } = await cookiesClient.models.WordSearch.list()

	return (
		<main>
			<NavbarPrivate />
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
