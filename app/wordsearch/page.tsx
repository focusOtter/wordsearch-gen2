'use client'
import React, { Suspense, useEffect, useState } from 'react'
import WordSearch from '@blex41/word-search'
import clsx from 'clsx'

import { extractAndFormatArray } from '@/utils/api'
import {
	fetchWordsearch,
	generateWordsFromBedrock,
	saveWordsearch,
} from './actions'
import { NavbarPrivate } from '../components/NavbarPrivate'
import { useSearchParams } from 'next/navigation'

function WordSearchApp() {
	const [cols, setCols] = useState(6)
	const [rows, setRows] = useState(6)
	const [words, setWords] = useState('')

	const [wordTheme, setWordTheme] = useState('')
	const [isDisabled, setIsDisabled] = useState(false)
	const [buttonText, setButtonText] = useState('Generate Words')
	const [currWordSearchId, setWordSearchId] = useState<undefined | string>()

	const [grid, setGrid] = useState([])

	const searchParams = useSearchParams()
	useEffect(() => {
		const wordsearchId = searchParams.get('id')
		wordsearchId ? setWordSearchId(wordsearchId) : setWordSearchId(undefined)
		console.log(wordsearchId)
		if (wordsearchId) {
			//redirect to the wordsearch page
			fetchWordsearch(wordsearchId).then(({ data }) => {
				console.log(data)
				setCols(data.columns)
				setRows(data.rows)
				setWords(data.wordBank.join(','))
				setWordTheme(data.name)

				return
			})
		}
	}, [searchParams])

	const handleGenerate = () => {
		const dictionary = words.split(',').map((word) => word.trim())
		//remove the empty string if it exists
		if (dictionary.at(-1) === '') {
			dictionary.pop()
		}
		const options = {
			cols,
			rows,
			disabledDirections: ['SE', 'SW'], //only backwards, and backwards diagonals allowed
			dictionary,
			upperCase: true,
		}

		const ws = new WordSearch(options)
		const pickedWords = ws.data.words.map(
			(word: { clean: Boolean }) => word.clean
		)
		setGrid(ws.data.grid)
	}

	const handleThemeGenerationButtonClick = async (theme: string) => {
		setIsDisabled(true)
		setButtonText('Generating...')
		const data = await generateWordsFromBedrock(theme)
		setIsDisabled(false)
		const wordsArr = extractAndFormatArray(data)
		setButtonText('Generate Words')
		setWords(wordsArr.toString())

		console.log(data)
	}

	const handleWordsearchSave = async () => {
		const data = await saveWordsearch({
			id: currWordSearchId,
			columns: cols,
			rows,
			name: wordTheme,
			wordBank: words.split(','),
		})
		console.log(data)
	}

	return (
		<>
			<div className="p-4 md:p-8  min-h-screen">
				{/* Init form creation */}
				<div className="max-w-xl mx-auto">
					<section className="hideable">
						{/* Grid Size Selection */}

						<div className="flex flex-wrap -mx-2 mb-4">
							<div className="w-1/2 px-2">
								<label className="block  mb-2">
									Columns:
									<input
										type="number"
										value={cols}
										onChange={(e) => setCols(Number(e.target.value))}
										className="w-full mt-1 p-2 border rounded"
									/>
								</label>
							</div>
							<div className="w-1/2 px-2">
								<label className="block  mb-2">
									Rows:
									<input
										type="number"
										value={rows}
										onChange={(e) => setRows(Number(e.target.value))}
										className="w-full mt-1 p-2 border rounded"
									/>
								</label>
							</div>
						</div>

						{/* Word Input */}
						<div className="mb-4">
							<label className="block  mb-2">
								Enter a theme to autogenerate🪄
								<input
									value={wordTheme}
									onChange={(e) => setWordTheme(e.target.value)}
									placeholder="A mega trex"
									className="w-full mt-1 p-2 border rounded input-bordered input-secondary"
								></input>
							</label>
							<button
								disabled={isDisabled}
								onClick={() => handleThemeGenerationButtonClick(wordTheme)}
								className={clsx('text-white px-4 py-2 rounded', {
									'bg-pink-500  hover:bg-pink-600': !isDisabled,
									'bg-slate-400 cursor-not-allowed': isDisabled,
								})}
							>
								{buttonText}
							</button>
						</div>
						{/* Word Input */}
						<div className="mb-4">
							<label className="block  mb-2">
								Words (comma-separated):
								<textarea
									value={words}
									onChange={(e) => setWords(e.target.value)}
									rows={4}
									placeholder="Enter words separated by commas."
									className="w-full mt-1 p-2 border rounded"
								></textarea>
							</label>
						</div>

						{/* Generate Button */}
						<div className="mb-4 flex justify-between">
							<button
								onClick={handleGenerate}
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
							>
								Generate Grid
							</button>

							<button
								onClick={handleWordsearchSave}
								className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
							>
								Save Grid Details
							</button>
						</div>
					</section>
					{/* Display Grid */}
					{grid.length > 0 && (
						<div className="printable-grid bg-white p-4 rounded shadow text-black">
							<table className="w-full text-center">
								<tbody>
									{grid.map((row: string[], rowIndex) => (
										<tr key={rowIndex}>
											{row.map((cell: string, cellIndex: number) => (
												<td key={cellIndex} className="border p-2">
													{cell}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* ... rest of your component code ... */}

					{/* Word Bank */}
					<div className="mt-6">
						<h2 className="text-xl font-semibold mb-4 ">Word Bank:</h2>
						<div className="flex flex-wrap">
							{words.split(',').map((word, index) => (
								<span
									key={index}
									className="m-1 p-2 bg-white rounded shadow text-black "
								>
									{word}
								</span>
							))}
						</div>
					</div>

					{/* Print Button */}
					<div className="hideable mt-4">
						<button
							onClick={() => window.print()}
							className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
						>
							Print Grid
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
const SuspendedWordsearchPage = () => {
	return (
		<>
			<NavbarPrivate />
			<Suspense>
				<WordSearchApp />
			</Suspense>
		</>
	)
}
export default SuspendedWordsearchPage
