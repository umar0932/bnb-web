import React, { useState } from 'react'
import { Button } from '@/core/ui/button'

const TrendingCategories = () => {
  const [selectedSpan, setSelectedSpan] = useState('All')

  const handleSpanClick = (spanText: string) => {
    setSelectedSpan(spanText)
  }

  const getSpanStyle = (spanText: string) => {
    return {
      fontSize: '16px',
      color: selectedSpan === spanText ? '#AF0000' : '#757575',
      borderBottom: selectedSpan === spanText ? '2px solid #AF0000' : 'none',
      cursor: 'pointer'
    }
  }

  const [selected, setSelected] = useState<string[]>([])
  const categories: string[] = [
    'Barbers',
    'Stylists',
    'Arts & Entertainment',
    'Gaming',
    'Health',
    'Fashion',
    'Technology',
    'Health',
    'Weight Loss',
    'Dancing',
    'Fitness',
    'Business',
    'Hobbies',
    'Book Club'
  ]

  const toggleInterest = (category: string): void => {
    if (selected.includes(category)) {
      setSelected(selected.filter(item => item !== category))
    } else {
      setSelected([...selected, category])
    }
  }

  const buttonClasses = 'text-md w-[169px] rounded-lg border border-[#C9C9C9]  p-2'

  return (
    <>
      <div className='flex min-h-[450px] flex-col gap-3 bg-[#DEF0FF] p-10'>
        <span className='text-3xl font-bold text-[#313131]'>Trending Categories</span>
        <div className='flex flex-wrap gap-3 p-1'>
          <span style={getSpanStyle('All')} onClick={() => handleSpanClick('All')}>
            All
          </span>
          <span style={getSpanStyle('Online')} onClick={() => handleSpanClick('Online')}>
            Online
          </span>
          <span style={getSpanStyle('On-site')} onClick={() => handleSpanClick('On-site')}>
            On-site
          </span>
          <span style={getSpanStyle('Today')} onClick={() => handleSpanClick('Today')}>
            Today
          </span>
          <span style={getSpanStyle('Tomorrow')} onClick={() => handleSpanClick('Tomorrow')}>
            Tomorrow
          </span>
          <span
            style={getSpanStyle('This weekend')}
            onClick={() => handleSpanClick('This weekend')}
          >
            This weekend
          </span>
        </div>
        <div className='mt-5 flex flex-wrap gap-8 max-lg:items-center max-lg:justify-center'>
          {categories.map((category, index) => (
            <Button
              key={index}
              className={`${buttonClasses} ${
                selected.includes(category) ? 'bg-[#AF0001] text-white' : 'bg-white text-[#313131]'
              }`}
              onClick={() => toggleInterest(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

export default TrendingCategories
