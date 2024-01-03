export enum OwnerProofStatus {
  COMPLETED = 'COMPLETED',
  UNVERIFIED = 'UNVERIFIED',
  CANCELED = 'CANCELED',
}
export interface SiteListResponse {
  id: number
  name: string
  url: string
  ownerProofState: OwnerProofStatus
}

export interface SitePostResponse {
  metaTag: string
  id:number
}

export interface SiteMetaTagResponse {
  id: number
  content: string
}