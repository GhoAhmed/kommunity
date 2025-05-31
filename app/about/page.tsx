import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen px-6 sm:px-10 md:px-20 lg:px-32 py-16 sm:py-20 md:py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">About KwikTek</h1>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-center">
        KwikTek is a smart platform designed to empower communities, streamline communication, and enhance collaboration between members and leaders.
        <br />
        Our mission is to provide intuitive digital tools that help communities manage their activities, resources, and members more efficiently — whether it’s a neighborhood group, a volunteer organization, or a growing startup team.
      </p>
    </div>
  );
};

export default About;
