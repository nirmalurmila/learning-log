import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PortfolioDetail = ({ portfolio }) => {
    if (!portfolio) {
        return null;
    }

    const { hero, journey, learnings, connect, footer } = portfolio;

    return (
        <div className="space-y-16">
            <section className="glass-card p-8 md:p-12 text-center">
                {hero?.badge && (
                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 text-sm font-semibold mb-6">
                        {hero.badge}
                    </span>
                )}
                {hero?.headline && (
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {hero.headline}
                    </h2>
                )}
                {hero?.tagline && (
                    <p className="text-xl text-secondary mb-4">
                        {hero.tagline}
                    </p>
                )}
                {hero?.note && (
                    <p className="text-secondary mb-8">{hero.note}</p>
                )}
                {hero?.interests?.length ? (
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        {hero.interests.map((interest) => (
                            <span
                                key={interest}
                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                ) : null}
                {hero?.ctas?.length ? (
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {hero.ctas.map((cta) => (
                            <a
                                key={cta.label}
                                href={cta.href}
                                className={`px-6 py-3 rounded-full text-sm font-semibold transition ${cta.variant === 'primary'
                                    ? 'bg-white text-black hover:scale-105'
                                    : 'border border-white/30 text-white hover:border-white'}
                                `}
                                target={cta.external ? '_blank' : undefined}
                                rel={cta.external ? 'noreferrer' : undefined}
                            >
                                {cta.label}
                            </a>
                        ))}
                    </div>
                ) : null}
            </section>

            <section id="portfolio-journey" className="space-y-8">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-3">{journey?.title}</h3>
                    <p className="text-secondary max-w-2xl mx-auto">
                        {journey?.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {journey?.items?.map((item) => (
                        <div key={item.title} className="glass-card p-6">
                            <div className="text-2xl mb-4">{item.icon}</div>
                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                            <p className="text-secondary text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-3">{learnings?.title}</h3>
                    <p className="text-secondary max-w-2xl mx-auto">
                        {learnings?.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learnings?.items?.map((item) => (
                        <div key={item.title} className="glass-card p-6 flex flex-col gap-4">
                            <span className="text-xs uppercase tracking-wide text-white/70">
                                {item.tag}
                            </span>
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                            <p className="text-secondary text-sm flex-1">{item.content}</p>
                            <span className="text-xs text-white/50">{item.status}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="glass-card p-8 md:p-10 text-center">
                <h3 className="text-2xl font-bold mb-4">{connect?.title}</h3>
                {connect?.handle && (
                    <p className="text-xl font-semibold mb-2">
                        <a href={connect.handleUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                            {connect.handle}
                        </a>
                    </p>
                )}
                {connect?.description && (
                    <p className="text-secondary mb-6">{connect.description}</p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                    {connect?.primaryCta && (
                        <a
                            href={connect.primaryCta.href}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-full bg-white text-black font-semibold"
                        >
                            {connect.primaryCta.label}
                        </a>
                    )}
                    {connect?.secondaryCta && (
                        <a
                            href={connect.secondaryCta.href}
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold"
                        >
                            {connect.secondaryCta.label}
                        </a>
                    )}
                </div>
                {connect?.note && (
                    <p className="text-secondary mb-4">{connect.note}</p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {connect?.stats?.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl">{stat.value}</div>
                            <div className="text-xs text-white/60 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {footer && (
                <p className="text-center text-secondary">{footer}</p>
            )}
        </div>
    );
};

const SectionDetail = ({ section, onBack }) => {
    const isPortfolio = Boolean(section?.portfolio);

    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`p-8 md:p-16 mx-auto ${isPortfolio ? 'max-w-6xl' : 'max-w-4xl'}`}
        >
            <button
                onClick={onBack}
                className="mb-12 flex items-center gap-2 text-secondary hover:text-white transition-colors group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </button>

            {isPortfolio ? (
                <PortfolioDetail portfolio={section.portfolio} />
            ) : (
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
            )}
        </motion.div>
    );
};

export default SectionDetail;