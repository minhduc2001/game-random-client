/// <reference types="vite/client" />

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

type MenuItem = Required<MenuProps>["items"][number];

interface AsyncWrapperProps {
  loading: boolean;
  fulfilled: boolean;
  error?: unknown;
  children: React.JSX;
}

interface HelmetProps {
  title: string;
  description: string;
}

interface Query {
  limit?: number;
  page?: number;
  search?: string;
  filter?: string;
}

interface Metadata {
  itemsPerPage?: number;
  totalItems?: number;
  totalPages?: number;
  currentPage?: number;
}

interface ErrorResponse {
  message?: string;
  errorCode?: string;
}

interface ResponseForm<T> {
  data: T;
  message: string;
  status: number;
  success: boolean;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}
