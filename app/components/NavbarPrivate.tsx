import Link from 'next/link'

import SignOutButton from './SignOutButton'

export async function NavbarPrivate() {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link href={'/'} className="btn btn-ghost text-xl">
					WordFinder AI
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={'/wordsearch-list'}>My Saved List</Link>
					</li>
					<li>
						<SignOutButton />
					</li>
				</ul>
			</div>
		</div>
	)
}
