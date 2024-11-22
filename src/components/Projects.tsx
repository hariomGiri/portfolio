import React from 'react';
import { Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Linear Regression - Insurance Prediction',
      description: 'Developed a model to predict insurance rates based on demographic factors. Visualized trends using Matplotlib and Seaborn for actionable insights.',
      tech: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      code: `# Sample code snippet
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)`,
    },
    {
      title: 'KNN-based Diabetes Prediction',
      description: 'Built a K-Nearest Neighbors (KNN) model to predict diabetes using patient data. Optimized hyperparameters and implemented feature scaling.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      code: `from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)`,
    },
    {
      title: 'Titanic Survival Prediction',
      description: 'Created a classification model to predict passenger survival using the Titanic dataset. Applied feature engineering and cross-validation.',
      tech: ['Python', 'Machine Learning', 'Pandas'],
      code: `# Feature engineering example
df['FamilySize'] = df['SibSp'] + df['Parch'] + 1
model.fit(X_train, y_train)`,
    },
    {
      title: 'Brain Stroke Prediction',
      description: 'Designed a predictive model using supervised learning techniques to estimate brain stroke likelihood. Utilized Scikit-learn for preprocessing.',
      tech: ['Python', 'Machine Learning', 'Scikit-learn'],
      code: `from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)`,
    },
    {
      title: 'Pragya kalp - Voice Assistant',
      description: 'Built an intelligent personal assistant integrating speech recognition and AI-generated responses. Automated tasks like web searches, video playback, and file management using PyQt5 and related libraries.',
      tech: ['Python', 'PyQt5', 'Speech Recognition', 'AI'],
      code: `import speech_recognition as sr
r = sr.Recognizer()
with sr.Microphone() as source:
    audio = r.listen(source)`,
    },
    {
      title: 'Scientific Calculator',
      description: 'Developed a GUI-based scientific calculator using Python and Tkinter. Implemented advanced mathematical operations with user-friendly interface.',
      tech: ['Python', 'Tkinter', 'Math'],
      code: `import tkinter as tk
window = tk.Tk()
window.title("Scientific Calculator")`,
    },
    {
      title: 'Dynamic Landing Page',
      description: 'Developed a responsive landing page using modern web technologies as part of a web development internship.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      code: `const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);`,
    },
    {
      title: 'To-Do List Application',
      description: 'Created an interactive to-do list application with task management features and local storage integration.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      code: `localStorage.setItem('todos', 
JSON.stringify(todos));
renderTodoList();`,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[#0d0d24]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a3f] rounded-lg overflow-hidden hover:shadow-purple-600/10 hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                  <Code2 className="text-purple-400" />
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#131332] p-4">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{project.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;