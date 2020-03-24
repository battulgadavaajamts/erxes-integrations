export interface IGetOrCreateArguments {
  kind: string;
  collectionName: string;
  selector: { [key: string]: string };
  fields: {
    doc: { [key: string]: string | string[] | boolean | number };
    api: IAPIConversation | IAPIConversationMessage | IAPICustomer;
  };
}

export interface IAttachment {
  type?: string;
  url?: string;
}

export interface IAPICustomer {
  integrationId: string;
  firstName: string;
  lastName: string;
  kind: string;
}

export interface IAPIConversation {
  integrationId: string;
  customerId: string;
  content: string;
  createdAt: number;
}

export interface IAPIConversationMessage {
  conversationId: string;
  content: string;
  customerId: string;
  attachments?: [IAttachment];
}

export interface ISmoochCustomerArguments {
  kind: string;
  smoochUserId: string;
  integrationIds: {
    id: string;
    erxesApiId: string;
  };
  surname: string;
  givenName: string;
}

export interface ISmoochConversationArguments {
  kind: string;
  smoochConversationId: string;
  customerId: string;
  content: string;
  integrationIds: {
    id: string;
    erxesApiId: string;
  };
  createdAt: number;
}

export interface ISmoochConversationMessageArguments {
  kind: string;
  customerId: string;
  conversationIds: {
    id: string;
    erxesApiId: string;
  };
  messageId: string;
  content: string;
  attachments?: [IAttachment];
}