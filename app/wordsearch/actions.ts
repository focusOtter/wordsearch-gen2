'use server'

import { cookiesClient } from '@/utils/amplifyUtils'

export const generateWordsFromBedrock = async () => {
	const { data, errors } =
		await cookiesClient.mutations.generateWordSearchWords({
			theme: 'a bird in a cage',
		})

	return data
}
export type saveWordsearchProps = {
	columns: number
	rows: number
	name: string
	wordBank: string[]
}

export const saveWordsearch = async (wordsearchInput: saveWordsearchProps) => {
	const { data, errors } = await cookiesClient.models.WordSearch.create({
		...wordsearchInput,
	})

	return data
}
