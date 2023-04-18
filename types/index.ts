export type Pack = {
  name: string;
  url: string;
  routes: Route[];
};

export type Route = {
  route: string;
  method: string;
  description?: string;
  headers?: any;
  body?: any;
};

export type FetchTemplate = {
  url: string;
  init: RequestInit;
};
