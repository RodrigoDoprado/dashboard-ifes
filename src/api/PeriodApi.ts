/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise } from 'axios';
import { PeriodInterface } from '../interface/PeriodInterface';

const periodApi = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

export const getPeriods = async (
  acronym: any
): AxiosPromise<PeriodInterface[]> => {
  const res = await periodApi.get(`/periods/${acronym}`);
  return res;
};

export const getPeriod = async (enroll: any): AxiosPromise<any> => {
  const res = await periodApi.get(`/period/${enroll}`);
  return res;
};

export const createPeriod = async (
  data: PeriodInterface
): AxiosPromise<any> => {
  const res = await periodApi.post('/period', data);
  return res;
};

export const updatePeriod = async (
  data: PeriodInterface
): AxiosPromise<any> => {
  const res = await periodApi.put(`/period/${data.id}`, data);
  return res;
};

export const deletePeriod = async (id: any) => {
  await periodApi.delete(`/period/${id}`);
};
