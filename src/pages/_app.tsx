import '@reach/listbox/styles.css';
import '@reach/tooltip/styles.css';
import './base.scss';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { RadixProvider } from '@modulz/radix';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
import { Icon, Button } from '../components';

function Code({ children, className }) {
	const language = className.replace(/language-/, '');
	return (
		<Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						overflow: 'auto',
						marginBottom: 24,
						border: '1px solid var(--color-base-100)',
						borderRadius: 4,
						padding: 16,
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}

export default function App({ Component, pageProps }) {
	return (
		<RadixProvider>
			<MDXProvider components={{ Icon, Link, code: Code, Button }}>
				<Head>
					<meta name="keywords" content="ui, playbook, documented collection, components, guideline" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
					<meta name="msapplication-TileColor" content="#6469FF" />
					<meta name="theme-color" content="#6469FF" />
					<meta name="twitter:site" content="@raunofreiberg" />
					<meta name="twitter:creator" content="@raunofreiberg" />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<DefaultSeo
					title="UI Playbook"
					description="The documented collection of common UI components"
					openGraph={{
						type: 'website',
						url: 'https://uiplaybook.dev',
						title: 'UI Playbook',
						description: 'The documented collection of common UI components.',
						images: [
							{
								url: 'https://uiplaybook.dev/static/playbook.png',
								alt: 'UI Playbook',
							},
						],
					}}
				/>
				<header>
					<Link href="/">
						<a aria-label="Go to home page">
							<Icon icon="logo" />
						</a>
					</Link>
					<a
						href="https://github.com/raunofreiberg/ui-playbook"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open Github in a new tab"
					>
						<Icon icon="github" className="github" />
					</a>
				</header>
				<main>
					<Component {...pageProps} />
				</main>
			</MDXProvider>
		</RadixProvider>
	);
}
