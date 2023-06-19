import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Direction } from '../Types/Direction'

interface IProjectCardProps {
  index: number
  name: string
  description: string
  tags: string[]
  image: string
  source_code_link: string
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: IProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn(Direction.UP, 'spring', index * 0.5, 0.75)}
    ></motion.div>
  )
}

const Works = () => {
  return <div>Works</div>
}

export default Works
