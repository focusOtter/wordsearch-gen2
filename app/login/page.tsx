'use client'

import {
	Authenticator,
	Text,
	View,
	useAuthenticator,
} from '@aws-amplify/ui-react'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { NavbarPublic } from '../components/NavbarPublic'
import { useRouter } from 'next/router'

function CustomAuthenticator() {
	const { user } = useAuthenticator((context) => [context.user])
	const searchParams = useSearchParams()

	useEffect(() => {
		if (user) {
			const redirectTo = searchParams.get('redirectTo')
			if (redirectTo) {
				redirect(redirectTo)
			} else {
				redirect('/wordsearch-list')
			}
		}
	}, [user, searchParams])

	return <Authenticator />
}

export default function Login() {
	return (
		<>
			<NavbarPublic />
			<Authenticator.Provider>
				<CustomAuthenticator />
			</Authenticator.Provider>
		</>
	)
}
