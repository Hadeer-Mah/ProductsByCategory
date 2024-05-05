import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Custom hook to update the document title with the provided title every time the provided title changes
export default function useDocumentTitle(title: string) {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.title = t(title?.toUpperCase())
  }, [title])
  
}