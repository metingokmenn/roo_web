// Common interface for API responses
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Common interface for error responses
export interface ErrorResponse {
  message: string;
  code: string;
  status: number;
}

// Common interface for pagination
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

// Common interface for sorting
export interface SortParams {
  field: string;
  order: 'asc' | 'desc';
} 