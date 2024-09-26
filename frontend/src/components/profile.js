import React from 'react';
import { Image } from 'antd';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Icons for social media

const Profile = () => {
  // Sample data
  const formData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City, Country',
    githubProfile: 'https://github.com/johndoe',
    leetcodeProfile: 'https://leetcode.com/johndoe',
    linkedinProfile: 'https://linkedin.com/in/johndoe',
    skills: ['JavaScript', 'Python', 'React', 'Node.js'],
    experience: '5',
    image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', // Replace this with a valid URL or a file if needed
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Profile</h1>

        <div className="bg-white shadow-lg rounded-lg flex p-6 space-x-6">
          {/* Left Section - Image and Name */}
          <div className="w-1/3 flex flex-col items-center justify-center">
            <Image
              width={200}
              src={formData.image}
              alt="User Profile"
              className="rounded-full object-cover shadow-lg mb-4"
              style={{ borderRadius: '50%' }}
            />
            <h2 className="text-2xl font-bold text-gray-800">{formData.name}</h2>
          </div>

          {/* Right Section - Details */}
          <div className="w-2/3">
            {/* Personal Details */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">Personal Details</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> {formData.email}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Phone Number:</span> {formData.phoneNumber}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Address:</span> {formData.address}
              </p>
            </div>

            {/* Social Profiles */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">Social Profiles</h3>
              <div className="space-y-3">
                <a
                  href={formData.githubProfile}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub: Click Here
                </a>
                <a
                  href={formData.leetcodeProfile}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode className="mr-2" /> LeetCode: Click Here
                </a>
                <a
                  href={formData.linkedinProfile}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn: Click Here
                </a>
              </div>
            </div>

            {/* Skills and Experience */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">Professional Details</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Skills:</span> {formData.skills.join(', ')}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Experience:</span> {formData.experience} years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

