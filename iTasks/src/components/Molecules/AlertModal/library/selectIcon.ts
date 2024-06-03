export const selectIcon = (type: string) => {
  switch (type) {
    case 'error':
      return 'warning';
    case 'warn':
      return 'error';
      
    case 'success':
      return 'check-circle';
    
    default:
      return 'info';
  }
}