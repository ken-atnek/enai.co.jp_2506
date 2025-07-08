/* =======================================
 * 梨園 HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-06-13
 * Last updated: 2025-07-08
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navMenu } from '@/data/navMenuData';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';
const Header = () => {
  const pathname = usePathname();
  const isTop = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleOutsideClick, true);
    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [isOpen]);

  // TOPページを判定
  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`${styles.containerHeader} ${isTop ? styles.isTop : ''}`}
    >
      <article>
        <Link href="/" className={styles.linkH1}>
          <h1>
            <Image src={Logo} alt="梨園のロゴ" fill />
          </h1>
        </Link>
        <nav
          className={`${isOpen ? styles['is-open'] : ''} ${
            !isOpen ? styles.closing : ''
          }`}
        >
          {navMenu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`${styles.itemLink} ${
                isLinkActive(item.href) ? styles.isActive : ''
              } ${item.label === '採用情報' ? styles.recruit : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </article>
      <button
        type="button"
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
