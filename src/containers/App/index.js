import React from 'react';
import { Input } from '../../components/Input';
import { inputs } from '../../constants/defaultInputs';

const styles = require('./styles.module.scss');

const App = () => (
  <div className={styles.app}>
    {
      inputs.map((input) => {
        return (
          <Input 
            key={input.toString()}
            id={input.toString()}
          />
        );
      })
    }
  </div>
);

export default App;
