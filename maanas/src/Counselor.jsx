import React, { useState, useEffect } from 'react';

const CounselorDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [animatedNumbers, setAnimatedNumbers] = useState({
    totalSessions: 0,
    activeSessions: 0,
    completedSessions: 0,
    upcomingSessions: 0
  });
  const [selectedFilter, setSelectedFilter] = useState('All States');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Mock data for the counselor with Indian name
  const counselorData = {
    name: "Dr. Priya Sharma",
    id: "CNS-2024-001",
    specialization: "Clinical Psychology & Family Therapy",
    rating: 4.8,
    experience: "12 years",
    location: "Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    email: "dr.priya.sharma@mindcare.in"
  };

  // Mock client data with Indian names and different states
  const clientsData = [
    { 
      id: 1, 
      name: "Arjun Patel", 
      state: "Active", 
      nextSession: "Today 2:00 PM", 
      priority: "high", 
      progress: 75,
      age: 28,
      issue: "Anxiety & Depression",
      phone: "+91 98765 11111",
      email: "arjun.patel@email.com",
      address: "Bandra, Mumbai",
      sessionCount: 12,
      startDate: "2024-01-15",
      notes: "Patient showing significant improvement in managing anxiety triggers."
    },
    { 
      id: 2, 
      name: "Kavya Reddy", 
      state: "Scheduled", 
      nextSession: "Tomorrow 10:00 AM", 
      priority: "medium", 
      progress: 60,
      age: 24,
      issue: "Relationship Counseling",
      phone: "+91 98765 22222",
      email: "kavya.reddy@email.com",
      address: "Hitech City, Hyderabad",
      sessionCount: 8,
      startDate: "2024-02-20",
      notes: "Working on communication skills and conflict resolution."
    },
    { 
      id: 3, 
      name: "Rohan Singh", 
      state: "Completed", 
      lastSession: "Yesterday", 
      priority: "low", 
      progress: 100,
      age: 35,
      issue: "Stress Management",
      phone: "+91 98765 33333",
      email: "rohan.singh@email.com",
      address: "Connaught Place, Delhi",
      sessionCount: 15,
      startDate: "2023-11-10",
      notes: "Successfully completed therapy. Great progress in work-life balance."
    },
    { 
      id: 4, 
      name: "Ananya Gupta", 
      state: "Pending", 
      nextSession: "Today 4:00 PM", 
      priority: "high", 
      progress: 30,
      age: 22,
      issue: "Academic Stress",
      phone: "+91 98765 44444",
      email: "ananya.gupta@email.com",
      address: "Koramangala, Bangalore",
      sessionCount: 4,
      startDate: "2024-08-01",
      notes: "New patient, initial assessment completed. Requires intensive support."
    },
    { 
      id: 5, 
      name: "Vikram Joshi", 
      state: "Active", 
      nextSession: "Today 6:00 PM", 
      priority: "medium", 
      progress: 85,
      age: 31,
      issue: "Career Transition",
      phone: "+91 98765 55555",
      email: "vikram.joshi@email.com",
      address: "Sector 62, Noida",
      sessionCount: 10,
      startDate: "2024-03-05",
      notes: "Making excellent progress with career planning and confidence building."
    },
    { 
      id: 6, 
      name: "Meera Iyer", 
      state: "Rescheduled", 
      nextSession: "Mon 9:00 AM", 
      priority: "low", 
      progress: 45,
      age: 40,
      issue: "Family Therapy",
      phone: "+91 98765 66666",
      email: "meera.iyer@email.com",
      address: "Anna Nagar, Chennai",
      sessionCount: 6,
      startDate: "2024-06-15",
      notes: "Working on family dynamics and communication patterns."
    }
  ];

  const calculateSessionStats = (clients) => {
    const total = clients.reduce((sum, client) => sum + client.sessionCount, 0);
    const active = clients.filter(c => c.state === 'Active').length;
    const completed = clients.filter(c => c.state === 'Completed').length;
    const upcoming = clients.filter(c => ['Scheduled', 'Pending', 'Rescheduled'].includes(c.state)).length;
    
    return { total, active, completed, upcoming };
  };

  const sessionsData = calculateSessionStats(clientsData);

  // Filter clients based on selected filter
  const filteredClients = selectedFilter === 'All States' 
    ? clientsData 
    : clientsData.filter(client => client.state === selectedFilter);

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Animate numbers on mount
  useEffect(() => {
    const animateNumber = (target, key, duration = 1500) => {
      let start = 0;
      const increment = target / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setAnimatedNumbers(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 30);
    };

    animateNumber(sessionsData.total, 'totalSessions');
    animateNumber(sessionsData.active, 'activeSessions');
    animateNumber(sessionsData.completed, 'completedSessions');
    animateNumber(sessionsData.upcoming, 'upcomingSessions');
  }, []);

  const getStateColor = (state) => {
    const colors = {
      'Active': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Scheduled': 'bg-blue-100 text-blue-700 border-blue-200',
      'Completed': 'bg-gray-100 text-gray-700 border-gray-200',
      'Pending': 'bg-amber-100 text-amber-700 border-amber-200',
      'Rescheduled': 'bg-purple-100 text-purple-700 border-purple-200'
    };
    return colors[state] || 'bg-gray-100 text-gray-700';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'bg-red-500',
      'medium': 'bg-yellow-500',
      'low': 'bg-green-500'
    };
    return colors[priority] || 'bg-gray-500';
  };

  const handleViewDetails = (client) => {
    setSelectedClient(client);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setSelectedClient(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white/30">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">👩‍⚕️</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{counselorData.name}</h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span className="bg-pink-200 px-4 py-1 rounded-full text-sm font-medium">ID: {counselorData.id}</span>
                  <span className="text-lg">{counselorData.specialization}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span>{counselorData.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center">📍 {counselorData.location}</span>
                  <span className="flex items-center">🏆 {counselorData.experience}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{currentTime.toLocaleTimeString()}</div>
              <div className="text-gray-600">{currentTime.toLocaleDateString()}</div>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-pink-500 cursor-pointer hover:text-pink-600 text-xl">🔔</span>
                <span className="text-pink-500 cursor-pointer hover:text-pink-600 text-xl">⚙️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">📅</span>
              </div>
              <div className="text-3xl font-bold text-pink-600">{animatedNumbers.totalSessions}</div>
            </div>
            <h3 className="text-gray-700 font-semibold">Total Sessions</h3>
            <p className="text-gray-500 text-sm">All time</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">⏰</span>
              </div>
              <div className="text-3xl font-bold text-emerald-600">{animatedNumbers.activeSessions}</div>
            </div>
            <h3 className="text-gray-700 font-semibold">Active Clients</h3>
            <p className="text-gray-500 text-sm">Currently ongoing</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">📈</span>
              </div>
              <div className="text-3xl font-bold text-blue-600">{animatedNumbers.completedSessions}</div>
            </div>
            <h3 className="text-gray-700 font-semibold">Completed</h3>
            <p className="text-gray-500 text-sm">Successfully finished</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">💜</span>
              </div>
              <div className="text-3xl font-bold text-purple-600">{animatedNumbers.upcomingSessions}</div>
            </div>
            <h3 className="text-gray-700 font-semibold">Upcoming</h3>
            <p className="text-gray-500 text-sm">Scheduled & pending</p>
          </div>
        </div>

        {/* Client Management Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/30">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Client Management</h2>
            <div className="flex items-center space-x-4">
              <span className="text-pink-500 text-xl">🔍</span>
              <select 
                className="bg-pink-100 border border-pink-200 rounded-lg px-4 py-2 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option>All States</option>
                <option>Active</option>
                <option>Scheduled</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Rescheduled</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client, index) => (
              <div
                key={client.id}
                className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-lg border border-pink-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{client.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStateColor(client.state)}`}>
                        {client.state}
                      </span>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(client.priority)}`}></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="mr-2">⏰</span>
                    {client.nextSession || client.lastSession}
                  </div>

                  <div className="text-sm text-gray-600">
                    <strong>Issue:</strong> {client.issue}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-pink-600 font-semibold">{client.progress}%</span>
                    </div>
                    <div className="w-full bg-pink-100 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${client.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => handleViewDetails(client)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No clients found for the selected filter.</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/30">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              📅 Schedule Session
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
              👤 Add New Client
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              📊 View Reports
            </button>
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
              💬 Send Messages
            </button>
          </div>
        </div>
      </div>

      {/* Client Details Popup */}
      {showPopup && selectedClient && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ${showPopup ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-500 ${showPopup ? 'scale-100 rotate-0' : 'scale-95 rotate-3'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Client Details</h2>
              <button 
                onClick={closePopup}
                className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-pink-600 text-xl font-bold">×</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Client Header */}
              <div className="flex items-center space-x-4 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {selectedClient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedClient.name}</h3>
                  <p className="text-gray-600">Age: {selectedClient.age} • {selectedClient.issue}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getStateColor(selectedClient.state)} mt-2`}>
                    {selectedClient.state}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="mr-2">📞</span>
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">📞 {selectedClient.phone}</p>
                    <p className="flex items-center">✉️ {selectedClient.email}</p>
                    <p className="flex items-center">📍 {selectedClient.address}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                    <span className="mr-2">📅</span>
                    Session Details
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Total Sessions:</strong> {selectedClient.sessionCount}</p>
                    <p><strong>Start Date:</strong> {new Date(selectedClient.startDate).toLocaleDateString()}</p>
                    <p><strong>Priority:</strong> <span className={`inline-block w-3 h-3 rounded-full ${getPriorityColor(selectedClient.priority)} mr-2`}></span>{selectedClient.priority}</p>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">📈</span>
                  Treatment Progress
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="text-pink-600 font-bold">{selectedClient.progress}%</span>
                  </div>
                  <div className="w-full bg-pink-100 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${selectedClient.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">📝</span>
                  Clinical Notes
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{selectedClient.notes}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                  📅 Schedule Session
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                  💬 Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CounselorDashboard;