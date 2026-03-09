import { motion } from 'framer-motion';
import { SECTIONS } from '../data/sections';

const Dashboard = ({ onSelectSection }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 md:p-16 max-w-7xl mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12"
            >
                <h2 className="text-4xl font-bold mb-2">Projects & Experiments</h2>
                <p className="text-secondary">Explore the creative lab.</p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {SECTIONS.map((section) => (
                    <motion.div
                        key={section.id}
                        variants={item}
                        onClick={() => onSelectSection(section)}
                        className="glass-card p-8 cursor-pointer flex flex-col h-full"
                    >
                        <div className="mb-6 p-3 bg-white/10 rounded-2xl w-fit">
                            <section.icon size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
                        <p className="text-secondary flex-grow">{section.description}</p>
                        <div className="mt-8 flex items-center gap-2 group">
                            <span className="text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">Explore</span>
                            <div className="h-[1px] flex-grow bg-white/10" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Dashboard;
