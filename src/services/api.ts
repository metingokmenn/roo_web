import { ApiResponse, ErrorResponse } from '../types/common';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

export class ApiError extends Error {
  constructor(public response: ErrorResponse) {
    super(response.message);
    this.name = 'ApiError';
  }
}

export const api = {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new ApiError(data as ErrorResponse);
    }
    
    return data as ApiResponse<T>;
  },

  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new ApiError(data as ErrorResponse);
    }
    
    return data as ApiResponse<T>;
  },

  async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new ApiError(data as ErrorResponse);
    }
    
    return data as ApiResponse<T>;
  },

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new ApiError(data as ErrorResponse);
    }
    
    return data as ApiResponse<T>;
  },
}; 