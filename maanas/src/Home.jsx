import React, { useState, useRef, useEffect } from 'react';

// --- Icon Components ---
const UserIcon = () => <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>;
const ArrowRightIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const HandshakeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 15v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
const DollarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M12 14v4m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 14c-1.657 0-3-.895-3-2s1.343-2 3-2m0 8c1.657 0 3-.895 3-2s-1.343-2-3-2m0 0c1.11 0 2.08.402 2.599 1" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;


// --- Static Components ---
const FloatingPetal = ({ style }) => <div className="absolute text-4xl opacity-50 select-none" style={style}>🌸</div>;
const BackgroundPetals = () => {
    const petals = [ { top: '10%', left: '5%', animation: 'float 15s ease-in-out infinite' }, { top: '20%', left: '80%', animation: 'float 20s ease-in-out infinite 3s' }, { top: '50%', left: '10%', animation: 'float 25s ease-in-out infinite 1s' }, { top: '80%', left: '90%', animation: 'float 18s ease-in-out infinite 2s' }, { top: '60%', left: '50%', animation: 'float 22s ease-in-out infinite 4s' }, { top: '5%', left: '40%', animation: 'float 16s ease-in-out infinite' }, ];
    return <>{petals.map((petal, i) => <FloatingPetal key={i} style={petal} />)}</>;
};

// --- NEW Floating Background Icons ---
const BackgroundIcon = ({ icon, className }) => (
    <div className={`absolute text-rose-100/80 text-7xl ${className}`}>
        {icon}
    </div>
);

const FloatingIcons = () => (
    <>
        <BackgroundIcon icon="🧠" className="top-[15%] left-[8%] animate-pulse" />
        <BackgroundIcon icon="❤️" className="top-[25%] right-[12%] animate-pulse delay-500" />
        <BackgroundIcon icon="💬" className="bottom-[18%] left-[12%] animate-pulse delay-1000" />
        <BackgroundIcon icon="🧘" className="bottom-[28%] right-[15%] animate-pulse delay-200" />
        <BackgroundIcon icon="☀️" className="top-[45%] left-[35%] animate-pulse delay-700" />
        <BackgroundIcon icon="🌱" className="bottom-[8%] right-[8%] animate-pulse delay-300" />
    </>
);


const Header = ({ onLogout, onProfileClick }) => ( <header className="relative z-10 container mx-auto px-6 py-4 flex justify-between items-center text-gray-800"> <h1 className="text-3xl font-lora font-bold">Manas</h1> <nav className="hidden md:flex space-x-8 items-center"> {['Home', 'Therapy', 'Assessment', 'Guides'].map(item => ( <a href="#" key={item} className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-medium">{item}</a> ))} </nav> <div className="flex items-center space-x-4"> <button onClick={onProfileClick} className="bg-rose-500 p-2 rounded-full shadow-md hover:bg-rose-600 transition-all duration-300"> <UserIcon /> </button> {onLogout && ( <button onClick={onLogout} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300" > Logout </button> )} </div> </header> );
const InfoCard = ({ title, description, buttonText, bgColor, icon }) => ( <div className={`p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 ${bgColor}`}> <div> <div className="text-5xl mb-4">{icon}</div> <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3> <p className="text-gray-600 text-sm">{description}</p> </div> <button onClick={() => console.log(`${buttonText} clicked!`)} className="mt-6 w-full bg-rose-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-rose-600 transition-colors duration-300"> <span>{buttonText}</span> <ArrowRightIcon /> </button> </div> );

// --- GEMINI API POWERED COMPONENT ---
const MindfulReflection = () => {
    const [reflectionText, setReflectionText] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleReflectionSubmit = async () => {
        if (!reflectionText.trim()) { setError('Please write a few words to get a reflection.'); return; }
        setIsLoading(true); setError(''); setAiResponse('');
        const systemPrompt = "You are Manas, a compassionate and gentle AI guide for mental wellness. Your role is to read the user's reflection and provide a short, supportive, and constructive response. Do not give medical advice. Focus on validating their feelings, offering a positive perspective or a simple mindfulness prompt. Keep your response to 2-3 sentences. Use a warm and encouraging tone.";
        const userQuery = `Here is my reflection, please provide a gentle response: "${reflectionText}"`;
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: userQuery }] }], systemInstruction: { parts: [{ text: systemPrompt }] }, }) });
            if (!response.ok) { throw new Error(`API error: ${response.statusText}`); }
            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) { setAiResponse(text); } else { throw new Error("Could not get a reflection. Please try again."); }
        } catch (e) { setError(e.message); console.error("Gemini API call failed:", e); } finally { setIsLoading(false); }
    };

    return (
        <div className="mt-24 bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-rose-100 flex flex-col items-center max-w-2xl mx-auto space-y-6">
            <h2 className="font-lora text-3xl font-bold text-gray-800">Mindful Reflection</h2>
            <p className="text-gray-600 text-center">A safe space for your thoughts. Write what's on your mind and get a gentle perspective.</p>
            <textarea value={reflectionText} onChange={(e) => setReflectionText(e.target.value)} placeholder="What's on your mind today?" className="w-full h-32 p-4 bg-rose-50 border-2 border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all duration-300" disabled={isLoading} />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button onClick={handleReflectionSubmit} disabled={isLoading} className="px-8 py-3 bg-rose-500 text-white font-bold rounded-full shadow-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 transition-all duration-300 transform hover:scale-105 active:scale-100 disabled:bg-rose-300 disabled:cursor-not-allowed flex items-center">
                {isLoading ? ( <> <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Thinking... </> ) : ( "✨ Get a Gentle Reflection" )}
            </button>
            {aiResponse && ( <div className="w-full mt-4 p-4 bg-emerald-50 border-l-4 border-emerald-400 rounded-r-lg animate-fade-in-up"> <p className="text-emerald-800">{aiResponse}</p> </div> )}
        </div>
    );
};

