// components/Header.js
'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Lenis from '@studio-freight/lenis'
import { useRouter } from 'next/navigation'
export default function Header({ menuData, headerDatas }) {
  const pathname = usePathname()
  const lenisRef = useRef(null)
  const router = useRouter()
  // Extract the 'menus' array from the data
  const menus = menuData?.map((menu) => menu.items).flat() || []

  // Sort menus based on the first item's 'order'
  // In your Header.js
  const sortedMenus = [...menus].sort((a, b) => {
    const aItems = a.items || []
    const bItems = b.items || []

    const aOrder = Array.isArray(aItems) && aItems[0]?.order !== undefined ? aItems[0].order : 0
    const bOrder = Array.isArray(bItems) && bItems[0]?.order !== undefined ? bItems[0].order : 0

    return aOrder - bOrder
  })

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(null)

  const handleSubmenuClick = (e, targetId, url) => {
    e.preventDefault()
    const currentHash = window.location.hash
    const newHash = targetId
    if (currentHash !== newHash) {
      router.push(url + newHash)
    }
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      lenisRef.current.scrollTo(targetElement, { duration: 1.5 })
    } else {
      console.warn(`Target section with id #${targetId} not found.`)
    }
  }

  const handleScroll = () => {
    setScrolled(window.scrollY > 10)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const scroller = new Lenis()
    let rafState

    function raf(time) {
      scroller.raf(time)
      requestAnimationFrame(raf)
    }

    rafState = requestAnimationFrame(raf)
    lenisRef.current = scroller

    return () => {
      cancelAnimationFrame(rafState)
    }
  }, [])

  return (
    <header
      className={`bg-white transition-all duration-300 ${
        scrolled ? 'sticky top-0 w-full z-20 bg-white py-0' : 'py-0'
      }`}
    >
      <nav className="flex w-full px-[15px] 2xl:px-[calc(9rem-4px)] justify-between py-2 lg:py-0 items-center">
        <div className="logo flex items-center justify-center w-[150px] 2xl:w-[230px]">
          {headerDatas && (
            <Link href="/" aria-label="Home">
              <Image src={headerDatas?.logo?.url} width={249} height={82} alt="Logo" />
            </Link>
          )}
        </div>
        {/* Mobile Menu Toggle */}
        <span className="w-8 flex lg:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
          ☰
        </span>

        {/* Side Menu for mobile */}
        <div
          className={`fixed py-6 opacity-0 z-20 px-5 lg:px-0 w-72 -left-full top-0 bg-Teal h-full pt-7 pb-7 border-r-4 border-gray-light gap-4 xl:gap-8 lg:flex-1 lg:border-none lg:bg-transparent lg:opacity-100 lg:w-auto lg:static lg:flex lg:items-center transition-all duration-700 ease-in lg:transition-none lg:py-8 lg:justify-end lg:overflow-y-visible overflow-y-auto max-h-full ${
            menuOpen ? 'left-0 opacity-100' : ''
          }`}
        >
          {/* Close button for mobile */}
          <span
            className="close absolute top-4 right-4 w-8 h-8 lg:hidden cursor-pointer"
            aria-label="close menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </span>

          {/* Menu Items */}
          <ul className="flex flex-col lg:flex-row gap-4 text-a 2xl:gap-6 pt-10 lg:pt-0 [&_li>a]:px-2 2xl:[&_li>a]:px-6 lg:[&_li>a]:py-3 text-white lg:text-black-900 [&_li>a]:inline-block font-medium transition-colors duration-700 ease-in-out w-full lg:w-auto">
            {sortedMenus.map((menuItem, index) => {
              const { label, url, children, id } = menuItem

              const hasSub = children && children.length > 0

              const isActive = pathname === url

              return (
                <li
                  key={id}
                  className="relative group w-full lg:w-auto"
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024 && hasSub) {
                      setSubmenuOpen(index)
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 1024) {
                      setSubmenuOpen(null)
                    }
                  }}
                >
                  <div
                    className="w-full lg:w-auto flex items-center justify-between cursor-pointer"
                    onClick={() => {
                      if (window.innerWidth < 1024 && hasSub) {
                        setSubmenuOpen(submenuOpen === index ? null : index)
                        setMenuOpen(true)
                      } else if (window.innerWidth < 1024 && !hasSub) {
                        setSubmenuOpen(null)
                        setMenuOpen(false)
                      }
                    }}
                  >
                    <Link
                      href={url}
                      onClick={() => {
                        setMenuOpen(false)
                      }}
                      className={`flex items-center w-full lg:w-auto justify-between lg:justify-start gap-2 ${
                        isActive ? 'text-black-900 lg:text-Teal font-bold' : ''
                      }`}
                    >
                      <span
                        className={`${isActive ? 'text-black-900 lg:text-Teal font-bold' : ''}`}
                      >
                        {label}
                      </span>
                      {hasSub && (
                        <span
                          className={`text-sm lg:hidden transition-transform duration-300 ${
                            submenuOpen === index ? 'rotate-180 text-black-900' : 'rotate-0'
                          }`}
                        >
                          ▼
                        </span>
                      )}
                    </Link>
                  </div>

                  {/* Submenu */}
                  {hasSub && (
                    <div
                      className={`lg:absolute transition-all duration-1000 ${
                        submenuOpen === index ? 'pt-0 lg:pt-[50px] bg-white' : 'pt-0 bg-white'
                      }`}
                    >
                      <ul
                        className="bg-white z-10 shadow-md top-full transition-all duration-300 ease-in-out w-full lg:w-[250px]"
                        style={{
                          maxHeight: submenuOpen === index ? '500px' : '0px',
                          overflow: 'hidden',
                          transition: 'max-height 0.4s ease-in-out',
                          minHeight: submenuOpen === index ? '50px' : '0px',
                        }}
                      >
                        {children.map((child) => {
                          return (
                            <li
                              key={child.id}
                              className="cursor-pointer block w-full hover:text-Teal text-black-900 hover:bg-gray-100"
                              onClick={(e) => handleSubmenuClick(e, `#${child.label}`, url)}
                            >
                              <Link href={`${url}#${child.url}`}>{child.label}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Example Button */}
          <Link
            href={'/'}
            className="flex items-center justify-center text-center mt-5 lg:mt-0 bg-white text-Teal hover:bg-transparent border hover:border-white hover:text-white lg:bg-Teal lg:text-white lg:hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in cursor-pointer"
          >
            {'Termin buchen'}
          </Link>
        </div>
      </nav>
    </header>
  )
}
