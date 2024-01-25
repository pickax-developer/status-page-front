export enum OwnerProofStatus {
  COMPLETED = 'COMPLETED',
  UNVERIFIED = 'UNVERIFIED',
  CANCELED = 'CANCELED',
}
export interface SiteListResponse {
  id: number
  name: string
  url: string
  ownerProofStatus: OwnerProofStatus
}
export interface SiteDetailResponse {
  id: number
  name: string
  description: string
  url: string
  status: OwnerProofStatus
}
export interface SitePostResponse {
  metaTag: string
  id:number
}

export interface SiteMetaTagResponse {
  id: number
  content: string
}

export interface SiteSecretKeyResponse {
  secretKey: string
}

export enum ComponentStatus {
  NONE = 'NONE',
  NO_ISSUES = 'NO_ISSUES',
  WARN = 'WARN',
  OUTAGE = 'OUTAGE',
}
