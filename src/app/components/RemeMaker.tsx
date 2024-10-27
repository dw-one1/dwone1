'use client'

import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'
import html2canvas from 'html2canvas'

const memeImages = [
    '/meme/meme00.jpeg?height=500&width=500',
    '/meme/meme0.jpeg?height=500&width=500',
    '/meme/meme0.png?height=500&width=500',
    '/meme/meme1.jpeg?height=500&width=500',
    '/meme/meme2.jpeg?height=500&width=500',
    '/meme/meme3.jpeg?height=500&width=500',
    '/meme/meme4.jpeg?height=500&width=500',
    '/meme/meme5.jpeg?height=500&width=500',
    '/meme/meme6.jpeg?height=500&width=500',
    '/meme/meme7.jpeg?height=500&width=500',
    '/meme/meme8.jpeg?height=500&width=500',
    '/meme/meme9.jpeg?height=500&width=500',
    '/meme/meme10.jpeg?height=500&width=500',
    '/meme/meme11.jpeg?height=500&width=500',
    '/meme/meme12.jpeg?height=500&width=500',
    '/meme/meme13.jpeg?height=500&width=500',
    '/meme/meme14.jpeg?height=500&width=500',
    '/meme/meme15.jpeg?height=500&width=500',
    '/meme/meme16.jpeg?height=500&width=500',
    '/meme/meme18.jpeg?height=500&width=500',
    '/meme/meme19.jpeg?height=500&width=500',
    '/meme/meme20.jpeg?height=500&width=500',
    '/meme/meme21.jpeg?height=500&width=500',
    '/meme/meme22.jpeg?height=500&width=500',
    '/meme/meme23.jpeg?height=500&width=500',
    '/meme/meme24.jpeg?height=500&width=500',
    '/meme/meme25.jpeg?height=500&width=500',
    '/meme/meme27.jpeg?height=500&width=500',
  ]

export default function MemeMaker() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [textColor, setTextColor] = useState('#ffffff')
  const memeRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? memeImages.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === memeImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleDownload = async () => {
    if (memeRef.current) {
      const canvas = await html2canvas(memeRef.current)
      const image = canvas.toDataURL('image/png', 1)
      const link = document.createElement('a')
      link.href = image
      link.download = 'meme.png'
      link.click()
    }
  }

 

  return (
    <div className="bg-gray-300 flex flex-col items-center space-y-4 p-4 max-w-md mx-auto md:w-[500px]">
      <h1 className="text-2xl font-bold font-pixel">Remilia Meme Maker</h1>
      <div className="relative w-full max-w-[500px] ">
        <div 
          ref={memeRef} 
          className="relative md:w-500 max-w-[500px]  w-full aspect-square overflow-hidden"
          style={{
            backgroundImage: `url(${memeImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div 
            className="absolute top-0 left-0 right-0 p-4 text-center break-words"
            style={{
              fontFamily:'Impact, sans-serif',
              fontSize: '2em',
              fontWeight: 'bold',
              color: textColor,
              textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              wordWrap: 'break-word',
              letterSpacing: '0.1em',
            }}
          >
            {topText}
          </div>
          <div 
            className="absolute bottom-0 left-0 right-0 p-4 text-center break-words"
            style={{
              fontFamily: 'Impact, sans-serif',
              fontSize: '2em',
              fontWeight: 'bold',
              color: textColor,
              textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              wordWrap: 'break-word',
              letterSpacing: '0.1em',
            }}
          >
            {bottomText}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between gap-10'>
          <Button 
          variant="default" 
          size="icon" 
          className="z-10"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous image</span>
        </Button>
        <p className="sm:text-sm text-[14px] text-white font-bold font-pixel">
											CHANGE IMAGE
		</p>
        <Button 
          variant="default" 
          size="icon" 
          className="z-10"
          onClick={handleNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
      <div className="w-full space-y-2">
        <Input
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          aria-label="Top Text"
          className='font-pixel font-bold'
        />
        <Input
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          aria-label="Bottom Text"
               className='font-pixel font-bold'
        />
        <div className="flex items-center space-x-2">
          <Label htmlFor="textColor" className='font-pixel font-bold'>Text Color</Label>
          <Input
            type="color"
            id="textColor"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-10 h-10 p-1"
          />
        </div>
      </div>
      <Button onClick={handleDownload} className="w-full">
        <Download className="mr-2 h-4 w-4" /> 
        <p className="sm:text-sm text-[14px] text-white font-bold ">
												DOWNLOAD MEME
		</p>
      </Button>
    </div>
  )
}