import React, { useState } from 'react';

const JoinCommunityForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    background: '',
    interests: [],
    pathPreference: '',
    referralSource: '',
    orientationTime: '',
    notifications: true,
    agreeTerms: false
  });
  
  // Form submission state
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [memberId, setMemberId] = useState('');
  
  // Interest options
  const interestOptions = [
    { id: 'meditation', label: 'Meditation & Contemplative Practice' },
    { id: 'science', label: 'Scientific Research on Consciousness' },
    { id: 'philosophy', label: 'Sufi Philosophy & Texts' },
    { id: 'arts', label: 'Sacred Arts & Expression' },
    { id: 'community', label: 'Community & Service' },
    { id: 'psychology', label: 'Psychology & Inner Development' },
    { id: 'interfaith', label: 'Interfaith Dialogue' },
    { id: 'rituals', label: 'Traditional Practices & Rituals' }
  ];
  
  // Path preference options
  const pathOptions = [
    { id: 'virtual', label: 'Primarily Virtual Engagement' },
    { id: 'hybrid', label: 'Hybrid (Virtual & In-Person)' },
    { id: 'inperson', label: 'Primarily In-Person (at Dargahs/Khanqahs)' }
  ];
  
  // Event options for orientation
  const orientationOptions = [
    { id: 'tue-9am', label: 'Tuesday, 9:00 AM (GMT)' },
    { id: 'tue-7pm', label: 'Tuesday, 7:00 PM (GMT)' },
    { id: 'thu-9am', label: 'Thursday, 9:00 AM (GMT)' },
    { id: 'thu-7pm', label: 'Thursday, 7:00 PM (GMT)' },
    { id: 'sat-11am', label: 'Saturday, 11:00 AM (GMT)' },
    { id: 'sat-3pm', label: 'Saturday, 3:00 PM (GMT)' }
  ];
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'interests') {
      // Handle multiple interests selection
      const updatedInterests = [...formData.interests];
      if (checked) {
        updatedInterests.push(value);
      } else {
        const index = updatedInterests.indexOf(value);
        if (index > -1) {
          updatedInterests.splice(index, 1);
        }
      }
      setFormData({ ...formData, interests: updatedInterests });
    } else {
      // Handle regular inputs
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };
  
  // Next step in the form
  const goToNextStep = () => {
    if (formStep === 1 && (!formData.name || !formData.email)) {
      alert('Please provide your name and email to continue.');
      return;
    }
    
    if (formStep === 2 && (!formData.background || formData.interests.length === 0)) {
      alert('Please share some information about your background and interests to continue.');
      return;
    }
    
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };
  
  // Go back to previous step
  const goToPreviousStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };
  
  // Submit the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    if (!formData.agreeTerms) {
      alert('Please agree to the community guidelines to complete your registration.');
      return;
    }
    
    if (!formData.orientationTime) {
      alert('Please select a convenient orientation time.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate a member ID
      const memberIdPrefix = "SSC";
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const newMemberId = `${memberIdPrefix}-${randomNum}`;
      setMemberId(newMemberId);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="w-full mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${formStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            1
          </div>
          <div className={`flex-1 h-1 mx-2 ${formStep >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${formStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            2
          </div>
          <div className={`flex-1 h-1 mx-2 ${formStep >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${formStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
            3
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <span className={formStep === 1 ? 'font-bold text-indigo-600' : 'text-gray-500'}>Basic Information</span>
          <span className={formStep === 2 ? 'font-bold text-indigo-600' : 'text-gray-500'}>Background & Interests</span>
          <span className={formStep === 3 ? 'font-bold text-indigo-600' : 'text-gray-500'}>Preferences & Confirmation</span>
        </div>
      </div>
    );
  };
  
  // Render step 1 of the form
  const renderStep1 = () => {
    return (
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="City, Country"
          />
          <p className="mt-1 text-xs text-gray-500">
            Helps us connect you with nearby members and events
          </p>
        </div>
        
        <div>
          <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
            How did you hear about us?
          </label>
          <select
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Please select</option>
            <option value="search">Internet Search</option>
            <option value="social">Social Media</option>
            <option value="friend">Friend or Family</option>
            <option value="event">Event or Conference</option>
            <option value="teacher">Spiritual Teacher</option>
            <option value="dargah">Dargah or Khanqah</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    );
  };
  
  // Render step 2 of the form
  const renderStep2 = () => {
    return (
      <div className="space-y-6">
        <div>
          <label htmlFor="background" className="block text-sm font-medium text-gray-700 mb-1">
            Background & Experience <span className="text-red-500">*</span>
          </label>
          <textarea
            id="background"
            name="background"
            value={formData.background}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Please share a bit about your background, what brings you to the Sufi Science Centre, and any relevant experience in spiritual or scientific domains."
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Areas of Interest <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {interestOptions.map(option => (
              <div key={option.id} className="flex items-start">
                <input
                  type="checkbox"
                  id={`interest-${option.id}`}
                  name="interests"
                  value={option.id}
                  checked={formData.interests.includes(option.id)}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={`interest-${option.id}`} className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Select all that apply to help us suggest relevant programs
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Engagement Path
          </label>
          <div className="space-y-3">
            {pathOptions.map(option => (
              <div key={option.id} className="flex items-start">
                <input
                  type="radio"
                  id={`path-${option.id}`}
                  name="pathPreference"
                  value={option.id}
                  checked={formData.pathPreference === option.id}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor={`path-${option.id}`} className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Render step 3 of the form
  const renderStep3 = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Orientation Session</h3>
          <p className="text-sm text-gray-600 mb-4">
            Select a convenient time to attend a virtual orientation session where you'll learn about our community resources and how to get started.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {orientationOptions.map(option => (
              <div 
                key={option.id} 
                className={`border rounded-md p-3 cursor-pointer transition duration-150 ${
                  formData.orientationTime === option.id 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
                onClick={() => setFormData({...formData, orientationTime: option.id})}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{option.label}</span>
                  <div className={`h-5 w-5 border rounded-full flex items-center justify-center ${
                    formData.orientationTime === option.id 
                      ? 'border-indigo-500 bg-indigo-500' 
                      : 'border-gray-300'
                  }`}>
                    {formData.orientationTime === option.id && (
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Can't make these times? Don't worry - you'll receive alternative options by email.
          </p>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={formData.notifications}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="notifications" className="ml-2 text-sm text-gray-700">
              I would like to receive notifications about upcoming events, programs, and community news
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
              I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-800">Community Guidelines</a> and commit to approaching this community with sincerity, respect, and an open heart <span className="text-red-500">*</span>
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  // Render success message after submission
  const renderSuccessMessage = () => {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Our Community!</h2>
        <p className="text-gray-600 mb-6">
          Your registration has been successfully submitted. We're delighted to have you join us on this journey of integrated spiritual and scientific exploration.
        </p>
        
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6 max-w-md mx-auto">
          <p className="text-sm text-indigo-800 font-medium mb-1">Your Member ID:</p>
          <p className="text-xl font-bold text-indigo-900 mb-2">{memberId}</p>
          <p className="text-xs text-indigo-700">
            Please save this ID for future reference
          </p>
        </div>
        
        <h3 className="text-lg font-medium text-gray-800 mb-3">Next Steps</h3>
        <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <span className="text-gray-700">Check your email for a confirmation message with important links and information</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700">
              Attend your selected orientation session: {orientationOptions.find(option => option.id === formData.orientationTime)?.label || "Your preferred time"}
            </span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-gray-700">Complete your member profile with additional details</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-gray-700">Join your first Virtual Dhikr Circle (Fridays) or Sohbet Forum (First Sundays)</span>
          </li>
        </ul>
        
        <button
          type="button"
          onClick={() => window.location.href = '/dashboard'}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm transition-colors duration-150 ease-in-out"
        >
          Explore Community Resources
        </button>
      </div>
    );
  };
  
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-700 to-purple-800 py-6 px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Join Our Community</h1>
        <p className="text-indigo-100 mt-2">Begin your journey with the Sufi Science Centre</p>
      </div>
      
      <div className="p-6">
        {isSubmitted ? (
          renderSuccessMessage()
        ) : (
          <form onSubmit={handleSubmit}>
            {renderStepIndicator()}
            
            {/* Form Steps */}
            {formStep === 1 && renderStep1()}
            {formStep === 2 && renderStep2()}
            {formStep === 3 && renderStep3()}
            
            {/* Form Navigation */}
            <div className="mt-8 flex justify-between">
              {formStep > 1 ? (
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium"
                >
                  Previous
                </button>
              ) : (
                <div></div> // Empty div for spacing
              )}
              
              {formStep < 3 ? (
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium disabled:bg-indigo-400"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Questions about joining? Email <a href="mailto:connect@sufisciencecentre.org" className="text-indigo-600 hover:text-indigo-800">connect@sufisciencecentre.org</a> or schedule a video call with a community guide.
        </p>
      </div>
    </div>
  );
};

export default JoinCommunityForm;
