import React from 'react'
import { Button } from 'reactstrap'
import './LoaderButton.css'

export default ({
  isLoading,
  text,
  loadingText,
  className = '',
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
    >
    {!isLoading ? text : loadingText}
  </Button>
