// Externals
import { useTranslation } from 'react-i18next'
import React from 'react'

// Hooks
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'
import { useMountEffect } from 'src/hooks/useMountEffect'

// Layouts
import { Center } from 'src/layouts/Center'

export function NotFoundView() {
  const setPageTitle = useSetPageTitle()
  const [t] = useTranslation()

  useMountEffect(() => {
    setPageTitle(t('texts.notFound'))
  })

  return (
    <Center minHeight="100%">
      <h1>{t('texts.notFound')}</h1>
    </Center>
  )
}
