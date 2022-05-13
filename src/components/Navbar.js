import React from 'react'

function Navbar({ toggleTheme, isDarkMode, isEnglish, toggleLanguage }) {

  return (
    <header>
      <nav className='navbar'>
        <ul className='flex justify-center'>
          <li>
            <a href="#" className='logo'>PhotoGalery</a>
          </li>
          <li>
            <a href="#">{isEnglish ? 'Home' : 'الصفحة الرئيسية'}</a>
          </li>
          <li>
            <a href="#">{isEnglish ? 'About us' : 'عنّا'}</a>
          </li>
          <li>
            <a href="#">{isEnglish ? 'Contact us' : 'تواصل معنا'}</a>
          </li>
          <li className='slider-container flex'>
            {/* <button className='light-dark-btn'>
              {dark ? 'light' : 'dark'}
            </button> */}
            {isEnglish ? 'Light' : 'فاتح'}
            <div className='dark-light-slider' onClick={toggleTheme}>
              <div className={`circle ${isDarkMode ? 'circle-clicked' : ''}`}>
  
              </div>
            </div>
            {isEnglish ? 'dark' : 'غامق'}
          </li>
          <li className='slider-container'>
            <button className='arabic-english' onClick={toggleLanguage}>
              {isEnglish ? 'عربي' : 'English'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar