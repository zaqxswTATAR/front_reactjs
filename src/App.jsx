import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from "react-router-dom";

import Layout from './components/layout.component';
import CreateSequence from './components/create-sequence.component'
import EditSequence from './components/edit-sequence.component'
import SequenceList from './components/sequence-list.component'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreateSequence />} />
          <Route path="create-sequence" element={<CreateSequence />} />
          <Route path="edit-sequence/:id" element={<EditSequence/>} />
          <Route path="sequence-list" element={<SequenceList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
