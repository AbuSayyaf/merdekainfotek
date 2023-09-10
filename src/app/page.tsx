'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '@/util/variants'
import Link from 'next/link'
function Landing() {
  return (
    <section
      aria-labelledby="hero-text"
      className="flex flex-col text-white text-center place-content-center items-center hero-bg h-screen w-screen px-4 tablet:px-32 laptop:px-72"
    >
      <header>
        <motion.h1
          id="hero-text"
          variants={fadeIn('down', 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="uppercase text-4xl laptop:text-5xl font-bold mb-1"
        >
          engineering the web for <span className="text-orange-500">you</span>
        </motion.h1>
        <motion.p
          variants={fadeIn('down', 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-5"
        >
          We design, build, and deploy for enterprises
        </motion.p>
      </header>
      <Link href="/contact">
        <motion.a
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-white text-black text-lg font-medium rounded-md px-7 py-1 cursor-pointer laptop:px-10 laptop:py-2 hover:text-white hover:bg-orange-500"
        >
          Let&apos;s Work
        </motion.a>
      </Link>
    </section>
  )
}

export default Landing
