import React from 'react'

const useMedia = media => {
  const [match, setMatch] = React.useState(null)

  React.useEffect(() => {
    function changeMatched() {
      const { matches } = window.matchMedia('(max-width: 40rem)')
      setMatch(matches)
    }
    changeMatched()
    window.addEventListener('resize', changeMatched)
    return () => {
      window.removeEventListener('resize', changeMatched)
    }
  }, [media])
  return match
}

export default useMedia
