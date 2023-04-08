import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';
import { GreetingsThunk } from './redux/greetingReducer';
import Greeting from './components/greeting';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GreetingsThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/greetings" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;