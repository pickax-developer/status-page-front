export interface ComponentListResponse {
  id: number
  name: string
  description?: string
  status: string
  frequency: number
  isActive: boolean
}

export interface ActiveComponentListResponse {
  id: number
  name: string
  description?: string
  status: string
}
