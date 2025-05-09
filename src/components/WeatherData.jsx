import React from 'react'

export const WeatherData = ({weathertype, value}) => {
  return (
    <div>
        <p className='border-b-1 border-dashed py-2 border-blue-400'>
        <span>{weathertype}</span>
        <span>{value}</span>
        </p>
    </div>
  )
}
