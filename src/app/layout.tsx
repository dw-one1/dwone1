import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Carregando as fontes locais
const clacon2 = localFont({
	src: "./fonts/clacon2.woff2",
	variable: "--font-clacon",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Remilia Cult",
	description: "Start Belivieving",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://unpkg.com/98.css" />
			</head>
			<body className={`${clacon2.variable} antialiased`}>{children}</body>
		</html>
	);
}
