import React, { useState } from 'react'

const ImageLoader = ({ src, alt, className, fallbackSrc, ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = (e) => {
    setHasError(true)
    setIsLoading(false)
    if (fallbackSrc) {
      e.target.src = fallbackSrc
    }
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 flex items-center justify-center bg-data-light rounded-lg ${className}`}>
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-data-green border-t-transparent"></div>
            <div className="text-gray-400 text-sm">Cargando...</div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}

export default ImageLoader
