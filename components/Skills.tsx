import React from 'react';
import { Layout, Server, Database, Wrench, Code } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      skills: ["React", "Angular", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-green-500" />,
      skills: ["Node.js", "Java + Spring", ".NET Core", "C#", "Express"]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      skills: ["MongoDB", "SQL Server", "MySQL", "PostgreSQL"]
    },
    {
      title: "DevOps & Herramientas",
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      skills: ["Docker", "Git / GitHub", "Scrum", "Jira", "Postman"]
    },
    {
      title: "Otros Lenguajes",
      icon: <Code className="w-6 h-6 text-red-500" />,
      skills: ["Python", "Visual Basic", "TypeScript"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[rgb(52,92,172)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mis Habilidades</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Un conjunto de herramientas completo para abordar proyectos de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;