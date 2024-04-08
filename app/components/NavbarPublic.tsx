import Link from 'next/link'

export function NavbarPublic() {
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
						<a href={'/wordsearch-list'}>My Saved List</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
