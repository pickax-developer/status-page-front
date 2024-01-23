import { ComponentStatus } from './site.ts'

export interface ComponentListResponse {
  id: number
  name: string
  description?: string
  status: ComponentStatus
  frequency: number
  isActive: boolean
}

export interface ActiveComponentListResponse {
  id: number
  name: string
  description?: string
  status: ComponentStatus
}
