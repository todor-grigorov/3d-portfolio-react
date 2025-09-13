import { Variants } from 'framer-motion'
import { Direction } from '../Types/Direction'

export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  } satisfies Variants
}

export const fadeIn = (
  direction: Direction | '',
  type: 'tween' | 'spring' | false,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x:
        direction === Direction.LEFT
          ? 100
          : direction === Direction.RIGHT
            ? -100
            : 0,
      y:
        direction === Direction.UP
          ? 100
          : direction === Direction.DOWN
            ? -100
            : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  } satisfies Variants
}

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = (
  direction: Direction | '',
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x:
        direction === Direction.LEFT
          ? '-100%'
          : direction === Direction.RIGHT
            ? '100%'
            : 0,
      y:
        direction === Direction.UP
          ? '100%'
          : direction === Direction.DOWN
            ? '100%'
            : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const staggerContainer = (staggerChildren = 0, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  }
}
