/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from "react"
import { UserData } from "../interface/UserData"

export type AuthContextType = {
  authenticated: boolean
  loading: boolean
  user: UserData | null
  signin: (email: string, password: string) => Promise<boolean>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)
