import React from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Datatable from 'components/Datatable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';


// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
    <NavBar />
    <div className='container'>
    <h1 className='py-3'>Tabela de vendas</h1>
    <div className='row px-3'>
      <div className='col-sm-6'>
        <h5 className='text-center text-secondary'>Taxa de sucesso</h5>
        <BarChart />
      </div>
      <div className='col-sm-6'>
        <h5 className='text-center text-secondary'>Todas as vendas</h5>
        <DonutChart />
      </div>
    </div>
    <div className='py-3'>
      <h2 className='text-primary'>Todas as vendas</h2>
    </div>
    <Datatable />
    </div>
    <Footer />
  </>
  )
}

export default Dashboard;