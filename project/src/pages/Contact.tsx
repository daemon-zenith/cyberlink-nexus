import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CyberButton from '../components/CyberButton';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  company: string;
  problems: string;
  additionalInfo: string;
};

const Contact = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    document.title = 'Contact | CyberLink Nexus';
    const path = window.location.pathname;
    if (path !== '/' && !window.location.hash) {
      navigate(path, { replace: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  const onSubmit = async (data: FormData) => {
    try {
      const webhookUrl = 'https://hook.us2.make.com/p3qwet2lwzeityj1h04dwyrny1yu499p'; // Replace this with your make.com webhook URL

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      console.log('Form Data:', data); // For debugging
      // Redirect to Thank You page
      navigate('/thank-you');
    } catch (error) {
      alert("There was a problem submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cyber-black/70 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img
            src="https://i.imgur.com/bRjTtpp.png"
            alt="CyberLink Nexus Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-space font-bold text-center mb-3 neon-text-blue">
          Launch Your AI System
        </h1>

        <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
          Submit the form below and our team will follow up immediately. At Cyber Link Nexus, Speed is our standard.
        </p>

        <div className="bg-cyber-dark/70 backdrop-blur-md rounded-lg p-8 border border-cyber-blue-400/20 shadow-xl mb-10 circuit-pulse" style={{
          animationName: 'circuit-pulse',
          borderColor: 'rgba(0, 247, 255, 0.3)',
          boxShadow: '0 0 5px rgba(0, 247, 255, 0.3), 0 0 10px rgba(0, 247, 255, 0.2), inset 0 0 5px rgba(0, 247, 255, 0.1)',
          backgroundImage: 'linear-gradient(45deg, rgba(0, 247, 255, 0.03) 25%, transparent 25%)'
        }}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                <input
                  id="name"
                  type="text"
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  {...register('name', { required: true })}
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">Name is required</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                />
                {errors.email?.type === 'required' && <p className="mt-1 text-red-500 text-sm">Email is required</p>}
                {errors.email?.type === 'pattern' && <p className="mt-1 text-red-500 text-sm">Please enter a valid email</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                <input id="phone" type="tel" className="form-input" {...register('phone')} />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-300 mb-2">Company Name</label>
                <input id="company" type="text" className="form-input" {...register('company')} />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-gray-300 mb-2">Select Service *</label>
              <select
                id="service"
                className={`form-input ${errors.service ? 'border-red-500' : ''}`}
                {...register('service', { required: true })}
              >
                <option value="">Select a service</option>
                <option value="AI-Powered Chatbots">AI-Powered Chatbots</option>
                <option value="Business Automation Solutions">Business Automation Solutions</option>
                <option value="Custom Website Development">Custom Website Development</option>
              </select>
              {errors.service && <p className="mt-1 text-red-500 text-sm">Please select a service</p>}
            </div>

            <div>
              <label htmlFor="problems" className="block text-gray-300 mb-2">What problems are you looking to solve? *</label>
              <textarea
                id="problems"
                rows={4}
                className={`form-input ${errors.problems ? 'border-red-500' : ''}`}
                {...register('problems', { required: true })}
              ></textarea>
              {errors.problems && <p className="mt-1 text-red-500 text-sm">This field is required</p>}
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-gray-300 mb-2">Additional Information</label>
              <textarea 
                id="additionalInfo" 
                rows={4} 
                className="form-input" 
                {...register('additionalInfo')}
              ></textarea>
            </div>

            <div className="text-center">
              <CyberButton type="submit" color="blue" className="px-10">
                SUBMIT REQUEST
              </CyberButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;