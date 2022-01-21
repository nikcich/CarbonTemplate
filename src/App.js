import './App.scss';

import {
  Button, InlineLoading, Accordion, AccordionItem, Tabs, Tab,

} from 'carbon-components-react';


function App() {
  return (
    <>

      <Tabs id='#'>
        <Tab id="tab-1" label="tab1">
          <Accordion>
            <AccordionItem title="NUM 1">
              <h2>Item 1</h2>
            </AccordionItem>

            <AccordionItem title="NUM 2">
              <h2>Item 2</h2>
            </AccordionItem>

            <AccordionItem title="NUM 3">
              <h2>Item 3</h2>
            </AccordionItem>
          </Accordion>
        </Tab>

        <Tab id="tab-2" label="tab3">
          <h2>Heyyyy</h2>
        </Tab>

        <Tab id="tab-3" label="tab3">
          <Button>Button</Button>
          <InlineLoading></InlineLoading>
        </Tab>





      </Tabs>


    </>

  );
}

export default App;
