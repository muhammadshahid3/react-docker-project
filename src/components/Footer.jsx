import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {currentYear} Muhammad Shahid. Built for modern DevOps delivery.</p>
      </div>
    </footer>
  )
}

export default Footer
