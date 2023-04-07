import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<title>MyTop - наш лучший топ</title>
				<link rel="icon" href="/favicon.ico"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Noto+Sans:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	);
}
