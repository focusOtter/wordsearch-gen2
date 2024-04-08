'use client'

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import { redirect, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import { NavbarPublic } from '../components/NavbarPublic'

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
				<Suspense>
					<CustomAuthenticator />
				</Suspense>
			</Authenticator.Provider>
		</>
	)
}
