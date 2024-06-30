import React from 'react';
import { useForm } from 'react-hook-form';
import useTabStore from '../tabStore'; 
import useFormStore from '../formStore'; 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import './WidgetConfigurationForm.css';

const WidgetConfigurationForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const activeTab = useTabStore((state) => state.activeTab);
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const formData = useFormStore((state) => state.formData);
  const setFormData = useFormStore((state) => state.setFormData);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({ [name]: newValue });
  };

  // Populate the form with the stored data
  React.useEffect(() => {
    for (const key in formData) {
      setValue(key, formData[key]);
    }
  }, [formData, setValue]);

  return (
    <div>
      <Navbar />
      <div className="widget-configuration-form">
        <Sidebar />
        <div className="content">
          <Breadcrumb />
          <div className="container">
            <div className="tabs">
              <button
                className={activeTab === 'general' ? 'active' : ''}
                onClick={() => handleTabChange('general')}
              >
                General
              </button>
              <button
                className={activeTab === 'display' ? 'active' : ''}
                onClick={() => handleTabChange('display')}
              >
                Display
              </button>
            </div>

            {activeTab === 'general' && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="section">
                  <h2>General</h2>
                  <label>Chatbot Name</label>
                  <input
                    type="text"
                    name="chatbotName"
                    onChange={handleInputChange}
                    {...register('chatbotName', { required: 'Chatbot Name is required' })}
                  />
                  {errors.chatbotName && <span>{errors.chatbotName.message}</span>}

                  <label>Welcome Message</label>
                  <input
                    type="text"
                    name="welcomeMessage"
                    onChange={handleInputChange}
                    {...register('welcomeMessage', { required: 'Welcome Message is required' })}
                  />
                  {errors.welcomeMessage && <span>{errors.welcomeMessage.message}</span>}

                  <label>Input Placeholder</label>
                  <input
                    type="text"
                    name="inputPlaceholder"
                    onChange={handleInputChange}
                    {...register('inputPlaceholder', { required: 'Input Placeholder is required' })}
                  />
                  {errors.inputPlaceholder && <span>{errors.inputPlaceholder.message}</span>}
                </div>
              </form>
            )}

            {activeTab === 'display' && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="section">
                  <h2>Display</h2>
                  <label>Primary Color</label>
                  <input
                    type="color"
                    name="primaryColor"
                    onChange={handleInputChange}
                    {...register('primaryColor', { required: 'Primary Color is required' })}
                  />
                  {errors.primaryColor && <span>{errors.primaryColor.message}</span>}

                  <label>Font Size (in px)</label>
                  <input
                    type="number"
                    name="fontSize"
                    onChange={handleInputChange}
                    {...register('fontSize', { required: 'Font Size is required' })}
                  />
                  {errors.fontSize && <span>{errors.fontSize.message}</span>}

                  <label>Font Color</label>
                  <input
                    type="color"
                    name="fontColor"
                    onChange={handleInputChange}
                    {...register('fontColor', { required: 'Font Color is required' })}
                  />
                  {errors.fontColor && <span>{errors.fontColor.message}</span>}

                  <label>Background Image</label>
                  <input
                    type="file"
                    name="backgroundImage"
                    onChange={handleInputChange}
                    {...register('backgroundImage', { required: 'Background Image is required' })}
                  />
                  {errors.backgroundImage && <span>{errors.backgroundImage.message}</span>}
                </div>
              </form>
            )}
            <button type="submit" className="upload-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetConfigurationForm;
