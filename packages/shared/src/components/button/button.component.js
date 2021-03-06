import React from 'react'

export const Button = (props) => {
  let {
    component: Component = 'button',
    children,
    borderColor,
    bgColor = 'blue',
    color = 'white',
    fontWeight = 'bold',
    rounded = 'small',
    paddingX = 4,
    paddingY = 1,
    disabled,
    shadow = 'none',
    ...otherProps
  } = props

  if (bgColor === 'blue' && color === 'white') {
    color = 'white-button'
  }

  if (disabled) {
    bgColor = 'gray-light'
    borderColor = 'gray-light'
  }

  if (!borderColor) {
    borderColor = bgColor
  }

  const classNames = `inline-flex flex-col items-stretch overflow-hidden text-base transition-colors
  bg-${bgColor} border-${borderColor} text-${color} focus:bg-${bgColor}-active focus:border-${borderColor}-active
  hover:bg-${bgColor}-active hover:border-${borderColor}-active focus:text-${color}-active hover:text-${color}-active
   cursor-pointer border-1 border-solid rounded-${rounded} shadow-${shadow}`

  return (
    <Component
      {...otherProps}
      disabled={disabled}
      className={`${classNames} ${props.className}`}>
      <span
        className={`reset-link flex justify-center items-center w-full font-${fontWeight} px-${paddingX} py-${paddingY}`}>
        <span className="m-1 text-center flex justify-center items-center">{children}</span>
      </span>
    </Component>
  )
}
