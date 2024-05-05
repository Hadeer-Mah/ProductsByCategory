import { useEffect } from 'react'

// Custom hook to update the document title with the provided title every time the provided title changes
export default function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title?.toUpperCase()
  }, [title])
  
}