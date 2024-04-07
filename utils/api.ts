export function extractAndFormatArray(apiResponse: string): string[] {
	// Regular expression to find the array portion in the response
	// It looks for the '[' character, followed by any characters (including new lines), and then the ']' character
	const arrayRegex = /\[.*?\]/s
	const match = apiResponse.match(arrayRegex)

	if (match) {
		// Replace escaped double quotes with actual double quotes
		let formattedArrayString = match[0].replace(/\\\"/g, '"')

		// Remove newline escape sequences (\n) from the string
		formattedArrayString = formattedArrayString.replace(/\\n/g, '')

		try {
			// Parse the formatted string as JSON to convert it into an array
			const wordsArray = JSON.parse(formattedArrayString)
			return wordsArray
		} catch (e) {
			console.error('Error parsing JSON:', e)
			return []
		}
	} else {
		console.error('No array found in the response')
		return []
	}
}