// --- MODAL COMPONENTS ---
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
            <div className="relative bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"> <CloseIcon /> </button>
                {children}
            </div>
        </div>
    );
};
const VolunteerModal = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {submitted ? ( <div className="text-center"> <h2 className="font-lora text-2xl font-bold text-gray-800 mb-4">Thank You!</h2> <p className="text-gray-600">We've received your application and will be in touch soon. Your willingness to help makes a world of difference.</p> </div> ) : ( <> <h2 className="font-lora text-2xl font-bold text-gray-800 mb-4">Become a Volunteer</h2> <p className="text-gray-600 mb-6">Join our team of compassionate listeners. Please fill out the form below to get started.</p> <form onSubmit={handleSubmit} className="space-y-4"> <input type="text" placeholder="Your Name" className="w-full p-3 bg-rose-50 border-2 border-rose-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300" required /> <input type="email" placeholder="Your Email" className="w-full p-3 bg-rose-50 border-2 border-rose-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300" required /> <textarea placeholder="Why do you want to volunteer?" rows="3" className="w-full p-3 bg-rose-50 border-2 border-rose-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300" required></textarea> <button type="submit" className="w-full px-6 py-3 bg-rose-500 text-white font-bold rounded-full shadow-lg hover:bg-rose-600 transition-all">Submit Application</button> </form> </> )}
        </Modal>
    );
};
const DonorModal = ({ isOpen, onClose }) => {
    const [amount, setAmount] = useState(50); const [submitted, setSubmitted] = useState(false); const amounts = [25, 50, 100, 250];
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
             {submitted ? ( <div className="text-center"> <h2 className="font-lora text-2xl font-bold text-gray-800 mb-4">Thank You for Your Generosity!</h2> <p className="text-gray-600">Every contribution helps us continue our mission. A receipt for your donation of <span className="font-bold">${amount}</span> has been sent to your email.</p> </div> ) : ( <> <h2 className="font-lora text-2xl font-bold text-gray-800 mb-4">Become a Donor</h2> <p className="text-gray-600 mb-6">Your support helps us provide vital services. Please choose a donation amount.</p> <form onSubmit={handleSubmit}> <div className="grid grid-cols-2 gap-4 mb-6"> {amounts.map(a => ( <button key={a} type="button" onClick={() => setAmount(a)} className={`p-4 text-center rounded-lg border-2 font-bold transition-all ${amount === a ? 'bg-rose-500 text-white border-rose-500' : 'bg-rose-50 border-rose-200 hover:border-rose-400'}`}> ${a} </button> ))} </div> <input type="number" placeholder="Custom Amount" onChange={(e) => setAmount(Number(e.target.value))} className="w-full p-3 mb-6 bg-rose-50 border-2 border-rose-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300" /> <button type="submit" className="w-full px-6 py-3 bg-rose-500 text-white font-bold rounded-full shadow-lg hover:bg-rose-600 transition-all">Donate ${amount}</button> </form> </> )}
        </Modal>
    );
};

