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

{
  id: 'UrbanGrow',
  name: 'UrbanGrow',
  description: 'UrbanGrow adalah aplikasi berbasis IoT yang dirancang untuk memantau dan mengelola kondisi tanaman secara real-time. Dengan menggunakan sensor kelembaban tanah, suhu, dan cahaya, aplikasi ini memberikan data penting kepada pengguna untuk memastikan pertumbuhan tanaman yang optimal di lingkungan perkotaan.',
  technologies: ['React', 'Google Gemini API', 'micropython', 'Thonny', 'Tailwind CSS'],
  role: 'Fullstack Developer',
  colors: ['#FFC45C', '#0009FF', '#8A2A52'],
  images: [
    '/src/assets/urbangrow1.png',
  ],
  githubLink: 'https://github.com/'
},

{
  id: 'Sentiment Analyzer',
  name: 'Sentiment Analyzer',
  description: 'Sentiment Analyzer adalah aplikasi web yang menggunakan analisis sentimen berbasis AI untuk mengevaluasi opini pengguna dari ulasan produk. Dengan mengintegrasikan Google Gemini API, aplikasi ini mampu mengkategorikan ulasan menjadi positif, negatif, atau netral, membantu bisnis memahami persepsi pelanggan mereka dengan lebih baik.',
  technologies: ['python', 'Streamlit', 'Google Gemini API', 'pandas', 'scikit-learn'],
  role: 'Fullstack Developer',
  colors: ['#FFC45C', '#0009FF', '#8A2A52'],
  images: [
    '/src/assets/sentiment-analyzer.png',
  ],
  githubLink: 'https://github.com/'
},

];

export default projects;