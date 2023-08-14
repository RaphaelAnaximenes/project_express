export const homeController = (req, res) => {
    const sub = "Sou um profissional em transição de carreira para o mercado de desenvolvimento de software, com foco em back-end. Tenho conehcimento em JavaScript, PHP, Rust e consigo usar algumas tecnologias frontend.";
    const messages = ['Olá, eu sou...', 'Hello, I am...', 'Hola, soy...', 'こんにちは私は...'];
    
    const hello = messages[Math.floor(Math.random() * messages.length)];

    res.render('home', { sub , hello});
};