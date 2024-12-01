import { Avatar, WrapItem, Wrap, Heading, Stack, ChakraProvider, Text } from '@chakra-ui/react';
import './App.css';

export const App = () => {
  return (
    <ChakraProvider>
      <div className='container'>
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
        <div className='about-me'>
          <Stack spacing={6}>
            <Heading size='md' as='h4' width='100%'>
              Sobre Mim
            </Heading>
            <Text>
              Sou um desenvolvedor apaixonado por tecnologia e inovação...
            </Text>
          </Stack>
        </div>
        <div className="projetos-section">
          <Stack spacing={6}>
            <Heading size='md' as='h4'>
              Projetos
            </Heading>
          </Stack>
        </div>
        <hr />
        <div className="contatos-section">
          <footer>
            <Stack spacing={6}>
              <Heading size='md' as='h4'>
                Contatos
              </Heading>
              <Text>Email: victormuza021@gmail.com</Text>
              <Text>Telefone: (11) 95608-1887</Text>
              <Text>LinkedIn: <a href="https://www.linkedin.com/in/victor-muza/">Victor Muza</a></Text>
              <Text>GitHub: <a href="https://github.com/VictorMuza">Victor Hugo</a></Text>
            </Stack>
          </footer>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;