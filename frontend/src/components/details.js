import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import Select from 'react-select';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    linkedinProfile: '',
    address: '',
    githubProfile: '',
    leetcodeProfile: '',
    skills: [],
    experience: '',
    image: null,
  });

  const skillsOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'C', label: 'C' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Go', label: 'Go' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'PHP', label: 'PHP' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'C#', label: 'C#' },
    { value: 'SQL', label: 'SQL' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Vue.js', label: 'Vue.js' }
  ];

  const handleSkillsChange = (selectedOptions) => {
    setFormData({
      ...formData,
      skills: selectedOptions ? selectedOptions.map(option => option.value) : []
    });
  };

  const handleSubmit = (values) => {
    console.log('Form Submitted:', { ...formData, ...values });
    message.success('Form Submitted Successfully');
  };

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setFormData({ ...formData, image: info.file.originFileObj });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-12">
        <h1 className="text-3xl font-extrabold text-gray-700 mb-8 text-center">
          Profile Analysis Form
        </h1>
        <Form layout="vertical" onFinish={handleSubmit}>
          {/* Name */}
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          {/* LinkedIn Profile */}
          <Form.Item
            name="linkedinProfile"
            label="LinkedIn Profile URL"
            rules={[{ required: true, message: 'Please enter your LinkedIn profile URL' }]}
          >
            <Input placeholder="Enter your LinkedIn profile URL" />
          </Form.Item>

          {/* Address */}
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <TextArea rows={2} placeholder="Enter your address" />
          </Form.Item>

          {/* GitHub Profile */}
          <Form.Item
            name="githubProfile"
            label="GitHub Profile URL"
            rules={[{ required: true, message: 'Please enter your GitHub profile URL' }]}
          >
            <Input placeholder="Enter your GitHub profile URL" />
          </Form.Item>

          {/* LeetCode Profile */}
          <Form.Item
            name="leetcodeProfile"
            label="LeetCode Profile URL"
            rules={[{ required: true, message: 'Please enter your LeetCode profile URL' }]}
          >
            <Input placeholder="Enter your LeetCode profile URL" />
          </Form.Item>

          {/* Skills */}
          <Form.Item label="Skills (Select multiple)">
            <Select
              isMulti
              name="skills"
              options={skillsOptions}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              classNamePrefix="select"
              onChange={handleSkillsChange}
            />
          </Form.Item>

          {/* Experience */}
          <Form.Item
            name="experience"
            label="Years of Experience"
            rules={[{ required: true, message: 'Please enter your years of experience' }]}
          >
            <Input type="number" placeholder="Enter your experience in years" />
          </Form.Item>

          {/* Image Upload */}
          <Form.Item label="Upload Image">
            <Upload
              name="image"
              listType="picture"
              maxCount={1}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={handleImageChange}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
