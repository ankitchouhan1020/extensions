export interface Data {
  results: Comunnication[];
  paging: Paging;
}

export interface Comunnication {
  id: string;
  properties: Properties;
}

export interface Properties {
  createdate: string;
  hs_communication_body: string;
  hs_communication_channel_type: string;
  hs_communication_logged_from: string;
  hs_lastmodifieddate: string;
}

export interface Paging {
  next: Next;
}

export interface Next {
  after: string;
  link: string;
}
