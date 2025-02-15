import React from 'react';
import { CodeBlock } from './ui/CodeBlock';

const ZentryContent = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 space-y-16">
      {/* Project Overview Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Project Overview
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Zentry is a modern web application that showcases an innovative gaming platform combining AI, blockchain, and traditional gaming elements. The project demonstrates advanced frontend development skills and modern web technologies implementation.
        </p>
      </section>

      {/* Technical Stack Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Technical Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Frontend Framework', desc: 'React with Vite' },
            { title: 'Styling', desc: 'TailwindCSS for responsive design' },
            { title: 'Animations', desc: 'GSAP (GreenSock Animation Platform)' },
            { title: 'State Management', desc: 'React Hooks' },
            { title: 'Audio Integration', desc: 'Custom audio handling' },
            { title: 'Performance', desc: 'Dynamic loading and optimization' },
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
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Key Features & Implementation
        </h2>
        
        {/* Interactive Hero Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">1. Interactive Hero Section</h3>
          <CodeBlock
            code={`const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // ... more state declarations

  const playWhooshSound = () => {
    if (whooshSoundRef.current && window.isAudioEnabled) {
      whooshSoundRef.current.currentTime = 0;
      const playPromise = whooshSoundRef.current.play();
      // ... sound handling logic
    }
  };

  // ... more implementation details
};`}
            language="typescript"
          />
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Implemented a dynamic video switching system with smooth transitions</li>
            <li>Created custom loading states and mobile-responsive preview functionality</li>
            <li>Integrated audio feedback for user interactions</li>
          </ul>
        </div>

        {/* Advanced Animation System */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">2. Advanced Animation System</h3>
          <CodeBlock
            code={`const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            });
            // ... animation implementation
        });
    }, []);
}`}
            language="typescript"
          />
        </div>

        {/* Interactive Features Gallery */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">3. Interactive Features Gallery</h3>
          <CodeBlock
            code={`const BentoTilt = ({children, className = ''}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();
    
    const handelMouseMove = (e) => {
        if(!itemRef.current) return;
        const {left, top, width, height} = itemRef.current.getBoundingClientRect();
        // ... tilt calculation logic
    }
    
    // ... more implementation details
}`}
            language="typescript"
          />
        </div>
      </section>

      {/* Technical Challenges Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Technical Challenges & Solutions
        </h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">1. Video Performance</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white">Challenge:</p>
              <p className="text-gray-300">Managing multiple video elements while maintaining smooth performance.</p>
              <p className="font-semibold text-white mt-4">Solution:</p>
              <p className="text-gray-300">Implemented a custom video loading system with preloading and efficient state management.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">2. Animation Performance</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white">Challenge:</p>
              <p className="text-gray-300">Complex animations causing performance issues on mobile devices.</p>
              <p className="font-semibold text-white mt-4">Solution:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Implemented throttling for animation calculations</li>
                <li>Used GSAP's performance optimization features</li>
                <li>Added device-specific animation adjustments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Key Learnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Animation Optimization</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Mastered GSAP for complex animations</li>
              <li>Learned performance optimization techniques</li>
              <li>Understood hardware acceleration importance</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">React Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Improved component architecture knowledge</li>
              <li>Mastered hooks implementation</li>
              <li>Enhanced performance optimization</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Modern Web Development</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Gained experience with Vite</li>
              <li>Improved responsive design understanding</li>
              <li>Enhanced web audio API knowledge</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact & Future Improvements */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Impact & Results
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Achieved smooth 60fps animations across devices</li>
            <li>Implemented responsive design across all screen sizes</li>
            <li>Created engaging user experience</li>
            <li>Successfully integrated complex animations</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Future Improvements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Implement server-side rendering</li>
            <li>Add more interactive WebGL elements</li>
            <li>Enhance accessibility features</li>
            <li>Implement progressive web app capabilities</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ZentryContent;