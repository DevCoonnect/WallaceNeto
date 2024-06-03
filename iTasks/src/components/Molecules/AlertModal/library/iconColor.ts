export const iconColor = (type: string, colors: any) => {
  switch (type) {
    case 'error':
      return colors.error;
    case 'warn':
      return colors.warn;
      
    case 'success':
      return colors.sucess;
    
    default:
      return colors.info;
  }
}
