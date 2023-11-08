/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from "react"
import { StudentInterface } from "../interface/StudentInterface"
import { TeacherInterface } from "../interface/TeacherInterface"

export type AuthContextType = {
  // authenticated: boolean
  loading: boolean
  student: StudentInterface | null
  teacher: TeacherInterface | null
  signin: (email: string, password: string) => Promise<boolean>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)
