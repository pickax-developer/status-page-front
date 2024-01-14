import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-3 relative translate-y-[-100%] bg-secondary text-black">
      <aside>
        <p>@pickax-developer since 2023</p>
      </aside>
      <nav>
        <header className="footer-title">SNS</header>
        <div className="grid grid-flow-col gap-4">github : https://github.com/pickax-developer</div>
      </nav>
    </footer>
  )
}
export default Footer
