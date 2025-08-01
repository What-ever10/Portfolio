import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
      { icon: <SiLeetcode />, url: 'https://leetcode.com/u/Pratyush_Kumar_1412/' },
    { icon: <SiCodeforces />, url: 'https://codeforces.com/profile/_tHe_Guy' }
    
  ];
    return(
        <>
        <div>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                aria-label={`Visit my ${link.url.includes('github') ? 'GitHub' : link.url.includes('linkedin') ? 'LinkedIn' : 'Twitter'} profile`}
              >
                {link.icon}
              </motion.a>
            ))}
        </div>
        <p>
            Made with <FaHeart/>by Pratyush Kumar
        </p>
        <p>
            &copy;{new Date().getFullYear()} All Rights Reserved
        </p>
        </>
    );
};
export default Footer;