import { PropsWithChildren } from 'react'

import Footer from '@/app/layout/footer/Footer'
import Header from '@/app/layout/header/Header'
import '@/assets/styles/globals.scss'
import '@/assets/styles/normalize.scss'
import '@/assets/styles/react-select.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'

export const metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@prisma.com']
	}
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<div>
						<Header />
						<main>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
