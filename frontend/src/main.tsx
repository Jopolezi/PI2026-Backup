import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './routes/routes'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyles } from './styles/Global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={routes} />
  </StrictMode>
)
