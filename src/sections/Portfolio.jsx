import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiPostgresql } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thomas</h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">Desenvolvedor Full Stack</h2>
        <p className="max-w-xl text-gray-300 mb-6">
          Eu crio soluções SaaS, APIs REST, landing-pages e muito mais.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow">
          Entre em contato
        </button>
      </section>

      {/* Skills */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold mb-8 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center">
            <FaReact size={40} /> <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs size={40} /> <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript size={40} /> <span>TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql size={40} /> <span>PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-gray-800 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Sobre mim</h3>
        <p className="max-w-3xl mx-auto text-gray-300">
          Sou um desenvolvedor apaixonado por tecnologia, com experiência na criação de aplicações web escaláveis e de alta performance.
        </p>
      </section>

      {/* Projetos */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold mb-8 text-center">Projetos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
              <div className="h-40 bg-gray-700 mb-4 rounded"></div>
              <h4 className="text-lg font-semibold mb-2">Nome do Projeto</h4>
              <p className="text-sm text-gray-400 mb-4">
                Descrição do projeto vai aqui. Pode incluir as tecnologias utilizadas e outras informações.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:underline">GitHub</a>
                <a href="#" className="text-blue-400 hover:underline">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="bg-gray-800 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Contato</h3>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Nome" className="p-3 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-gray-700 text-white" />
          <textarea placeholder="Mensagem" className="p-3 rounded bg-gray-700 text-white h-32"></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow">
            Enviar mensagem
          </button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 py-6 text-center border-t border-gray-700">
        <p className="text-sm text-gray-500 mb-2">© 2025 Thomas Albuquerque</p>
        <div className="flex justify-center gap-6 text-white text-xl">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  );
}
