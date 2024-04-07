'use client'

import {
	Authenticator,
	Text,
	View,
	useAuthenticator,
} from '@aws-amplify/ui-react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const components = {
	Header() {
		return (
			<View textAlign="center">
				<Text>
					<span style={{ color: 'white' }}>Authenticator Header</span>
				</Text>
			</View>
		)
	},
}

function CustomAuthenticator() {
	const { user } = useAuthenticator((context) => [context.user])

	useEffect(() => {
		if (user) {
			redirect('/wordsearch-list')
		}
	}, [user])

	return <Authenticator components={components} />
}

export default function Login() {
	return (
		<Authenticator.Provider>
			<CustomAuthenticator />
		</Authenticator.Provider>
	)
}
