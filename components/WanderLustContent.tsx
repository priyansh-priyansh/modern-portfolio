import React from 'react';
import { CodeBlock } from './ui/CodeBlock';

const WanderLustContent = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 space-y-16">
      {/* Project Overview Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
          Project Overview
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          WanderLust is a full-stack web application inspired by Airbnb that allows users to discover, list, and review travel accommodations worldwide. The platform features user authentication, property listings, reviews, and interactive maps.
        </p>
      </section>

      {/* Technical Stack Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
          Technical Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Backend', desc: 'Node.js, Express.js' },
            { title: 'Frontend', desc: 'EJS, Bootstrap, JavaScript' },
            { title: 'Database', desc: 'MongoDB with Mongoose ODM' },
            { title: 'Authentication', desc: 'Passport.js' },
            { title: 'Cloud Services', desc: 'Cloudinary, Mapbox' },
            { title: 'Deployment', desc: 'Vercel' },
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
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
          Key Features
        </h2>
        
        {/* User Authentication */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">1. User Authentication & Authorization</h3>
          <CodeBlock
            code={`module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            return res.redirect("/listings");
        });
    } catch(e) {
        req.flash("error", e.message);
        return res.redirect("/signup");
    }
}`}
            language="javascript"
          />
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Implemented secure user authentication using Passport.js</li>
            <li>Password reset functionality with email notifications</li>
            <li>Session management with MongoDB store</li>
          </ul>
        </div>

        {/* Property Listings */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">2. Property Listings Management</h3>
          <CodeBlock
            code={`module.exports.createListing = async (req, res, next) => {
  try {
    let response = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;

    let savedListing = await newListing.save();
    req.flash("success", "New listing Created!");
    return res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};`}
            language="javascript"
          />
        </div>

        {/* Review System */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">3. Review System</h3>
          <CodeBlock
            code={`const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});`}
            language="javascript"
          />
        </div>
      </section>

      {/* Technical Challenges Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
          Technical Challenges & Solutions
        </h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">1. Secure File Upload</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white">Challenge:</p>
              <p className="text-gray-300">Implementing secure and efficient image upload functionality.</p>
              <p className="font-semibold text-white mt-4">Solution:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Implemented Cloudinary integration for secure image hosting</li>
                <li>Added file validation and size restrictions</li>
                <li>Created optimized image transformations</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">2. Location Services</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white">Challenge:</p>
              <p className="text-gray-300">Implementing accurate and interactive location features.</p>
              <p className="font-semibold text-white mt-4">Solution:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Integrated Mapbox geocoding for accurate locations</li>
                <li>Implemented reverse geocoding for validation</li>
                <li>Created interactive map interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
          Key Learnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Authentication Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Secure authentication flows</li>
              <li>Password reset functionality</li>
              <li>Session management</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Service Integration</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Multiple third-party APIs</li>
              <li>Environment variables</li>
              <li>Asynchronous operations</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Database Design</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>MongoDB schema design</li>
              <li>Collection relationships</li>
              <li>Efficient querying</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact & Future Improvements */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
            Impact & Results
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Successfully deployed a full-stack application</li>
            <li>Implemented complex features like maps and image upload</li>
            <li>Created a scalable and maintainable codebase</li>
            <li>Developed a responsive and user-friendly interface</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
            Future Improvements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Real-time messaging between users</li>
            <li>Payment gateway integration</li>
            <li>Advanced search filters</li>
            <li>Booking management system</li>
            <li>User verification system</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WanderLustContent; 