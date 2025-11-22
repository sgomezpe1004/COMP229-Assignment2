import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './src/about';
import Contact from './src/contact';
import Education from './src/education';
import Project from './src/project';
import Services from './src/services';
import Register from './src/register';
import Login from './src/login';
import EditProfile from './src/edit-profile';
import Profile from './src/profile';
import ContactsCrud from './src/contactsmanager'; // <-- Nuevo import

const MainRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts-crud" element={<ContactsCrud />} />
      </Routes>
    </Layout>
  );
};

export default MainRouter;
