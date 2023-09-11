import { AnimatePresence, motion } from 'framer-motion'


const animations = {
    initial: { opacity: 0, x: 100, visibility: 'visible' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100, visibility: 'hidden' }
}

export default function AnimationPage({ children }) {

    return (
        <AnimatePresence >

            <motion.div display='none' variants={animations} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.7, type: 'spring' }}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}