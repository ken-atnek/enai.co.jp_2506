/* =======================================
 * HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-06-13
 * Last updated: 2025-06-13
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navMenu } from '@/data/navMenuData';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo.webp';
const Header = () => {
  const pathname = usePathname();
  const isTop = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
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

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('headerNav')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header
      className={`${styles.containerHeader} ${isTop ? styles.isTop : ''}`}
    >
      <article>
        <Link href="/" className={styles.linkH1}>
          <h1>
            <Image src={Logo} alt="梨園" />
          </h1>
        </Link>
        <nav
          id="headerNav"
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
                item.label === '採用情報' ? styles.recruit : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </article>
      <button
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
