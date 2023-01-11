export declare type LinkedAccount = {
    id: number;
    title: string;
    body: string;
    userId: number;
  };

  export declare type templateObj = {
    _id: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    template_published: boolean
  }
  
  export declare type Templates = {
    docs: templateObj[];
    totalDocs: number;
    "limit": number,
    "totalPages": number,
    "page": number,
    "pagingCounter": number,
    "hasPrevPage": boolean,
    "hasNextPage": boolean,
    "prevPage": number,
    "nextPage": number
  };

  export declare type workflowObj = {
    "_id": string,
    "name": string,
    "status": string,
    "createdAt": Date,
    "updatedAt": Date
  }

  export declare type Workflows = {
    docs: workflowObj[];
    totalDocs: number;
    "limit": number,
    "totalPages": number,
    "page": number,
    "pagingCounter": number,
    "hasPrevPage": boolean,
    "hasNextPage": boolean,
    "prevPage": number,
    "nextPage": number
  }

export declare type createLinkedAccountPayload = {
    linked_account_id: string
}

export declare type getTokenForLinkedAccountPayload = {
  linked_account_id: string, 
}

export declare interface paginationOptions {
  page?: number,
  limit?: number
}
export declare interface getApplicationsOptions extends paginationOptions  {
  for_published_template?: boolean
}
export declare type getTokenForLinkedAccountResponse = {
  token: string
}

export declare type updateAuthCredentialsPayload = {
  linked_account_id: string,
  auth_credentials: any
}