"use client";
import React from 'react';

import MemeMaker from "../components/RemeMaker";


export default function Home() {

	return (
		<div className="relative flex flex-col h-full">
			<main className="bg-[#1f2022]">
			<div className="bg-[url('/img/hearbackground.webp')] p-4 sm:min-h-screen min-h-[90vh] bg-center bg-no-repeat bg-cover flex justify-center">
			<div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
			<MemeMaker/>
					</div>
				</div>
			
			</main>
		</div>
	);
}
