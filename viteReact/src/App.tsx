import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import ContactCenterMng from './pages/contactCenter/ContactCenterMng'
import ContactCenterMngCallResult from './pages/contactCenter/ContactCenterMngCallResult'
import ContactCenterMngDetail from './pages/contactCenter/ContactCenterMngDetail'
import ContactCenterMngAdd from './pages/contactCenter/ContactCenterMngAdd'
import TransactionsMng from './pages/contactCenter/transactions/TransactionsMng'
import TransactionsMngDetail from './pages/contactCenter/transactions/TransactionsMngDetail'
import TransactionsMngAdd from './pages/contactCenter/transactions/TransactionsMngAdd'
import TransactionsTotalStatistics from './pages/contactCenter/transactions/TransactionsTotalStatistics'

function App() {

  return (
    <Routes>
      <Route path="/*" element={<Main></Main>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>

      <Route path="/contactCenterMng" element={<ContactCenterMng></ContactCenterMng>}></Route>
      <Route path="/contactCenterMng/:jobId" element={<ContactCenterMngDetail></ContactCenterMngDetail>}></Route>
      <Route path="/contactCenterMng/add" element={<ContactCenterMngAdd></ContactCenterMngAdd>}></Route>
      <Route path="/contactCenterMng/callResult" element={<ContactCenterMngCallResult></ContactCenterMngCallResult>}></Route>
      
      <Route path="/contactCenterMng/:jobId/transactionsTotalStatistics" element={<TransactionsTotalStatistics></TransactionsTotalStatistics>}></Route>
      <Route path="/contactCenterMng/:jobId/transactionsMng" element={<TransactionsMng></TransactionsMng>}></Route>
      <Route path="/contactCenterMng/:jobId/transactionsMng/:transactionId" element={<TransactionsMngDetail></TransactionsMngDetail>}></Route>
      <Route path="/contactCenterMng/:jobId/transactionsMng/add" element={<TransactionsMngAdd></TransactionsMngAdd>}></Route>
    </Routes>
  )
}

export default App
