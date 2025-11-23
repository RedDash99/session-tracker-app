import { PageProvider } from '@/providers/page-context'

export default function PageProviders({ children }) {
  return <PageProvider>{children}</PageProvider>
}