// --- PROFILE MODAL & ROLE-BASED COMPONENTS ---
const UserProfileModal = ({ user, isOpen, onClose }) => {
    const getRoleSpecificContent = () => {
        switch (user.role) {
            case 'counselor':
                return (
                    <div className="mt-6">
                        <h3 className="font-bold text-gray-700 mb-2">Upcoming Appointments</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="p-2 bg-rose-50 rounded-md">10:00 AM - Anuj A.</li>
                            <li className="p-2 bg-rose-50 rounded-md">11:30 AM - Sara B.</li>
                        </ul>
                    </div>
                );
            case 'admin':
                return (
                    <div className="mt-6">
                        <h3 className="font-bold text-gray-700 mb-2">Site Statistics</h3>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div><p className="text-2xl font-bold text-rose-500">1,204</p><p className="text-xs text-gray-500">Users Helped</p></div>
                            <div><p className="text-2xl font-bold text-rose-500">32</p><p className="text-xs text-gray-500">Volunteers Active</p></div>
                        </div>
                    </div>
                );
            case 'user':
            default:
                 return (
                    <div className="mt-6">
                        <h3 className="font-bold text-gray-700 mb-2">My Recent Reflections</h3>
                        <p className="text-sm text-gray-600 italic p-2 bg-rose-50 rounded-md">"Feeling a bit overwhelmed today, but trying to stay positive..."</p>
                    </div>
                );
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-center">
                <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
                {user.role !== 'user' && (
                    <span className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full ${user.role === 'admin' ? 'bg-rose-100 text-rose-800' : 'bg-sky-100 text-sky-800'}`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                )}
                <div className="my-6 border-t border-rose-200"></div>
                {getRoleSpecificContent()}
            </div>
        </Modal>
    );
};

// --- GALLERY SECTION ---
const GallerySection = () => {
    const images = [
        "https://placehold.co/600x400/ffe4e6/f43f5e?text=Event+1",
        "https://placehold.co/600x400/fff1f2/f43f5e?text=Workshop",
        "https://placehold.co/600x400/ffe4e6/f43f5e?text=Community",
        "https://placehold.co/600x400/fff1f2/f43f5e?text=Awareness",
        "https://placehold.co/600x400/ffe4e6/f43f5e?text=Support",
        "https://placehold.co/600x400/fff1f2/f43f5e?text=Group+Session",
        "https://placehold.co/600x400/ffe4e6/f43f5e?text=Conference",
        "https://placehold.co/600x400/fff1f2/f43f5e?text=Art+Therapy",
    ];

    return (
        <div className="relative z-10 container mx-auto px-6 mt-24">
            <div className="py-16 bg-gray-800 rounded-3xl shadow-2xl">
                <div className="text-center text-white px-4 mb-12">
                    <h2 className="font-lora text-4xl md:text-5xl font-bold">
                        OUR <span className="text-rose-400">GALLERY</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                    {images.map((src, index) => (
                        <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg">
                            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <PlusIcon />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- TESTIMONIALS SECTION ---
const TestimonialsSection = () => {
    const testimonials = [
        { name: "Anuj Alok", role: "Beneficiary", text: "In my darkest hour, Manas was the light. The counselors listened without judgment and gave me the strength to carry on. I am forever grateful." },
        { name: "Sara Bhoira", role: "Student Volunteer", text: "Volunteering here has been a life-changing experience. The training is thorough, and the sense of community is incredible. You truly feel like you're making a difference." },
        { name: "Shreyas Rao", role: "Advocate, High Court", text: "The professionalism and dedication of the Manas team are commendable. They provide a crucial service to our community with empathy and integrity." }
    ];

    return (
        <section className="mt-24 py-16">
            <div className="text-center mb-16">
                <h2 className="font-lora text-4xl md:text-5xl font-bold text-gray-800">
                    TESTIMONIALS <span className="text-rose-500">SAY</span>
                </h2>
            </div>
            <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="relative bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-rose-200 transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute -bottom-4 left-8 w-8 h-8 bg-white/70 border-b-2 border-r-2 border-rose-200 transform rotate-45 backdrop-blur-sm"></div>
                        <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                        <div>
                            <p className="font-bold text-gray-800">{testimonial.name}</p>
                            <p className="text-sm text-rose-500 font-semibold">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-24 text-center px-4">
                 <div className="inline-block bg-rose-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-rose-600 transition-all transform hover:scale-105">
                    <a href="#" className="flex items-center gap-4">
                        <span>DO YOU WANT TO BUILD A BETTER WORLD?</span>
                        <span className="font-lora text-lg">JOIN US</span>
                    </a>
                </div>
            </div>
        </section>
    );
};


// --- SMOOTH CURSOR COMPONENT ---
const DefaultCursorSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3522 2.34396C12.1124 1.86963 11.8876 1.86963 11.6478 2.34396L0.247848 23.834C0.00804816 24.3083 0.380351 24.8115 0.899948 24.8115H23.1C23.62 24.8115 23.9923 24.3083 23.7525 23.834L12.3522 2.34396Z" fill="#f43f5e" />
    </svg>
);

const SmoothCursor = ({ cursor = <DefaultCursorSVG />, springConfig = { damping: 30, stiffness: 300, mass: 1 } }) => {
    const cursorRef = useRef(null);
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const [target, setTarget] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const onMouseMove = (e) => {
            setTarget({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    useEffect(() => {
        let animationFrameId;

        const updateCursor = () => {
            const dx = target.x - position.x;
            const dy = target.y - position.y;

            const ax = dx * (springConfig.stiffness / 1000);
            const ay = dy * (springConfig.stiffness / 1000);

            const newVelocityX = (velocity.x + ax) * (1 - springConfig.damping / 100);
            const newVelocityY = (velocity.y + ay) * (1 - springConfig.damping / 100);
            
            const newPositionX = position.x + newVelocityX;
            const newPositionY = position.y + newVelocityY;

            const angle = (Math.atan2(newVelocityY, newVelocityX) * 180) / Math.PI + 90;

            setPosition({ x: newPositionX, y: newPositionY });
            setVelocity({ x: newVelocityX, y: newVelocityY });

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${newPositionX}px, ${newPositionY}px, 0) rotate(${angle}deg)`;
            }

            animationFrameId = requestAnimationFrame(updateCursor);
        };

        animationFrameId = requestAnimationFrame(updateCursor);
        return () => cancelAnimationFrame(animationFrameId);
    }, [position, velocity, target, springConfig]);

    return (
        <div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none z-[9999]">
            {cursor}
        </div>
    );
};


