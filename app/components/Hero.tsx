import Link from 'next/link'
import herobg from '@/public/herobg.png'
import Image from 'next/image'

function Hero() {
	return (
		<>
			<div className="hero min-h-screen">
				<Image
					alt="fractals"
					src={herobg}
					placeholder="blur"
					quality={100}
					fill
					sizes="90vw"
					style={{
						objectFit: 'cover',
						filter: 'blur(0px)',
					}}
				/>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<div className="card w-96 glass">
							<div data-theme="dark" className="card-body rounded-md">
								<h2 className="card-title mb-5 text-4xl font-bold text-center">
									WordFinder AI
								</h2>
								<p className="mb-5">
									An app for my wife, but with the help of NextJS and AWS
									Amplify, it&apos;s now available to all of you!
								</p>
								<Link href="/wordsearch" className="btn btn-success">
									Create a wordsearch
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
