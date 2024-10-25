"use client";

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from 'react'

export default function Home() {
	//     const [isVisible, setIsVisible] = useState(false);
	//   useEffect(() => {
	//     // Load 98.css
	//     const link = document.createElement('link')
	//     link.href = 'https://unpkg.com/98.css'
	//     link.rel = 'stylesheet'
	//     document.head.appendChild(link)
	//     const timer = setTimeout(() => {
	//         setIsVisible(true);
	//       }, 500); // 0.5 segundos antes de aparecer

	//     return () => {
	//       document.head.removeChild(link)
	//       clearTimeout(timer)
	//     }
	//   }, [])

	return (
		<div className="relative flex flex-col h-screen">
			<main className="bg-[#1f2022]">
				<div className="bg-[url('/img/hearbackground.webp')] p-4 h-screen bg-center bg-no-repeat bg-cover flex justify-center">
					<div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
						<div className="flex sm:flex-row flex-col gap-3 justify-center items-center">
							<div>
								<div className="window w-full">
									<div className="title-bar flex justify-between ">
										<div className="title-bar-text">
											✨ REMILIA CULT OFFICIAL WEBSITE ✨
										</div>
										<div className="title-bar-controls ml-auto">
											<button aria-label="Help"></button>
											<button aria-label="Close"></button>
										</div>
										 
									</div>
									<div className="window-body h-full text-lg flex flex-col justify-end bg-[url('/img/new-background.webp')] bg-center bg-no-repeat bg-cover">
										<div className="border h-full flex flex-col items-center">
											<div
												className="relative shadow-black/5 shadow-none rounded-large"
												style={{ maxWidth: "450px" }}
											>
												<Image
													src="/logo.png"
													className={`relative mt-10 z-10 transition-opacity duration-500 ease-in opacity-100 rounded-large `}
													width={450}
													height={450}
													alt="logo"
												/>
											</div>
											<p className="sm:text-sm text-[14px] text-white font-world">
												STOP TRADING
											</p>
											<p className="sm:text-sm text-[14px] text-white font-world">
												START BELIEVING
											</p>
											<div className="flex flex-row gap-2 mt-7">
												<div className="w-full flex justify-center">
													<div
														className="relative shadow-black/5 shadow-none rounded-large"
														style={{ maxWidth: "fit-content" }}
													>
														<Image
															src="/head.png"
															className="relative mt-10 z-10 opacity-100 transition-opacity duration-300 sm:w-full w-[280px]"
															width={280}
															height={280}
															alt="head"
														/>
													</div>
												</div>
												<div className="w-full font-xp flex flex-col justify-center items-center gap-3 p-0">
													<h1 className="sm:text-3xl text-xl text-white font-world">
														Join the Cult
													</h1>
													<div
														className="flex flex-col items-center justify-center gap-1 flex-wrap 
                    "
													>
														{" "}
														{
															// w-[200px] sm:w-[200px]
														}
														<button className="sm:text-md text-sm w-full">
															<a
																href="https://x.com/RemiliaCultSol/"
																target="_blank"
																rel="noreferrer"
															>
																Twitter
															</a>
														</button>
														<button className="sm:text-md text-sm w-full">
															<a
																href="https://t.me/remiliacultmunity2"
																target="_blank"
																rel="noreferrer"
															>
																Telegram
															</a>
														</button>
														<button className="sm:text-md text-sm w-full">
															<a
																href="https://dexscreener.com/solana/FKtyCitA4fjUxQEGxC1voXx9F8bLTuNkPGRbxwoq9VwC"
																target="_blank"
																rel="noreferrer"
															>
																Dex
															</a>
														</button>
														<button className="sm:text-md text-sm w-full">
															<a
																href="https://raydium.io/swap/?inputMint=sol&outputMint=8wZvGcGePvWEa8tKQUYctMXFSkqS39scozVU9xBVrUjY"
																target="_blank"
																rel="noreferrer"
															>
																Raydium
															</a>
														</button>
														<button className="sm:text-md text-sm w-full">
															<a
																href="https://jup.ag/swap/Remilia-SOL"
																target="_blank"
																rel="noreferrer"
															>
																Jupiter
															</a>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="status-bar">
										<p className="status-bar-field">
											Press F1 if you are a Remilia
										</p>
										<p className="status-bar-field">Slide 1</p>
										<p className="status-bar-field">CPU Usage: 14%</p>
									</div>
								</div>
							</div>
							<div>
								<div className="flex flex-col w-full gap-3">
									{/* <div className="w-full">
              <div className="window">
                <div className="title-bar">
                  <div className="title-bar-text">✨ Remilia Cult ✨</div>
                </div>
                <div className="window-body">
                  <p className="text-md">How Remilia you are?</p>
                  <div className="field-row">
                    <label htmlFor="range26">Low</label>
                    <input id="range26" type="range" min="1" max="11" defaultValue="10" />
                    <label htmlFor="range27">High</label>
                  </div>
                </div>
                <div className="status-bar">
                  <p className="status-bar-field">Press F1 for help</p>
                  <p className="status-bar-field">Slide 1</p>
                  <p className="status-bar-field">CPU Usage: 14%</p>
                </div>
              </div>
            </div> */}
									<div className="flex sm:flex-col gap-3">
										<div
											className="relative shadow-black/5 shadow-none rounded-large"
											style={{ maxWidth: "240px" }}
										>
											<Image
												src="/no-sell-button.jpeg"
												className="relative z-10 opacity-100 transition-opacity duration-300 aspect-square"
												width={240}
												height={240}
												alt="meme"
											/>
										</div>
										<div
											className="relative shadow-black/5 shadow-none rounded-large"
											style={{ maxWidth: "240px" }}
										>
											<Image
												src="/remeliameme1.jpeg"
												className="relative z-10 opacity-100 transition-opacity duration-300 sm:aspect-auto aspect-square"
												width={240}
												height={240}
												alt="meme"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full mt-[10px]">
							<div className="window">
								<div className="title-bar flex justify-between">
									<div className="title-bar-text">✨ CA ✨</div>
									<div>
										<div className="title-bar-controls">
											<button aria-label="Help"></button>
											<button aria-label="Close"></button>
										</div>
									</div>
								</div>
								<div className="window-body">
									<p className="sm:text-2xl text-[14px]">
										8wZvGcGePvWEa8tKQUYctMXFSkqS39scozVU9xBVrUjY
									</p>
								</div>
								<div className="status-bar">
									<p className="status-bar-field">
										Press F1 if you are a Remilia
									</p>
									<p className="status-bar-field">Slide 1</p>
									<p className="status-bar-field">CPU Usage: 14%</p>
								</div>
							</div>
						</div>
						<div className="w-full mt-[10px]">
							<div className="window">
								<div className="title-bar flex justify-between">
									<div className="title-bar-text">✨ CEX TO BUY REMILIA ✨</div>
									<div>
										{/* <div className="title-bar-controls">
              <button aria-label="Help"></button>
              <button aria-label="Close"></button>
            </div> */}
									</div>
								</div>
								<div className="window-body">
									<div className="flex flex-wrap justify-around">
										<Link
											href="https://bingx.com/en/spot/REMILIAUSDT/"
											target="_blank"
											className="button"
										>
											{" "}
											<p className="sm:text-2xl text-[14px]">BINGX</p>
										</Link>
										<Link
											href="https://www.coinex.com/en/exchange/remilia-usdt"
											target="_blank"
											className="button"
										>
											{" "}
											<p className="sm:text-2xl text-[14px]">COINEX</p>
										</Link>
										<Link
											href="https://www.gate.io/pilot/solana/remilia-remilia"
											target="_blank"
											className="button"
										>
											{" "}
											<p className="sm:text-2xl text-[14px]">GATE.IO</p>
										</Link>
										<Link
											href="https://www.xt.com/en/trade/remilia_usdt"
											target="_blank"
											className="button"
										>
											{" "}
											<p className="sm:text-2xl text-[14px]">XTEX</p>
										</Link>
										<Link
											href="https://coinmun.com/coins/remilia"
											target="_blank"
											className="button"
										>
											{" "}
											<p className="sm:text-2xl text-[14px]">COINMUN</p>
										</Link>
										<Link
											href="https://web3.bitget.cloud/surl/1BXBxW"
											target="_blank"
											className="button"
										>
											{" "}
											<p className="sm:text-2xl text-[14px]">BITGET</p>
										</Link>
									</div>
								</div>
								<div className="status-bar">
									<p className="status-bar-field">JOIN THE CULT</p>
									<p className="status-bar-field">STOP TRADING</p>
									<p className="status-bar-field">START BELIEVING</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[url('/wanted.gif')] sm:h-screen h-[50vh] bg-center bg-no-repeat bg-cover flex justify-center items-center">
					<div
						className="relative shadow-black/5 shadow-none rounded-large"
						style={{ maxWidth: "fit-content" }}
					>
						<Image
							src="/remilia-love.png"
							className="relative z-10 opacity-100 transition-opacity duration-300 rounded-large"
							alt="soon"
							width={450}
							height={450}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
