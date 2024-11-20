import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import backgrounds from './assets/background-home.jpeg';

export const App = () => {
  console.log(backgrounds); // Utiliza a variável
  return (
    <div className='container'>
      <Tabs align='center' variant='unstyled'>
    <TabList>
      <Tab _selected={{ color: 'white', bg: 'green.400' }}>Contact</Tab>
      <Tab _selected={{ color: 'white', bg: 'green.400' }}>Home</Tab>
      <Tab _selected={{ color: 'white', bg: 'green.400' }}>Projects</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <div className='background_Home'>
      <img  src='https://static.vecteezy.com/system/resources/previews/021/971/132/non_2x/background-image-with-a-mix-of-blue-and-purple-colors-resembling-a-galaxy-or-space-theme-generative-ai-free-photo.jpeg' alt="abc"/>
        <p>two!</p>
        </div>

      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
</div>
  )
}

export default App;
