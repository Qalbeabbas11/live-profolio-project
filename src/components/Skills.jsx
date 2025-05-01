// src/components/Skills.jsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ name, level }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: false });

	useEffect(() => {
		if (inView) {
			controls.start({ width: `${level}%` });
		} else {
			controls.start({ width: `0%` });
		}
	}, [inView, controls, level]);

	return (
		<div ref={ref}>
			<div className="flex justify-between mb-1">
				<span className="text-gray-700 dark:text-gray-300">{name}</span>
				<span className="text-gray-500 dark:text-gray-400">{level}%</span>
			</div>
			<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
				<motion.div
					className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 h-2 rounded-full"
					initial={{ width: 0 }}
					animate={controls}
					transition={{ duration: 2, ease: 'easeInOut' }}
				/>
			</div>
		</div>
	);
};

const skills = {
	frontend: [
		{ name: 'React.js', level: 75 },
		{ name: 'JavaScript', level: 75 },
		{ name: 'CSS', level: 90 },
		{ name: 'HTML', level: 95 },
		{ name: 'Bootstrap', level: 85 },
		{ name: 'Tailwind CSS', level: 85 },
	],
};

const Skills = () => {
	return (
		<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
			<div className="container mx-auto px-6">
				<motion.h2
					className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					My{' '}
					<span className="text-indigo-600 dark:text-indigo-400">Skills</span>
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-1 gap-8">
					{/* Frontend Skills */}
					<motion.div
						className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
							Frontend
						</h3>
						<div className="space-y-4">
							{skills.frontend.map((skill) => (
								<SkillBar
									key={skill.name}
									name={skill.name}
									level={skill.level}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
