import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SectionDetail = ({ section, onBack }) => {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="p-8 md:p-16 max-w-4xl mx-auto"
        >
            <button
                onClick={onBack}
                className="mb-12 flex items-center gap-2 text-secondary hover:text-white transition-colors group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </button>

            <div className="glass-card p-8 md:p-12">
                <div className="flex items-center gap-6 mb-8 text-white/40">
                    <section.icon size={48} strokeWidth={1} />
                </div>

                <h2 className="text-5xl font-bold mb-6">{section.title}</h2>
                <p className="text-xl text-secondary mb-12 leading-relaxed">
                    {section.description}
                </p>

                <div className="space-y-12">
                    <section>
                        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-3 font-semibold">Current Focus</h4>
                        <p className="text-2xl">{section.focus}</p>
                    </section>

                    <section>
                        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-3 font-semibold">Recent Experiment</h4>
                        <p className="text-xl text-secondary italic">"{section.recentExperiment}"</p>
                    </section>

                    <section>
                        <div className="flex justify-between items-end mb-4">
                            <h4 className="text-sm uppercase tracking-widest text-white/40 font-semibold">Mastery</h4>
                            <span className="text-2xl font-mono">{section.progress}%</span>
                        </div>
                        <div className="progress-bar-container">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${section.progress}%` }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="progress-bar-fill"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default SectionDetail;
