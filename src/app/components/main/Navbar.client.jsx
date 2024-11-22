// // src/app/components/main/Navbar.client.jsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import ThemeToggle from './ThemeToggle.client';
// // import AuthModal from '../auth/AuthModal.client';

// export default function Navbar() {
//   const pathname = usePathname();

//   const isActivePath = (path) => {
//     return pathname === path ? 'text-primary border-primary' : 'text-secondary hover:text-primary';
//   };

//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//   const [initialAuthView, setInitialAuthView] = useState('login');
  
//   const openAuthModal = (view) => {
//     setInitialAuthView(view);
//     setIsAuthModalOpen(true);
//   };

//   return (
//     <>
//       <nav className="">
//         <div className="w-full border-b border-tertiary bg-background">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               {/* Logo/Home */}
//               <div className="flex-shrink-0">
//                 <Link 
//                   href="/" 
//                   className={`text-xl font-bold ${isActivePath('/')} transition-fast`}
//                 >
//                   Base Project
//                 </Link>
//               </div>

//               {/* Navigation Links */}
//               <div className="flex space-x-8">
//                 <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => openAuthModal('login')}
//                   className="text-secondary hover:text-primary transition-fast"
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => openAuthModal('register')}
//                   className="btn">
//                   Sign Up
//                 </button>
//                 <ThemeToggle />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <AuthModal
//       isOpen={isAuthModalOpen}
//       onClose={() => setIsAuthModalOpen(false)}
//       initialView={initialAuthView}
//     />
//    </>
//   );
// }

// src/app/components/main/Navbar.client.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle.client';
import AuthModal from '../auth/AuthModal.client';
import CartIcon from '../cart/CartIcon.client';
import { useAuth } from '@/app/hooks/useAuth';

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const isActivePath = (path) => {
    return pathname === path ? 'text-primary border-primary' : 'text-secondary hover:text-primary';
  };

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialAuthView, setInitialAuthView] = useState('login');
  
  const openAuthModal = (view) => {
    setInitialAuthView(view);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Home */}
              <div className="flex-shrink-0">
                <Link 
                  href="/" 
                  className={`text-xl font-bold ${isActivePath('/')} transition-fast`}
                >
                  SkylineHaven
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className={`px-3 py-2 text-sm font-medium transition-fast ${isActivePath('/')}`}
                >
                  Welcome
                </Link>
                <Link
                  href="/pages/furniture"
                  className={`px-3 py-2 text-sm font-medium transition-fast ${isActivePath('/pages/furniture')}`}
                >
                  Collections
                </Link>
                <Link
                  href="/pages/about"
                  className={`px-3 py-2 text-sm font-medium transition-fast ${isActivePath('/pages/about')}`}
                >
                  About
                </Link>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center align-middle space-x-4">
                    <button
                      onClick={() => openAuthModal('login')}
                      className="text-secondary hover:text-primary transition-fast"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => openAuthModal('register')}
                      className="btn"
                    >
                      Sign Up
                    </button>
                
                 {/* {user ? (
                  <>
                    <span className="text-sm text-secondary">
                      Welcome, {user.username}
                    </span>
                    <CartIcon />
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => openAuthModal('login')}
                      className="text-secondary hover:text-primary transition-fast"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => openAuthModal('register')}
                      className="btn"
                    >
                      Sign Up
                    </button>
                  </>
                )} */}
                <ThemeToggle />
                <CartIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialView={initialAuthView}
      />
    </>
  );
}
