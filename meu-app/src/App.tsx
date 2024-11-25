import { Avatar, WrapItem, Wrap } from '@chakra-ui/react'
import { Heading, Stack } from '@chakra-ui/react'
import './App.css';

export const App = () => {
  return (
    <div className='container'>
      <div className='avatar'>
        <Wrap>
          <WrapItem >
            <Avatar  size='2xl' name='Victor Hugo' src='https://bit.ly/sage-adebayo' />
          </WrapItem>
        </Wrap>
        <div className='description'>
          <Stack spacing={6}>
            <Heading size='md' as='h4'>
            Olá meu nome é Victor.
            </Heading>
              <Heading as='h6' size='xs'>
              Estou cursando o 6º Semestre de Ciência da Computação,
              e atualmente estou aprendendo e desenvolvendo meu conhecimento
              front end utilizando o framework React.
              </Heading>
            </Stack>
            </div>
          <div className='rodpe'>
            <footer>

            </footer>
          </div>
      </div>
      
</div>
  )
}

export default App;
