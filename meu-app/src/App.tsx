import { Avatar, WrapItem, Wrap, Heading, Stack, ChakraProvider } from '@chakra-ui/react';
import './App.css';

export const App = () => {
  return (
    <ChakraProvider>
      <div className='container'>
        <div className='avatar'>
          <Wrap>
            <WrapItem>
              <Avatar size='2xl' name='Victor Hugo' src='https://bit.ly/sage-adebayo' />
            </WrapItem>
          </Wrap>
          <div className='description'>
            <Stack spacing={6}>
              <Heading size='md' as='h4'>
                Olá meu nome é Victor.
              </Heading>
              <Heading as='h6' size='xs'>
                {/* Adicione mais conteúdo aqui se necessário */}
              </Heading>
            </Stack>
          </div>
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
            </Stack>
          </footer>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;