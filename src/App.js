import React from 'react';
import './App.css';

import Counter from './Component/Counter'
import ParentComponent from './Component/ParentComponent';
import NameList from './Component/NameList';
import RefDemo from './Component/RefDemo';
import FocusInput from './Component/FocusInput';
import FRParentRef from './Component/FRParentRef';
import Hero from './Component/Hero';
import ErrorBoundary from './Component/ErrorBoundary';
import CounterInc from './Component/CounterInc';
import HoverCount from './Component/HoverCount';
import CounterCount2 from './Component/CounterCount2';
import HoverCount2 from './Component/HoverCount2';
import User from './Component/User';
import Counter2 from './Component/Counter2';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/UserContext';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <NameList /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput/> */}
      {/* <FRParentRef /> */}
      {/* <ErrorBoundary>
        <Hero heroName='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Spiderman'/>
      </ErrorBoundary> */}
      {/* HOC */}
      {/* <CounterInc  name='Pratiksha'/>
      <HoverCount /> */}
      {/* <CounterCount2/>
      <HoverCount2/>
      <User render={(isLoggedIn)=> isLoggedIn ? 'Pratiksha': 'Guest'}/> */}
      {/* render */}
      {/* <Counter2 render={(count,incrementCount)=>
                (<CounterCount2 count={count} incrementCount={incrementCount}/>)}/>
      <Counter2 render={(count,incrementCount)=>
                (<HoverCount2 count={count} incrementCount={incrementCount}/>)}/> */}
      <UserProvider value='Pratiksha'>
        <ComponentC/>
      </UserProvider>
      </div>
  );
}

export default App;
