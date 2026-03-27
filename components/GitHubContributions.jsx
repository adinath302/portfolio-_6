import React from 'react';

const GitHubContributions = () => {
  return (
    <section className="px-6 mt-16 mb-16 min-h-[200px]">
      <h2 className="text-2xl font-bold text-center mb-8 text-white/90">GitHub Contribution Graph</h2>
      <div className="flex justify-center">
        <img 
          src="https://github-readme-stats.vercel.app/api/calendar/?username=adinath302&theme=dark&hide_border=true&bg_color=0a0a0a&hide_title=true" 
          alt="Adinath302 GitHub Contribution Graph"
          className="rounded-2xl shadow-2xl border-4 border-gray-800/50 max-w-4xl w-full h-auto"
          loading="lazy"
        />
      </div>
      <p className="text-center mt-6 text-gray-400 text-sm">
        My GitHub activity over the past year
      </p>
    </section>
  );
};

export default GitHubContributions;

