import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaReact, FaJava,
  FaAngular, FaGithub, FaLinkedin, FaMoon, FaSun
} from "react-icons/fa";
import { SiFlask, SiFastapi } from "react-icons/si";
import emailjs from "@emailjs/browser";

const skills = [
  { icon: <FaHtml5 size={40} />, name: "HTML" },
  { icon: <FaCss3Alt size={40} />, name: "CSS" },
  { icon: <FaJsSquare size={40} />, name: "JavaScript" },
  { icon: <FaPython size={40} />, name: "Python" },
  { icon: <SiFlask size={40} />, name: "Flask" },
  { icon: <SiFastapi size={40} />, name: "FastAPI" },
  { icon: <FaJava size={40} />, name: "Java" },
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <FaAngular size={40} />, name: "Angular" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const formRef = useRef();
  const [modalAberto, setModalAberto] = useState(false);

  const enviarEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_lxswkjo",
      "template_mcikkjy",
      formRef.current,
      "cEb68hJRe0WphPyus"
    ).then(() => {
      setModalAberto(true);
      setTimeout(() => setModalAberto(false), 3000);
      formRef.current.reset();
    }).catch(() => {
      alert("Erro ao enviar mensagem.");
    });
  };

  const sectionBg = darkMode ? "bg-gray-800" : "bg-gray-100";
  const textSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const inputBg = darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900 border border-gray-300";
  const cardBg = darkMode ? "bg-gray-800" : "bg-gray-200";
  const cardText = darkMode ? "text-white" : "text-gray-900";

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} font-sans min-h-screen transition-all duration-500`}>

      <div className="flex justify-end px-6 py-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl hover:text-blue-400 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <motion.section
        className="flex flex-col items-center justify-center py-16 text-center px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thomas Albuquerque</h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
          Desenvolvedor Full Stack
        </h2>
        <p className={`max-w-2xl mb-6 ${textSecondary}`}>Desenvolvedor com experiência prática no desenvolvimento de sistemas completos, do backend à interface final. Atuo com foco em qualidade de código, boas práticas, design limpo e funcionalidades úteis para o dia a dia de empresas e usuários. Trabalho com APIs, autenticação de usuários, controle de estoque, dashboards, relatórios e automações de processos.</p>
        <a
          href="https://wa.me/5581999152405?text=Olá%20Thomas,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow transition"
        >
          Entre em contato
        </a>
      </motion.section>

      <motion.section
        className="py-12 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex flex-col items-center ${cardBg} ${cardText} p-4 rounded-lg shadow hover:shadow-lg cursor-pointer`}
            >
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={`${sectionBg} py-16 px-6 text-center`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">Sobre mim</h3>
        <p className={`max-w-3xl mx-auto ${textSecondary}`}>Sou um desenvolvedor apaixonado por tecnologia, com experiência na criação de aplicações web escaláveis e de alta performance. Gosto de entregar soluções completas, com foco na experiência do usuário, automação de processos e organização do código.</p>
      </motion.section>

      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center">Projetos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`${cardBg} ${cardText} rounded-lg p-6 shadow hover:shadow-lg transition`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-40 bg-gray-700 mb-4 rounded"></div>
              <h4 className="text-lg font-semibold mb-2">Nome do Projeto</h4>
              <p className="text-sm text-gray-400 mb-4">Descrição do projeto vai aqui. Pode incluir as tecnologias utilizadas e outras informações.</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:underline">GitHub</a>
                <a href="#" className="text-blue-400 hover:underline">Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={`${sectionBg} py-16 px-6 text-center`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">Contato</h3>
        <form
          ref={formRef}
          onSubmit={enviarEmail}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input type="text" name="name" placeholder="Nome" required className={`p-3 rounded ${inputBg}`} />
          <input type="email" name="email" placeholder="Email" required className={`p-3 rounded ${inputBg}`} />
          <textarea name="message" placeholder="Mensagem" required className={`p-3 rounded ${inputBg} h-32`}></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow transition">Enviar mensagem</button>
        </form>

        <AnimatePresence>
          {modalAberto && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50"
            >
              Mensagem enviada com sucesso!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <footer className="bg-gray-900 py-6 text-center border-t border-gray-700">
        <p className="text-sm text-gray-500 mb-2">© 2025 Thomas Albuquerque</p>
        <div className="flex justify-center gap-6 text-white text-xl">
          <a href="https://github.com/Teopheus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/thomas-albuquerque-41139519a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
