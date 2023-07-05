import Header from 'components/header'
import React from 'react'

export default function PageTemplate({children}: React.PropsWithChildren) {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>{children}</main>
    <footer></footer>
    </>
  )
}
