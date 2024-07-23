import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import AppBarProject from '../AppBarProject';
import SliderCanrousel from '../Canrousel';
import ShowTimes from '../ShowTimes';
import TheaterComplex from '../TheaterComplex';
import NewsAll from '../NewsAll';
import Footer from '../Footer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { showtimeRequest, selectShowtimeSlice } from '../ShowTimes/reducer';
import { getTheaterRequest } from '../TheaterComplex/reducer';
import { ContainerAll, LoadingContainer } from './styles';

const ContainersUi = () => {
  return (
    <ContainerAll>
      <AppBarProject />

      <SliderCanrousel />
      <ShowTimes />
      <TheaterComplex />
      <NewsAll />
      <Footer />
    </ContainerAll>
  );
};

export default ContainersUi;
