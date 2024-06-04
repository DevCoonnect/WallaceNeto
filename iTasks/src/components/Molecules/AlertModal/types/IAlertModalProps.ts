export type IAlertModalProps = {
  type: string | 'error' | 'warn' | 'success' | 'info';
  title?: string;
  timer?: number,
  onClose: () => void;
  children: React.ReactNode;
}