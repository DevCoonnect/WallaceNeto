export type IAlertModalProps = {
  type: 'error' | 'warn' | 'success' | 'info';
  title?: string;
  content: string;
}