import React from 'react';
import { CodeBlock } from './ui/CodeBlock';

const ContentPortfolio = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 space-y-16">
      {/* Project Overview Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
          Project Overview
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          A modern, interactive portfolio website built with Next.js 15, featuring advanced animations, 3D elements, real-time user interactions, and responsive design. The project demonstrates technical expertise in both frontend development and real-time features while maintaining optimal performance.
        </p>
      </section>

      {/* Technical Stack Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
          Technical Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Frontend Framework', desc: 'Next.js 15 with TypeScript' },
            { title: 'Styling', desc: 'TailwindCSS with custom animations' },
            { title: '3D Graphics', desc: 'Three.js and React Three Fiber' },
            { title: 'Animations', desc: 'GSAP, Framer Motion' },
            { title: 'Real-time Features', desc: 'Supabase Realtime' },
            { title: 'Performance', desc: 'Dynamic loading and code splitting' },
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
          Key Features
        </h2>
        
        {/* Advanced Animation System */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">1. Advanced Animation System</h3>
          <CodeBlock
            code={`export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);`}
            language="typescript"
          />
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Implemented custom text generation effects</li>
            <li>Created smooth scroll animations using GSAP</li>
            <li>Developed a custom preloader with percentage-based loading</li>
          </ul>
        </div>

        {/* Real-time Interactive Features */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">2. Real-time Interactive Features</h3>
          <CodeBlock
            code={`export default function RealtimeCursor() {
    const [cursors, setCursors] = useState<Record<string, CursorData>>({});
    
    useEffect(() => {
        const channel = supabase.channel('cursors')
            .on('presence', { event: 'sync' }, () => {
                const newState = channel.presenceState();
                setCursors(newState);
            })
            .subscribe(async (status) => {
                if (status === 'SUBSCRIBED') {
                    await channel.track({
                        x_position: 0,
                        y_position: 0,
                        color: cursorStyle.color,
                        user_id: userId
                    });
                }
            });`}
            language="typescript"
          />
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Live cursor tracking system using Supabase Realtime</li>
            <li>Real-time online users counter</li>
            <li>Unique visitor identification</li>
            <li>Smooth cursor animations with Framer Motion</li>
          </ul>
        </div>

        {/* Interactive Grid Layout */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">3. Interactive Grid Layout</h3>
          <CodeBlock
            code={`const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};`}
            language="typescript"
          />
        </div>
      </section>

      {/* Technical Challenges Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
          Technical Challenges & Solutions
        </h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">1. Performance Optimization</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white">Challenge:</p>
              <p className="text-gray-300">Managing multiple animations and real-time updates while maintaining performance.</p>
              <p className="font-semibold text-white mt-4">Solution:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Implemented code splitting and lazy loading</li>
                <li>Used React Suspense for component loading</li>
                <li>Optimized animation frame rates</li>
                <li>Added debouncing for cursor position updates</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">2. Real-time Synchronization</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white">Challenge:</p>
              <p className="text-gray-300">Maintaining accurate cursor positions across devices.</p>
              <p className="font-semibold text-white mt-4">Solution:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Implemented percentage-based positioning</li>
                <li>Added viewport normalization</li>
                <li>Created smooth interpolation for position updates</li>
                <li>Handled connection drops and reconnections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
          Key Learnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Advanced React Patterns</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Mastered custom hooks</li>
              <li>Context-based state management</li>
              <li>React Suspense and lazy loading</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Real-time Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Supabase real-time capabilities</li>
              <li>Presence management</li>
              <li>Multi-user race conditions</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Advanced code splitting</li>
              <li>Image optimization</li>
              <li>Animation performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact & Future Improvements */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
            Impact & Results
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Achieved 90+ Performance score on Lighthouse</li>
            <li>Sub-100ms latency for cursor updates</li>
            <li>Successfully handled 100+ concurrent users</li>
            <li>Reduced initial load time to under 2 seconds</li>
            <li>Maintained 99.9% uptime for real-time features</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
            Future Improvements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Implement server-side rendering for better SEO</li>
            <li>Add peer-to-peer connections for reduced latency</li>
            <li>Enhance accessibility features</li>
            <li>Implement progressive web app capabilities</li>
            <li>Add real-time chat features</li>
            <li>Enhance cursor interactions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContentPortfolio;
