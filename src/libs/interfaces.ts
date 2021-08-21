export interface Response  {
    statusCode: number,
    body: string
}

export interface RawResponse {
    status: number,
    message: {[key:string]:any},
    event
}
