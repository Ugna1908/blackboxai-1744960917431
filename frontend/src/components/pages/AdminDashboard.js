import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active', subscription: 'pro' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'admin', status: 'active', subscription: 'free' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'user', status: 'inactive', subscription: 'pro' },
  ];

  const mockStats = {
    totalUsers: 1250,
    activeSubscriptions: 450,
    monthlyRevenue: '₹22,500',
    averageScore: 75,
  };

  const renderDashboardStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <i className="fas fa-users text-xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-2xl font-semibold text-gray-900">{mockStats.totalUsers}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <i className="fas fa-crown text-xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Active Subscriptions</p>
            <p className="text-2xl font-semibold text-gray-900">{mockStats.activeSubscriptions}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <i className="fas fa-rupee-sign text-xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Monthly Revenue</p>
            <p className="text-2xl font-semibold text-gray-900">{mockStats.monthlyRevenue}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <i className="fas fa-star text-xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Average Score</p>
            <p className="text-2xl font-semibold text-gray-900">{mockStats.averageScore}%</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsersTab = () => (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Users Management</h2>
          <button className="btn-primary">
            <i className="fas fa-plus mr-2"></i>
            Add User
          </button>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="input-field pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscription
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.subscription === 'pro' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.subscription}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderRolesTab = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Role Management</h2>
        <button className="btn-primary">
          <i className="fas fa-plus mr-2"></i>
          Add Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Super Admin Role Card */}
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Super Admin</h3>
              <p className="text-sm text-gray-500">Full system access</p>
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              User management
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              Role management
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              Content management
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              System settings
            </div>
          </div>
        </div>

        {/* Content Admin Role Card */}
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Content Admin</h3>
              <p className="text-sm text-gray-500">Content management access</p>
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              Blog management
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              Template management
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-times text-red-500 mr-2"></i>
              User management
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-times text-red-500 mr-2"></i>
              System settings
            </div>
          </div>
        </div>

        {/* User Role Card */}
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">User</h3>
              <p className="text-sm text-gray-500">Basic access</p>
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              Resume upload
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-check text-green-500 mr-2"></i>
              View analysis
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <i className="fas fa-times text-red-500 mr-2"></i>
              Admin features
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage users, roles, and monitor system performance
          </p>
        </div>

        {/* Stats Cards */}
        {renderDashboardStats()}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('users')}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === 'users'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Users
              </button>
              <button
                onClick={() => setActiveTab('roles')}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === 'roles'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                Roles
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'users' && renderUsersTab()}
        {activeTab === 'roles' && renderRolesTab()}
      </div>
    </div>
  );
};

export default AdminDashboard;