// --- Main Home Page Component ---
export default function Home({ onLogout }) {
    const helpSectionRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(null);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    // Mock user data for demonstration
    const mockUsers = {
        user: { name: "Ayush Kumar", email: "ayush@example.com", role: 'user', avatar: 'https://placehold.co/128x128/e9d5ff/3730a3?text=A' },
        counselor: { name: "Dr. Priya Sharma", email: "priya.s@manas.org", role: 'counselor', avatar: 'https://placehold.co/128x128/bae6fd/0c4a6e?text=P' },
        admin: { name: "Rajesh Singh", email: "rajesh.s@manas.org", role: 'admin', avatar: 'https://placehold.co/128x128/fecdd3/881337?text=R' }
    };
    const [currentUser, setCurrentUser] = useState(mockUsers.user);

    const handleVolunteerClick = () => { helpSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); };
    
    const supportItems = [ { icon: <CalendarIcon />, title: "EVENTS", description: "Workshops on different levels with high-risk target groups eg. school, college students, etc." }, { icon: <HeartIcon />, title: "GET HELP", description: "You can contact us for emotional crisis situations, mental illness issues, and suicidal ideation." }, { icon: <UsersIcon />, title: "VOLUNTEER", description: "Get support from professionally trained and skilled volunteers. Each volunteer has to undergo training." } ];
    const helpItems = [ { icon: <HandshakeIcon />, title: "BECOME A VOLUNTEER", action: () => setModalOpen('volunteer') }, { icon: <DollarIcon />, title: "BECOME A DONOR", action: () => setModalOpen('donor') } ];

    return (
        <div className="min-h-screen font-poppins bg-gradient-to-br from-purple-100 via-rose-100 to-rose-200 overflow-hidden relative cursor-none">
            <SmoothCursor />
            <style>{`
                a, button, input[type='button'], input[type='submit'] {
                    cursor: pointer !important;
                }
                textarea, input[type='text'], input[type='email'], input[type='number'] {
                    cursor: text !important;
                }
            `}</style>
            
            <FloatingIcons />
            <BackgroundPetals />
            <Header onLogout={onLogout} onProfileClick={() => setIsProfileModalOpen(true)} />

            {/* --- DEMO ROLE SWITCHER --- */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md flex space-x-2">
                {Object.keys(mockUsers).map(role => (
                    <button key={role} onClick={() => setCurrentUser(mockUsers[role])} className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors ${currentUser.role === role ? 'bg-rose-500 text-white' : 'hover:bg-rose-100'}`}>
                        {role.charAt(0).toUpperCase() + role.slice(1)} View
                    </button>
                ))}
            </div>
            
            <main className="relative z-10 container mx-auto px-6 pt-24 pb-12"> {/* Added pt-24 for space */}
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-gray-600 mb-10">If only life were easy, <span className="font-semibold text-gray-800">{currentUser.name}</span></p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <InfoCard title="1:1 sessions" description="Culturally aware therapists ready to help you." buttonText="Book a Session" bgColor="bg-green-100" icon="💬" />
                        <InfoCard title="Find Your Match" description="73,000 found the right therapist in one go." buttonText="Get Matched" bgColor="bg-blue-100" icon="❤️" />
                        <InfoCard title="Gift a Session" description="Surprise your special one with a special gift in their inbox." buttonText="Gift Therapy" bgColor="bg-purple-100" icon="🎁" />
                    </div>

                    <MindfulReflection />

                    <section className="mt-24">
                        <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                            {supportItems.map((item, index) => (
                                <div key={index} className={`group flex flex-col items-center p-4 ${item.title === 'VOLUNTEER' ? 'cursor-pointer' : ''}`} onClick={item.title === 'VOLUNTEER' ? handleVolunteerClick : null} >
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-rose-200 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                        <div className="relative w-24 h-24 bg-white/70 backdrop-blur-sm border-2 border-rose-100 rounded-full flex items-center justify-center text-rose-500 group-hover:text-white group-hover:bg-rose-500 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-lora text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 max-w-xs">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <div ref={helpSectionRef} className="relative z-10 container mx-auto px-6 mt-24">
                <div className="py-16 bg-gray-800 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 text-center text-white px-4">
                        <h2 className="font-lora text-4xl md:text-5xl font-bold mb-12">
                            HOW CAN YOU HELP <span className="text-rose-400">US</span>
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                            {helpItems.map((item, index) => (
                                 <div key={index} className="group flex items-center gap-4 cursor-pointer" onClick={item.action}>
                                    <div className="p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-rose-300 group-hover:bg-rose-400/20 group-hover:border-rose-300 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-left">{item.title}</h4>
                                        <button className="text-rose-300 font-semibold hover:underline">Read More</button>
                                    </div>
                                 </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <GallerySection />
            <TestimonialsSection />

            <div className="h-24"></div>

            {/* Render Modals */}
            <VolunteerModal isOpen={modalOpen === 'volunteer'} onClose={() => setModalOpen(null)} />
            <DonorModal isOpen={modalOpen === 'donor'} onClose={() => setModalOpen(null)} />
            <UserProfileModal user={currentUser} isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
        </div>
    );
}
