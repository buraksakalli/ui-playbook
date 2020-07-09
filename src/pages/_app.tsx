import React from 'react';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { RadixProvider, Tooltip, Button } from '@modulz/radix';
import { Icon } from '../components';
import './base.scss';

export default function App({ Component, pageProps }) {
	return (
		<RadixProvider>
			<MDXProvider components={{ Icon, Tooltip, Button }}>
				<Head>
					<meta name="keywords" content="ui playbook" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
					<meta name="msapplication-TileColor" content="#6469FF" />
					<meta name="theme-color" content="#6469FF" />
				</Head>
				<DefaultSeo
					title="UI Playbook"
					description="Recipes for common UI components"
					openGraph={{
						type: 'website',
						url: 'https://uiplaybook.dev',
						title: 'UI Playbook',
						description: 'UI Playbook is a documented collection of common UI components',
						images: [
							{
								url: '/static/playbook.png',
								alt: 'UI Playbook',
							},
						],
					}}
				/>
				<header>
					<Link href="/">
						<a>
							<Icon icon="logo" />
						</a>
					</Link>
					<a
						href="https://github.com/raunofreiberg/ui-playbook"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open Github"
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
