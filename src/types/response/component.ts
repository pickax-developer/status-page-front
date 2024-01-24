import { ComponentStatus } from './site.ts'

export interface ComponentListResponse {
  id: number
  name: string
  description?: string
  status: ComponentStatus
  frequency: number
  isActive: boolean
}

interface ActiveComponentItem {
  id: number
  name: string
  description?: string
  status: ComponentStatus
}
export interface ActiveComponentListResponse {
  componentActiveResponseDtoList: ActiveComponentItem[]
  updatedAt: string
}
