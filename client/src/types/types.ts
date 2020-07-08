export interface Notification {
  type: 'snackbar' | 'dialog'
  alertType: 'success' | 'error'
  message: string
}

// interface for other users that can be contacted
export interface BasicUser {
  id: string
  username: string
  online: boolean
}