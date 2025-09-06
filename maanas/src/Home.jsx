// src/Home.jsx

import React, { useState, useRef, useEffect } from 'react';

// Create simple icon components inline since they're missing
const HandshakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const DollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Add placeholder components that were missing
const FloatingIcons = () => <div className="absolute inset-0 pointer-events-none"></div>;
const BackgroundPetals = () => <div className="absolute inset-0 pointer-events-none"></div>;
const Header = ({ onLogout, onProfileClick }) => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-rose-500">Maanas</h1>
            <div className="flex items-center gap-4">
                <button onClick={onProfileClick} className="hover:text-rose-500">Profile</button>
                <button onClick={onLogout} className="hover:text-rose-500">Logout</button>
            </div>
        </div>
    </header>
);

const InfoCard = ({ title, description, buttonText, bgColor, icon }) => (
    <div className={`${bgColor} p-6 rounded-xl`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-white px-4 py-2 rounded-full shadow hover:shadow-lg transition-shadow">
            {buttonText}
        </button>
    </div>
);

const MindfulReflection = () => <div className="my-16"></div>;
const GallerySection = () => <div className="my-16"></div>;
const TestimonialsSection = () => <div className="my-16"></div>;
const VolunteerModal = ({ isOpen, onClose }) => isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
            <h2>Volunteer Form</h2>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
) : null;

const DonorModal = ({ isOpen, onClose }) => isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
            <h2>Donor Form</h2>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
) : null;

const UserProfileModal = ({ user, isOpen, onClose }) => isOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
            <h2>{user.name}'s Profile</h2>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
) : null;

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
function Home({ onLogout }) {
    const helpSectionRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(null);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const mockUsers = {
        user: { name: "Ayush Kumar", email: "ayush@example.com", role: 'user', avatar: 'https://placehold.co/128x128/e9d5ff/3730a3?text=A' },
        counselor: { name: "Dr. Priya Sharma", email: "priya.s@manas.org", role: 'counselor', avatar: 'https://placehold.co/128x128/bae6fd/0c4a6e?text=P' },
        admin: { name: "Rajesh Singh", email: "rajesh.s@manas.org", role: 'admin', avatar: 'https://placehold.co/128x128/fecdd3/881337?text=R' }
    };
    const [currentUser, setCurrentUser] = useState(mockUsers.user);

    const handleVolunteerClick = () => { helpSectionRef.current?.scrollIntoView({ behavior: 'smooth' }); };

    const supportItems = [
        { icon: <HandshakeIcon />, title: "EVENTS", description: "Workshops on different levels with high-risk target groups eg. school, college students, etc." },
        { icon: <DollarIcon />, title: "GET HELP", description: "You can contact us for emotional crisis situations, mental illness issues, and suicidal ideation." },
        { icon: <HandshakeIcon />, title: "VOLUNTEER", description: "Get support from professionally trained and skilled volunteers. Each volunteer has to undergo training." }
    ];
    const helpItems = [
        { icon: <HandshakeIcon />, title: "BECOME A VOLUNTEER", action: () => setModalOpen('volunteer') },
        { icon: <DollarIcon />, title: "BECOME A DONOR", action: () => setModalOpen('donor') }
    ];

    return (
        <div className="min-h-screen font-poppins bg-gradient-to-br from-purple-100 via-rose-100 to-rose-200 overflow-hidden relative cursor-none">
            <SmoothCursor />
            <style>{`
                a, button, input[type='button'], input[type='submit'] { cursor: pointer !important; }
                textarea, input[type='text'], input[type='email'], input[type='number'] { cursor: text !important; }
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

            <main className="relative z-10 container mx-auto px-6 pt-24 pb-12">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {helpItems.map((item, index) => (
                                <div key={index} className="p-6 bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={item.action}>
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <GallerySection />
            <TestimonialsSection />

            <VolunteerModal isOpen={modalOpen === 'volunteer'} onClose={() => setModalOpen(null)} />
            <DonorModal isOpen={modalOpen === 'donor'} onClose={() => setModalOpen(null)} />
            <UserProfileModal user={currentUser} isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
        </div>
    );
}

export default Home;
