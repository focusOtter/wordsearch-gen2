'use server'

import { cookiesClient } from '@/utils/amplifyUtils'
import { revalidatePath } from 'next/cache'

export const generateWordsFromBedrock = async (theme: string) => {
	const { data, errors } =
		await cookiesClient.mutations.generateWordSearchWords({
			theme: theme,
		})

	return data
}
export type saveWordsearchProps = {
	id?: string
	columns: number
	rows: number
	name: string
	wordBank: string[]
}

export const saveWordsearch = async (wordsearchInput: saveWordsearchProps) => {
	if (!wordsearchInput.id) {
		const { data, errors } = await cookiesClient.models.WordSearch.create({
			...wordsearchInput,
		})
	} else {
		const { data, errors } = await cookiesClient.models.WordSearch.update({
			id: wordsearchInput.id,
			...wordsearchInput,
		})
	}
	return
}

export const fetchWordsearch = async (wordsearchId: string) => {
	const data = await cookiesClient.models.WordSearch.get({
		id: wordsearchId,
	})

	return data
}

export const deleteWordsearch = async (formdata: FormData) => {
	const wordsearchId = formdata.get('wordsearchId') as string

	await cookiesClient.models.WordSearch.delete({
		id: wordsearchId,
	})

	revalidatePath('/wordsearch')
}
