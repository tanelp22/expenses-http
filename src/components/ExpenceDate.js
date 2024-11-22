import React from 'react'

const ExpenceDate = (props) => {
  const day=props.date.toLocaleString('et-EE', {day: '2-digit'})
  const month=props.date.toLocaleString('et-EE', {month: 'long'})
  const year=props.date.getFullYear()

  return (
    <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
    </div>
  )
}

export default ExpenceDate