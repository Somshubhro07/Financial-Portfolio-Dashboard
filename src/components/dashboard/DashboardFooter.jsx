/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function DashboardFooter({ name, email, githubUrl, linkedinUrl }) {
  const hasDetails = name || email || githubUrl || linkedinUrl;
  if (!hasDetails) return null;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }} 
      className="w-full py-6 text-center mt-auto" 
    >
      <div className="text-xs text-text-secondary font-medium">
        <p className="mb-2">Dashboard created by {name || 'Participant Name'}</p>
        <div className="flex items-center justify-center space-x-5">
          {email && (
            <a href={`mailto:${email}`} title={email} className="hover:text-primary transition-colors">
              <FaEnvelope size={16} />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-primary transition-colors">
              <FaGithub size={16} />
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-primary transition-colors">
              <FaLinkedin size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.footer>
  );
}

export default DashboardFooter;