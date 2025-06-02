import { useState } from 'react';
import { useLocation } from 'wouter';

interface BusinessSearchResult {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
}

export default function Onboarding() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BusinessSearchResult[]>([]);

  const mockSearchResults: BusinessSearchResult[] = [
    {
      id: '1',
      name: 'Acme Coffee Shop',
      address: '123 Main St, Anytown, USA',
      rating: 4.2,
      reviewCount: 127
    },
    {
      id: '2',
      name: 'Main Street Cafe',
      address: '125 Main St, Anytown, USA',
      rating: 4.5,
      reviewCount: 89
    }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setSearchResults(mockSearchResults.filter(business => 
        business.name.toLowerCase().includes(query.toLowerCase())
      ));
    } else {
      setSearchResults([]);
    }
  };

  const handleBusinessSelect = (business: BusinessSearchResult) => {
    console.log('Selected business:', business);
    setLocation('/dashboard');
  };

  const handleSkip = () => {
    setLocation('/dashboard');
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-100 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">Step {currentStep} of 3</span>
            <span className="text-sm font-medium text-blue-500">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-md mx-auto p-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Business</h2>
          <p className="text-gray-600">Let's start by connecting your Google Business Profile</p>
        </div>
        
        {/* Business Search */}
        <div className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for your business..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-4 bg-gray-50 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            />
            <svg className="w-5 h-5 text-gray-400 absolute right-4 top-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Search Results */}
          {searchResults.map((business) => (
            <div 
              key={business.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer hover:border-blue-500 transition-all duration-200"
              onClick={() => handleBusinessSelect(business)}
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{business.name}</h3>
                  <p className="text-sm text-gray-600">{business.address}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 ml-1">
                        {business.rating} ({business.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3 mt-8">
          <button 
            onClick={handleSkip}
            className="flex-1 py-4 px-6 bg-gray-100 text-gray-900 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-200"
          >
            Skip for Now
          </button>
          <button 
            onClick={() => handleBusinessSelect(mockSearchResults[0])}
            className="flex-1 py-4 px-6 bg-blue-500 text-white rounded-2xl font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
