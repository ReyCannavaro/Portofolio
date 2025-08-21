const projects = [
{
  id: 'techsphere',
  name: 'TechSphere',
  description: 'Proyek web ini adalah platform untuk menjelajahi berbagai gadget, melihat detailnya, dan memberikan rating. Dibangun menggunakan framework Laravel, proyek ini dilengkapi dengan panel admin menggunakan Filament untuk manajemen data yang efisien.',
  technologies: ['Laravel 11', 'Tailwind CSS', 'Filament', 'MySQL'],
  role: 'Full-stack Developer',
  colors: ['#fff', '#f5f5f5', '#000', '#d6d6d6'],
  images: [
    '/src/assets/techsphere1.png',
    '/src/assets/techsphere2.png',
    '/src/assets/techsphere3.png',
  ],
  githubLink: 'https://github.com/ReyCannavaro/TechSphere-Laravel.git'
},

{
  id: 'pt-rizza-jaya-abadi',
  name: 'PT Rizza Jaya Abadi',
  description: 'Sistem manajemen pemesanan dan operasional untuk perusahaan travel, mencakup jadwal keberangkatan, transaksi, dan laporan.',
  technologies: ['Laravel 12', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  role: 'Full-stack Developer',
  colors: ['rgba(118, 148, 76, 1)', 'rgba(200, 218, 166, 1)', 'rgba(251, 245, 219, 1)'],
  images: [
    '/src/assets/rizza1.png',
    '/src/assets/rizza2.png',
    '/src/assets/rizza3.png',
  ],
  githubLink: 'https://github.com/ReyCannavaro/PT.RizzaJayaAbadi.git'
},

{
  id: 'medibot',
  name: 'Medibot',
  description: 'Medibot adalah chatbot AI yang dibangun menggunakan Laravel dan Google Gemini API. Dengan fitur Retrieval-Augmented Generation (RAG), chatbot ini memberikan informasi kesehatan awal berdasarkan dokumen medis terpercaya, memastikan akurasi dan relevansi jawaban.',
  technologies: ['Laravel 11', 'Google Gemini API', 'smalot/pdfparser', 'MySQL', 'PostgreSQL'],
  role: 'Frontend Developer',
  colors: ['#FFC45C', '#0009FF', '#8A2A52'],
  images: [
    '/src/assets/medibot1.png',
    '/src/assets/medibot2.png',
    '/src/assets/medibot3.png',
  ],
  githubLink: 'https://github.com/Satyasy/Medibot.git'
},

];

export default projects;