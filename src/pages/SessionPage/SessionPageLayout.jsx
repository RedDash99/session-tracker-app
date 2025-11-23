import PageProviders from '@/providers/pageProviders'
import Page from './Page'

export default function SessionPageLayout() {
  return (
    <PageProviders>
      <Page />
    </PageProviders>
  )
}
