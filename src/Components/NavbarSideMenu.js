import React from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';

// Icon imports
import {AiOutlineClose } from 'react-icons/ai'

const NavbarSideMenu = ({handleSideMenu}) => {
  return (
    <>
        <motion.div 
            className='fixed bg-gradient-to-r from-TILGold to-transparent h-screen left-0 right-0 top-0 bottom-0 z-40'
            onClick={() => handleSideMenu()}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, transition: {duration: 0.3 } }}
        >
            <motion.nav 
                className='fixed flex flex-col space-y-7 right-0 w-[70%] h-screen z-20  bg-TILBlack justify-center items-center'
                initial={{ x:100 }}
                animate={{ x:0 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.2}}
                exit={{ x: '100%', transition: { duration: 0.3 } }}
            >
                <button
                    type='button'
                    onClick={() => handleSideMenu(false)}
                    
                >
                    <AiOutlineClose  size={35} className='text-white' />
                </button>
                <ul className='space-y-8 text-center font-bold text-lg flex flex-col'>
                    <Link 
                        to='hero' 
                        smooth={true}
                        className='cursor-pointer'
                        onClick={() => handleSideMenu(false)}
                    >
                        HOME
                    </Link>
                    <Link 
                        to='about' 
                        smooth={true}
                        className='cursor-pointer'
                        onClick={() => handleSideMenu(false)}
                    >
                        ABOUT US
                    </Link>
                    <Link 
                        to='team' 
                        smooth={true}
                        className='cursor-pointer'
                        onClick={() => handleSideMenu(false)}
                    >
                        OUR TEAM
                    </Link>
                    <Link 
                        to='contact' 
                        smooth={true}
                        className='cursor-pointer'
                        onClick={() => handleSideMenu(false)}
                    >
                        CONTACT
                    </Link>
                </ul>
                <button className='border-[0.3px] border-TILGold text-TILGold rounded-md px-4 py-1 text-xl font-light hover:bg-TILGold hover:text-TILBlack duration-100 ease-linear' onClick={() => handleSideMenu(false)}>
                    <a href='/'>
                        DONATE
                    </a>
                </button>
            </motion.nav>
            
        </motion.div>
    </>
  )
}

export default NavbarSideMenu