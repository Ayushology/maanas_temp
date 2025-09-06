import { useState, useEffect } from 'react';

// --- ENHANCED ICONS with better styling ---
const LayoutDashboardIcon = ({ className = "w-6 h-6" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg> );
const UsersIcon = ({ className = "w-6 h-6" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> );
const FileTextIcon = ({ className = "w-6 h-6" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg> );
const SettingsIcon = ({ className = "w-6 h-6" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-2l-.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg> );
const SearchIcon = ({ className = "w-5 h-5" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg> );
const XIcon = ({ className = "w-6 h-6" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg> );
const SparkleIcon = ({ className = "w-4 h-4" }) => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0l3.09 6.26L22 9l-6.91 2.74L12 18l-3.09-6.26L2 9l6.91-2.74L12 0z"/></svg> );

// --- ENHANCED MOCK DATA with photos ---
const mockStudents = [
    { id: 'STU72301', name: 'Priya Sharma', year: 2, problem: 'Severe anxiety and panic attacks related to exam stress. Experiencing difficulty sleeping and concentrating during study sessions.', status: 'At Risk', photo: 'https://images.unsplash.com/photo-1494790108755-2616c9d0d3f2?w=400&h=400&fit=crop&crop=face' },
    { id: 'STU88452', name: 'Rohan Gupta', year: 3, problem: 'Showing signs of social withdrawal and expressing feelings of hopelessness. Recently isolated from friends and struggling with academic motivation.', status: 'Needs Follow-up', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { id: 'STU65198', name: 'Aisha Khan', year: 1, problem: 'Difficulty adjusting to college life, homesickness, and loneliness. Missing family and struggling to build new relationships on campus.', status: 'Monitored', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face' },
    { id: 'STU91234', name: 'Vikram Singh', year: 4, problem: 'High levels of stress due to future career uncertainty and placement pressure. Experiencing imposter syndrome and fear of failure.', status: 'At Risk', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
    { id: 'STU54876', name: 'Ananya Reddy', year: 2, problem: 'Experiencing burnout from academic overload and extracurricular commitments. Struggling to maintain work-life balance and showing signs of exhaustion.', status: 'Needs Follow-up', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
    { id: 'STU30987', name: 'Sameer Desai', year: 3, problem: 'Reported instances of bullying and is struggling with self-esteem. Feeling overwhelmed by peer pressure and social dynamics.', status: 'At Risk', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
    { id: 'STU76543', name: 'Neha Patel', year: 1, problem: 'Struggling to make friends and feels isolated from peer groups. Experiencing social anxiety and difficulty in group interactions.', status: 'Monitored', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face' },
];

// --- ENHANCED SIDEBAR with animations ---
const Sidebar = ({ admin }) => (
    <aside className="w-72 bg-white/90 backdrop-blur-xl p-8 flex-col border-r-2 border-pink-200/50 hidden md:flex shadow-xl shadow-pink-100/50">
        <div className="flex items-center space-x-3 mb-16">
            <div className="p-2 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl shadow-lg">
                <SparkleIcon className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">Manas</h1>
        </div>
        <nav className="flex flex-col space-y-6">
            <a href="#" className="group flex items-center space-x-4 text-rose-900 bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-2xl font-bold shadow-md transform hover:scale-105 transition-all duration-300">
                <div className="p-2 bg-white rounded-xl group-hover:bg-pink-50 transition-colors">
                    <LayoutDashboardIcon className="text-pink-500" />
                </div>
                <span>Dashboard</span>
            </a>
            <a href="#" className="group flex items-center space-x-4 text-gray-600 hover:text-rose-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-md">
                <div className="p-2 group-hover:bg-white rounded-xl transition-colors">
                    <UsersIcon />
                </div>
                <span className="font-semibold">Students</span>
            </a>
            <a href="#" className="group flex items-center space-x-4 text-gray-600 hover:text-rose-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-md">
                <div className="p-2 group-hover:bg-white rounded-xl transition-colors">
                    <FileTextIcon />
                </div>
                <span className="font-semibold">Reports</span>
            </a>
            <a href="#" className="group flex items-center space-x-4 text-gray-600 hover:text-rose-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-md">
                <div className="p-2 group-hover:bg-white rounded-xl transition-colors">
                    <SettingsIcon />
                </div>
                <span className="font-semibold">Settings</span>
            </a>
        </nav>
        <div className="mt-auto">
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" alt="Admin" className="w-14 h-14 rounded-full border-3 border-pink-300 shadow-md" />
                <div>
                    <p className="font-bold text-rose-900">{admin.name}</p>
                    <p className="text-sm text-rose-700">{admin.email}</p>
                </div>
            </div>
        </div>
    </aside>
);

// --- ENHANCED STAT CARDS with animations ---
const StatCard = ({ title, value, icon, color, delay = 0 }) => (
    <div 
        className={`bg-gradient-to-br from-${color}-200/80 to-${color}-300/60 
        p-8 rounded-3xl flex items-center space-x-6 border-2 border-${color}-300/50 
        shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2
        transition-all duration-500 cursor-pointer`}  // <-- Added hover effects + cursor
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className={`p-4 bg-white/90 rounded-2xl text-${color}-600 shadow-lg 
        transform group-hover:rotate-12 transition-transform duration-300`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">{title}</p>
            <p className="text-4xl font-black bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                {value}
            </p>
        </div>
    </div>
);
// --- ENHANCED MODAL with dramatic entrance ---
const StudentDetailsModal = ({ student, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (student) {
            setTimeout(() => setIsVisible(true), 10);
        }
    }, [student]);

    if (!student) return null;

    const getStatusChip = (status) => {
        switch (status) {
            case 'At Risk': return 'bg-gradient-to-r from-red-100 to-red-200 text-red-900 border-red-300 shadow-red-100';
            case 'Needs Follow-up': return 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900 border-yellow-300 shadow-yellow-100';
            case 'Monitored': return 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 border-blue-300 shadow-blue-100';
            default: return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 border-gray-300';
        }
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl p-10 relative border-2 border-pink-200/50 transform transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'}`}>
                <button 
                    onClick={handleClose} 
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-all duration-300 p-2 hover:bg-gray-100 rounded-full hover:rotate-90"
                >
                    <XIcon />
                </button>
                
                <div className="flex items-start space-x-8 mb-8">
                    <div className="relative">
                        <img 
                            src={student.photo} 
                            alt="Student" 
                            className="w-32 h-32 rounded-3xl border-4 border-pink-300 shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full shadow-lg">
                            <SparkleIcon className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl font-black mb-2 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">{student.name}</h2>
                        <p className="text-lg text-gray-500 font-mono mb-4 bg-gray-100 px-3 py-1 rounded-lg inline-block">{student.id}</p>
                        <div className={`text-sm font-bold px-4 py-2 rounded-full inline-block border-2 shadow-lg ${getStatusChip(student.status)}`}>
                            {student.status}
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl border-2 border-pink-200/50">
                        <h3 className="font-black text-gray-800 mb-3 text-lg flex items-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            Academic Year
                        </h3>
                        <p className="text-3xl font-black text-pink-600">Year {student.year}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200/50">
                        <h3 className="font-black text-gray-800 mb-3 text-lg flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            Student Status
                        </h3>
                        <p className="text-xl font-bold text-blue-600">Active Student</p>
                    </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-2 border-gray-200/50">
                    <h3 className="font-black text-gray-800 mb-4 text-xl flex items-center">
                        <div className="w-3 h-3 bg-gray-600 rounded-full mr-3"></div>
                        Detailed Assessment
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">{student.problem}</p>
                </div>
            </div>
        </div>
    );
};

// --- FLOATING BACKGROUND COMPONENT ---

// --- MAIN DASHBOARD with enhanced effects ---
export default function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);

    const admin = {
        name: 'Dr. Anjali Rao',
        email: 'anjali.rao@manas.admin.org'
    };

    const filteredStudents = mockStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusDot = (status) => {
        switch (status) {
            case 'At Risk': return 'bg-red-500 shadow-red-300';
            case 'Needs Follow-up': return 'bg-yellow-500 shadow-yellow-300';
            case 'Monitored': return 'bg-blue-500 shadow-blue-300';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex">
            <Sidebar admin={admin} />
            <main className="flex-1 p-12 overflow-y-auto">
                <header className="text-center mb-16">
                    <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl px-8 py-4 rounded-3xl shadow-2xl border-2 border-pink-200/50 mb-6">
                        <div className="p-3 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl">
                            <SparkleIcon className="w-8 h-8 text-white animate-bounce" />
                        </div>
                        <h2 className="text-5xl font-black bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent">Admin Dashboard</h2>
                    </div>
                    <p className="text-gray-600 text-xl font-semibold">Welcome back, {admin.name}. Here's your wellness overview today.</p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <StatCard 
                        title="Total Students" 
                        value="1,280" 
                        icon={<UsersIcon className="w-8 h-8" />} 
                        color="pink" 
                        delay={0}
                    />
                    <StatCard 
                        title="High-Risk Cases" 
                        value={mockStudents.filter(s=>s.status === 'At Risk').length} 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m12 1.62-7.61 13a2.5 2.5 0 0 0 2.15 3.82h15.22a2.5 2.5 0 0 0 2.15-3.82L12 1.62zM12 8v4" /><circle cx="12" cy="16" r=".5" fill="currentColor"/></svg>} 
                        color="orange" 
                        delay={200}
                    />
                    <StatCard 
                        title="Counselors Online" 
                        value="8" 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>} 
                        color="emerald" 
                        delay={400}
                    />
                </section>

                <section className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-pink-200/50 shadow-2xl">
                    <div className="flex justify-between items-center mb-8 flex-wrap gap-6">
                        <h3 className="text-3xl font-black text-gray-800 flex items-center">
                            <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mr-4 animate-pulse"></div>
                            Student Wellness Overview
                        </h3>
                       <div className="relative group">
    <input
        type="text"
        placeholder="Search by name or ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-6 pr-6 py-4 border-2 border-pink-200 rounded-2xl 
        focus:outline-none focus:ring-4 focus:ring-pink-300/50 
        focus:border-pink-400 transition-all w-full sm:w-80 
        text-lg font-semibold bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl"
    />
</div>
                    </div>
                    
                    <div className="overflow-x-auto rounded-2xl shadow-inner">
                        <table className="w-full text-left bg-gradient-to-br from-white/50 to-pink-50/30">
                            <thead>
                                <tr className="border-b-4 border-pink-300/50 bg-gradient-to-r from-pink-100/80 to-rose-100/80">
                                    <th className="p-6 text-lg font-black text-gray-700 uppercase tracking-wider">Student</th>
                                    <th className="p-6 text-lg font-black text-gray-700 uppercase tracking-wider">Year</th>
                                    <th className="p-6 text-lg font-black text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="p-6 text-lg font-black text-gray-700 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map((student, index) => (
                                    <tr 
                                        key={student.id} 
                                        className="border-b-2 border-pink-100/50 hover:bg-gradient-to-r hover:from-pink-50/80 hover:to-rose-50/80 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <td className="p-6 font-bold text-gray-800 flex items-center gap-4">
                                            <img 
                                                src={student.photo} 
                                                alt={student.name} 
                                                className="w-16 h-16 rounded-2xl border-3 border-pink-200 shadow-lg object-cover hover:scale-110 transition-transform duration-300" 
                                            />
                                            <div>
                                                <p className="text-xl font-black text-gray-900">{student.name}</p>
                                                <p className="text-sm text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">{student.id}</p>
                                            </div>
                                        </td>
                                        <td className="p-6 text-gray-700">
                                            <div className="text-2xl font-black text-pink-600">Year {student.year}</div>
                                        </td>
                                        <td className="p-6">
                                            <span className="flex items-center space-x-3">
                                                <span className={`w-4 h-4 rounded-full ${getStatusDot(student.status)} animate-pulse shadow-lg`}></span>
                                                <span className="text-lg font-bold text-gray-800">{student.status}</span>
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <button 
                                                onClick={() => setSelectedStudent(student)} 
                                                className="bg-gradient-to-r from-pink-400 to-rose-500 text-white font-black px-6 py-3 rounded-2xl hover:from-pink-500 hover:to-rose-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-rotate-1"
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredStudents.length === 0 && (
                            <div className="text-center py-20">
                                <div className="text-8xl mb-6">🔍</div>
                                <p className="text-gray-600 font-black text-2xl mb-2">No students found</p>
                                <p className="text-gray-400 text-lg">Try adjusting your search query</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <StudentDetailsModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
        </div>
    );
}