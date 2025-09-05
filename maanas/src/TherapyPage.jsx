import React from 'react';

// Reusing components from other files to maintain a consistent UI
// You would have these in a shared components file in a real app
const Header = ({ onLogout, onNavigate }) => (
    <header className="relative z-10 container mx-auto px-6 py-4 flex justify-between items-center text-gray-800">
        <h1 className="text-3xl font-lora font-bold cursor-pointer" onClick={() => onNavigate('home')}>Manas</h1>
        <nav className="hidden md:flex space-x-8 items-center">
            {['Home', 'Therapy', 'Assessment', 'Guides'].map(item => (
                <a 
                    href="#" 
                    key={item} 
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-300 font-medium"
                >
                    {item}
                </a>
            ))}
        </nav>
        <div className="flex items-center space-x-4">
            <button className="bg-pink-400 p-2 rounded-full shadow-md hover:bg-pink-500 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </button>
            {onLogout && (
                <button onClick={onLogout} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300">
                    Logout
                </button>
            )}
        </div>
    </header>
);

const InfoCard = ({ title, description, buttonText, bgColor, icon }) => (
    <div className={`p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 ${bgColor}`}>
        <div>
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <button onClick={() => console.log(`${buttonText} clicked!`)} className="mt-6 w-full bg-rose-400 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-rose-500 transition-colors duration-300">
            <span>{buttonText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </button>
    </div>
);

const BackgroundPetals = () => {
    const petals = [
        { top: '10%', left: '5%', animation: 'float 15s ease-in-out infinite' }, 
        { top: '20%', left: '80%', animation: 'float 20s ease-in-out infinite 3s' },
        { top: '50%', left: '10%', animation: 'float 25s ease-in-out infinite 1s' }, 
        { top: '80%', left: '90%', animation: 'float 18s ease-in-out infinite 2s' },
        { top: '60%', left: '50%', animation: 'float 22s ease-in-out infinite 4s' }, 
        { top: '5%', left: '40%', animation: 'float 16s ease-in-out infinite' },
    ];
    return <>{petals.map((petal, i) => <div key={i} className="absolute text-4xl opacity-50 select-none" style={petal}>🌸</div>)}</>;
};

export default function TherapyPage({ onLogout, onNavigate }) {
    return (
        <div className="min-h-screen font-poppins bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 overflow-hidden relative">
            <BackgroundPetals />
            <Header onLogout={onLogout} onNavigate={onNavigate} />
            <main className="relative z-10 container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-lora font-bold text-gray-800 mb-4">Therapy & Support</h2>
                    <p className="text-xl text-gray-600 mb-10">Find the right path to emotional wellbeing, with professionals who care.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InfoCard title="Book a Session" description="Connect with a licensed therapist for personalized support." buttonText="Book Now" bgColor="bg-pink-100" icon="🗓️" />
                        <InfoCard title="Group Therapy" description="Join a supportive community to share experiences and grow." buttonText="Join a Group" bgColor="bg-purple-100" icon="👥" />
                        <InfoCard title="Therapy Guides" description="Access a library of self-help guides and resources." buttonText="Read Guides" bgColor="bg-indigo-100" icon="📖" />
                    </div>
                </div>
            </main>
        </div>
    );
}
