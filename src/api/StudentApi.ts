/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise } from 'axios'
import { StudentInterface } from '../interface/StudentInterface'

const studentApi = axios.create({
  baseURL: process.env.REACT_APP_HOST,
})

export const getStudents = async (): AxiosPromise<StudentInterface[]> => {
  return await studentApi
    .get('/students')
    .then((res) => {
      return res
    })
    .catch((res) => {
      return res
    })
}

export const getStudent = async (token: any): AxiosPromise<any> => {
  const res = await studentApi.get('/student', {
    headers: { authorization: `Bearer ${token}` },
  })
  return res
}

export const createStudent = async (data: StudentInterface): AxiosPromise<any> => {
  return await studentApi
    .post('/student', data)
    .then((res) => {
      console.log(res.data)
      return res
    })
    .catch((res) => {
      return res
    })
}

export const updateStudent = async (data: StudentInterface): AxiosPromise<any> => {
  return await studentApi
    .put(`/student/${data.id}`, data)
    .then((res) => {
      console.log(res.data)
      return res
    })
    .catch((res) => {
      return res
    })
}

export const deleteStudent = async (id: any): AxiosPromise<any> => {
  const res = await studentApi.delete(`/student/${id}`)
  return res
}
