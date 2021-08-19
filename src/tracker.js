import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './tracker.css';
import Header from './components/Header'

import image from './images/image.png';

class Tracker extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
        <>
        <Header/>
      <div className={styles.container}>
        <div style={{marginTop:"20px", display:"flex", alignItems:"center", justifyContent:"center",overflow: "hidden"}}><span style={{fontFamily:"Krona One, sans-serif", fontSize:"50px", fontWeight:"900"}}>COVID-19 TRACKER</span></div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
      </>
    );
  }
}

export default Tracker;