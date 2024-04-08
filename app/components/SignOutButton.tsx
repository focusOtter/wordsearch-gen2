'use client'

import { signOut } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'

function SignOutButton() {
	const router = useRouter()
	const handleSignoutClick = async () => {
		await signOut()
		router.replace('/')
	}
	return <button onClick={handleSignoutClick}>Sign Out</button>
}

export default SignOutButton
