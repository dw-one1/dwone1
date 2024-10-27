'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'

const memeImages = [
  '/head.png?height=300&width=300',
  '/remeliameme1.jpeg?height=300&width=300',
  '/head.png?height=300&width=300',
]

export default function MemeMaker() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [isImpact, setIsImpact] = useState(true)
  const [isAllCaps, setIsAllCaps] = useState(true)
  const [textColor, setTextColor] = useState('#ffffff')
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const aspectRatio = img.width / img.height
      const canvasWidth = Math.min(500, window.innerWidth - 40) // 20px padding on each side
      const canvasHeight = canvasWidth / aspectRatio

      canvas.width = canvasWidth
      canvas.height = canvasHeight
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)

      ctx.fillStyle = textColor
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 2
      ctx.textAlign = 'center'

      const fontSize = canvasWidth * 0.1
      ctx.font = `bold ${fontSize}px Impact, sans-serif`

      const text = isAllCaps ? (text: string) => text.toUpperCase() : (text: string) => text

      ctx.fillText(text(topText), canvasWidth / 2, fontSize, canvasWidth)
      ctx.strokeText(text(topText), canvasWidth / 2, fontSize, canvasWidth)

      ctx.fillText(text(bottomText), canvasWidth / 2, canvasHeight - 10, canvasWidth)
      ctx.strokeText(text(bottomText), canvasWidth / 2, canvasHeight - 10, canvasWidth)
    }
    img.src = memeImages[currentImageIndex]
  }, [currentImageIndex, topText, bottomText, isImpact, isAllCaps, textColor])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'meme.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="bg-gray-300 flex flex-col items-center space-y-4 p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Meme Maker</h1>
      <div className="relative w-full max-w-[500px]">
    
        <canvas ref={canvasRef} className="mx-auto w-full" />
      
      </div>
      <div>
          <Button 
          variant="default" 
          size="icon" 
          className="z-10"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous image</span>
        </Button>
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
        />
        <Input
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          aria-label="Bottom Text"
        />
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="impact" 
            checked={isImpact} 
            onCheckedChange={(checked) => setIsImpact(checked as boolean)}
          />
          <Label htmlFor="impact">Impact Font</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="allCaps" 
            checked={isAllCaps} 
            onCheckedChange={(checked) => setIsAllCaps(checked as boolean)}
          />
          <Label htmlFor="allCaps" className='font-bold'>All Caps</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="textColor" className='font-bold'>Text Color</Label>
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