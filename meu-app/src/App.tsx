import { Avatar, WrapItem, Wrap, Heading, Stack, ChakraProvider, Text, Box, Link } from '@chakra-ui/react';
import './App.css';

export const App = () => {
  return (
    <ChakraProvider>
      <div className='container'>
        <nav className='navbar'>
          <Link href="#about-me" className='nav-link'>Sobre Mim</Link>
          <Link href="#projetos-section" className='nav-link'>Projetos</Link>
          <Link href="#contatos-section" className='nav-link'>Contatos</Link>
        </nav>
        <div className='avatar'>
          <Wrap justify='center'>
            <WrapItem>
              <Avatar size='2xl' name='Victor Hugo' src='https://bit.ly/sage-adebayo' />
            </WrapItem>
          </Wrap>
          <div className='description'>
            <Stack spacing={6}>
              <Heading size='md' as='h4' width='100%'>
                Olá meu nome é Victor.
              </Heading>
              <Heading as='h6' size='xs'>
                {/* Adicione mais conteúdo aqui se necessário */}
              </Heading>
            </Stack>
          </div>
        </div>
        <div id='about-me' className='about-me'>
          <Stack spacing={6}>
            <Heading size='md' as='h4' width='100%'>
              Sobre Mim
            </Heading>
            <Text>
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência em diversas linguagens de programação e frameworks, e adoro aprender coisas novas. Meu foco principal é no desenvolvimento web, mas também tenho interesse em desenvolvimento mobile e inteligência artificial.
            </Text>
            <Text>
              Ao longo da minha carreira, trabalhei em vários projetos interessantes, desde pequenos sites pessoais até grandes aplicações empresariais. Gosto de trabalhar em equipe e acredito que a colaboração é a chave para o sucesso. Estou sempre buscando melhorar minhas habilidades e estou aberto a novas oportunidades e desafios.
            </Text>
            <Text>
              Quando não estou programando, gosto de passar meu tempo lendo livros sobre tecnologia, jogando videogames e explorando novas ferramentas e tecnologias. Acredito que a tecnologia tem o poder de mudar o mundo para melhor, e estou animado para ver o que o futuro nos reserva.
            </Text>
          </Stack>
        </div>
        <div id='projetos-section' className="projetos-section">
          <Stack spacing={6}>
            <Heading size='md' as='h4'>
              Projetos
            </Heading>
            <Wrap spacing={4} justify='center'>
              <Box className='project-placeholder'>Em desenvolvimento</Box>
              <Box className='project-placeholder'>Projeto futuro</Box>
              <Box className='project-placeholder'>Projeto futuro</Box>
            </Wrap>
          </Stack>
        </div>
        <hr />
        <div id='contatos-section' className="contatos-section">
          <footer>
            <Stack spacing={6}>
              <Heading size='md' as='h4'>
                Contatos
              </Heading>
              <Text>Email: victormuza021@gmail.com</Text>
              <Text>Telefone: (11) 95608-1887</Text>
              <Text>
                <a href="https://www.linkedin.com/in/victor-muza/">
                  <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="LinkedIn Icon" style={{ verticalAlign: 'middle', marginLeft: '48%' }} />
                  Victor Muza
                </a>
              </Text>
              <Text>
                <a href="https://github.com/VictorMuza">
                  <img src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" alt="GitHub Icon" style={{ verticalAlign: 'middle', marginLeft: '48%' }} />
                  Victor Hugo
                </a>
              </Text>
            </Stack>
          </footer>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;