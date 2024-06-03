export const gradiantColors = (type: string, colors: any) => {
  switch (type) {
    case 'error':
      return ['#FBE1E0', colors.white];
  
    case 'warn':
      return ['#FFEED5', colors.white];
      
    case 'success':
      return ['#CEF0E2', colors.white];
    
    default:
      return ['#E0F0FF', colors.white];
  }
}