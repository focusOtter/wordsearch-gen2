'use server'

import { cookiesClient } from '@/utils/amplifyUtils'

export const generateWordsFromBedrock = async (theme: string) => {
	const { data, errors } =
		await cookiesClient.mutations.generateWordSearchWords({
			theme: theme,
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
	console.log('the deets', wordsearchInput)
	// const { data, errors } = await cookiesClient.models.WordSearch.create({
	// 	...wordsearchInput,
	// })

	// return data
}
