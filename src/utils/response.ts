import { ApiResponse } from "src/common"

export const successResponse = (data: any, message: string = 'success'): Promise<ApiResponse> => {
    return Promise.resolve({ data, message, success: true});
}

export const errorResponse = (err: any): Promise<ApiResponse> => {
    return Promise.resolve({ data: null, message: err, success: false})
}