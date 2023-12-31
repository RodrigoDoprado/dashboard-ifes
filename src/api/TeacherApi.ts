/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise } from 'axios'
import { TeacherInterface } from '../interface/TeacherInterface'

const teacherApi = axios.create({
  baseURL: process.env.REACT_APP_HOST,
})

export const getTeachers = async (): AxiosPromise<TeacherInterface[]> => {
  const res = await teacherApi.get('/teachers')
  return res
}

export const getTeacher = async (token: any): AxiosPromise<any> => {
  const res = await teacherApi.get('/teacher', {
    headers: { authorization: `Bearer ${token}` },
  })
  return res
}

export const createTeacher = async (data: TeacherInterface): AxiosPromise<any> => {
  const response = await teacherApi.post('/teacher', data)
  return response
}

export const updateTeacher = async (data: TeacherInterface): AxiosPromise<any> => {
  const response = await teacherApi.put(`/teacher/${data.id}`, data)
  return response
}

export const deleteTeacher = async (id: any): AxiosPromise<any> => {
  const response = await teacherApi.delete(`/teacher/${id}`)
  return response
}
