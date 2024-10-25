// 'use client'

// import { useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Home() {
//   useEffect(() => {
//     // Load 98.css
//     const link = document.createElement('link')
//     link.href = 'https://unpkg.com/98.css'
//     link.rel = 'stylesheet'
//     document.head.appendChild(link)

//     return () => {
//       document.head.removeChild(link)
//     }
//   }, [])

//   return (
//     <div style={{
//       fontFamily: '"MS Sans Serif", sans-serif',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       backgroundColor: 'rgb(137 103 3 / 50%)',
//       // backgroundImage: 'url("/remilia-love.png")',
//       // backgroundRepeat: 'repeat',
//       // backgroundSize:'300px 100px' , // Mantém o tamanho original da imagem
//       // filter: 'blur(2px)',

//     }}>
//         <div style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundImage: 'url("/remilia-love.png")',
//     backgroundRepeat: 'repeat',
//     backgroundSize: '300px 100px',
//     filter: 'blur(3px)', // Aplica desfoque na camada de fundo
//     zIndex: -1, // Mantém o fundo atrás do conteúdo
//   }}></div>
//       <header  style={{ marginBottom: '1rem' }}>
//         {/* <div className="title-bar">
//           <div className="title-bar-text">Remilia</div>
//           <div className="title-bar-controls">
//             <button aria-label="Minimize"></button>
//             <button aria-label="Maximize"></button>
//             <button aria-label="Close"></button>
//           </div>
//         </div> */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
//           <Image
//             src="/logo.png"
//             alt="Remilia Logo"
//             width={200}
//             height={40}

//           />
//           <nav>
//             <Link href="#" className="button">Home</Link>
//             <Link href="#" className="button">About</Link>
//             <Link href="#" className="button">Music</Link>
//             <Link href="#" className="button">Contact</Link>
//           </nav>
//         </div>
//       </header>

//       <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', flexDirection: 'column' }}>

//         <div className="first-main "style={{ flex: 1, display: 'flex', justifyContent: 'space-between',alignItems: 'center', padding: '1rem', gap:'50px', maxWidth: '980px' }}>
//           <div className="window" style={{ maxWidth: '860px', width: '100%',  marginBottom: '50px',  }}>
//             <div className="title-bar">
//               <div className="title-bar-text">Remilia Cult on Solana </div>
//                 <div className="title-bar-controls">
//                   <button aria-label="Minimize"></button>
//                   <button aria-label="Maximize"></button>
//                   <button aria-label="Close"></button>
//                 </div>
//             </div>
//             <div className="window-body">
//               {/* <div>
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-24%20at%2009.24.36%20(1)-rCeA8828F1AJyZkuatTUOVwS7ElY1J.jpeg"
//                   alt="All Eyes On Me"
//                   width={200}
//                   height={200}
//                   style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
//                 />
//               </div> */}

//               <div className="bg-[url('/wanted.gif')] sm:h-screen h-[50vh] bg-center bg-no-repeat bg-cover flex justify-center items-center">
//                 <h1 className="text-center text-4xl font-bold mb-4" style={{ color: '#fff' }}>JOIN THE REMILIA CULT</h1>
//                 <div className="grid grid-cols-2 gap-2 mb-4">
//                   <button> <Link href="#" className="button">Twitter</Link></button>
//                   <button> <Link href="#" className="button">Telegram</Link></button>
//                   <button> <Link href="#" className="button">Market</Link></button>
//                   <button><Link href="#" className="button">Dex</Link></button>
//                 </div>
//               </div>
//             </div>

//           </div>
//          <div style={{ width: '100%', height: '100%', maxWidth:'200px', display:'flex', flexDirection:'column', alignItems:'start'}}>
//          <div style={{ width: '100%', height: '0', paddingBottom: '78%', position: 'relative' }}>
//               <iframe
//                 src="https://giphy.com/embed/1WvviiPNcOODy8GGik"
//                 width="100%"
//                 height="100%"
//                 style={{ position: 'absolute' }}
//                 frameBorder="0"
//                 className="giphy-embed"
//                 allowFullScreen
//                 ></iframe>
//           </div>
//           <Image
//               src="/cult.jpeg"
//               alt="All Eyes On Me"
//               width={200}
//               height={300}
//               style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: '100%' }}
//             />
//          </div>
//         </div>

//         <div className="window" style={{ maxWidth: '600px', width: '100%' }}>
//           <div className="title-bar">
//             <div className="title-bar-text">Contact Address</div>
//             <div className="title-bar-controls">
//               <button aria-label="Minimize"></button>
//               <button aria-label="Maximize"></button>
//               <button aria-label="Close"></button>
//             </div>
//           </div>
//           <div className="window-body">
//             <div>

//             <p>User: Remilia Cult</p>
//             </div>

//           </div>
//         </div>
//       </main>

//       <footer className="window" style={{ marginTop: '1rem' }}>
//         <div className="window-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <p>&copy; 2024 Remilia. All rights reserved.</p>
//           <nav>
//             <Link href="#" className="button">Privacy Policy</Link>
//             <Link href="#" className="button">Terms of Service</Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   )
// }

