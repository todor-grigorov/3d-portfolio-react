import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

interface ISectionWrapperProps {
  Component: React.ReactNode
  idName: string
}

const SectionWrapper = ({ Component, idName }: ISectionWrapperProps) => {
  return <div>SectionWrapper</div>
}

export default SectionWrapper
