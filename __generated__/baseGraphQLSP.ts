export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Admin = {
  __typename: 'Admin';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  idAdminUser: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  mediaUrl?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
};

export type AdminEmailUpdateResponse = {
  __typename: 'AdminEmailUpdateResponse';
  access_token: Scalars['String']['output'];
  user: Admin;
};

export type AdminLoginResponse = {
  __typename: 'AdminLoginResponse';
  access_token: Scalars['String']['output'];
  user: Admin;
};

export type Category = {
  __typename: 'Category';
  categoryName: Scalars['String']['output'];
  events?: Maybe<Event>;
  idCategory: Scalars['ID']['output'];
  subCategories?: Maybe<Array<SubCategory>>;
};

export type CreateAdminUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateBasicEventInput = {
  endDate: Scalars['DateTime']['input'];
  eventTitle: Scalars['String']['input'];
  location: CreateLocationInput;
  refIdCategory?: InputMaybe<Scalars['Float']['input']>;
  refIdSubCategory?: InputMaybe<Scalars['Float']['input']>;
  startDate: Scalars['DateTime']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCategoryInput = {
  categoryName: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateEventTicketInput = {
  availableQuantity: Scalars['Float']['input'];
  endDate: Scalars['DateTime']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  maxQuantity: Scalars['Float']['input'];
  minQuantity: Scalars['Float']['input'];
  refIdEvent: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  ticketDescription?: InputMaybe<Scalars['String']['input']>;
  ticketName: Scalars['String']['input'];
  ticketPrice: Scalars['Float']['input'];
};

export type CreateLocationInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  lat: Scalars['String']['input'];
  locationType: LocationTypes;
  long: Scalars['String']['input'];
  placeId?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress: Scalars['String']['input'];
  venueName: Scalars['String']['input'];
};

export type CreateOrganizerInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationBio?: InputMaybe<Scalars['String']['input']>;
  websiteLink?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSubCategoryInput = {
  idCategory: Scalars['ID']['input'];
  subCategoryName: Scalars['String']['input'];
};

export type Customer = {
  __typename: 'Customer';
  cellPhone?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstAddress?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  homePhone?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  secondAddress?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type CustomerEmailUpdateResponse = {
  __typename: 'CustomerEmailUpdateResponse';
  access_token: Scalars['String']['output'];
  user: Customer;
};

export type CustomerFilterInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  homePhone?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  secondAddress?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerLoginResponse = {
  __typename: 'CustomerLoginResponse';
  access_token: Scalars['String']['output'];
  user: Customer;
};

export type Event = {
  __typename: 'Event';
  category?: Maybe<Category>;
  endDate: Scalars['DateTime']['output'];
  eventDetails?: Maybe<EventDetailsEntity>;
  eventStatus: EventStatus;
  eventTickets?: Maybe<EventTicketsEntity>;
  eventTitle: Scalars['String']['output'];
  idEvent: Scalars['ID']['output'];
  location: LocationsEntity;
  startDate: Scalars['DateTime']['output'];
  subCategory?: Maybe<SubCategory>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type EventDetailsEntity = {
  __typename: 'EventDetailsEntity';
  event: Event;
  eventDescription: Scalars['String']['output'];
  eventSummary: Scalars['String']['output'];
  idEventDetails: Scalars['ID']['output'];
};

export type EventDetailsInput = {
  eventDescription?: InputMaybe<Scalars['String']['input']>;
  eventSummary?: InputMaybe<Scalars['String']['input']>;
  refIdEvent: Scalars['Float']['input'];
};

/** The status of event */
export type EventStatus =
  | 'DRAFT'
  | 'PUBLISHED'
  | 'SOLD';

export type EventTicketsEntity = {
  __typename: 'EventTicketsEntity';
  availableQuantity: Scalars['Float']['output'];
  endDate: Scalars['DateTime']['output'];
  event?: Maybe<Event>;
  idEventTicket: Scalars['ID']['output'];
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  maxQuantity: Scalars['Float']['output'];
  minQuantity: Scalars['Float']['output'];
  startDate: Scalars['DateTime']['output'];
  ticketDescription?: Maybe<Scalars['String']['output']>;
  ticketName: Scalars['String']['output'];
  ticketPrice: Scalars['Float']['output'];
};

export type ListCustomersInputs = {
  filter?: InputMaybe<CustomerFilterInput>;
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type ListCustomersResponse = {
  __typename: 'ListCustomersResponse';
  results: Array<Customer>;
  totalRows?: Maybe<Scalars['Float']['output']>;
};

/** The type of location for an event (ONLINE_EVENT or VENUE_EVENT) */
export type LocationTypes =
  | 'ONLINE_EVENT'
  | 'VENUE_EVENT';

export type LocationsEntity = {
  __typename: 'LocationsEntity';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  idLocation: Scalars['ID']['output'];
  lat: Scalars['String']['output'];
  locationType: LocationTypes;
  long: Scalars['String']['output'];
  placeId?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  streetAddress: Scalars['String']['output'];
  venueName: Scalars['String']['output'];
};

export type LoginAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginCustomerInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename: 'Mutation';
  /** Create new admin user */
  createAdminUser: SuccessResponse;
  /** This will crete new Events */
  createBasicEvent: SuccessResponse;
  /** This will crete new Categories */
  createCategory: SuccessResponse;
  /** This will signup new `Customers */
  createCustomer: CustomerLoginResponse;
  /** This will create new Ticket for the Event */
  createEventTickets: SuccessResponse;
  /** This will crete new Events */
  createOrUpdateEventDetails: SuccessResponse;
  /** This will signup new `Organizers */
  createOrganizer: SuccessResponse;
  /** This will crete new SubCategories */
  createSubCategory: SuccessResponse;
  /** Admin Login */
  loginAsAdmin: AdminLoginResponse;
  /** Customer Login */
  loginAsCustomer: CustomerLoginResponse;
  /** Update admin data */
  updateAdminData: Scalars['String']['output'];
  /** Update admin email */
  updateAdminEmail: AdminEmailUpdateResponse;
  /** This will update Admin Password */
  updateAdminPassword: SuccessResponse;
  /** This will update ticket for the Event */
  updateBasicEvent: SuccessResponse;
  /** This will update Category */
  updateCategory: Category;
  /** This will update Customer */
  updateCustomer: Customer;
  /** Update customer email */
  updateCustomerEmail: CustomerEmailUpdateResponse;
  /** This will update Customer Password */
  updateCustomerPassword: SuccessResponse;
  /** This will update ticket for the Event */
  updateEventTicket: SuccessResponse;
  /** This will signup new `Organizers */
  updateOrganizer: Organizer;
  /** This will update SubCategory */
  updateSubCategories: SubCategory;
};


export type MutationCreateAdminUserArgs = {
  input: CreateAdminUserInput;
};


export type MutationCreateBasicEventArgs = {
  input: CreateBasicEventInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateEventTicketsArgs = {
  input: CreateEventTicketInput;
};


export type MutationCreateOrUpdateEventDetailsArgs = {
  input: EventDetailsInput;
};


export type MutationCreateOrganizerArgs = {
  input: CreateOrganizerInput;
};


export type MutationCreateSubCategoryArgs = {
  input: CreateSubCategoryInput;
};


export type MutationLoginAsAdminArgs = {
  input: LoginAdminInput;
};


export type MutationLoginAsCustomerArgs = {
  input: LoginCustomerInput;
};


export type MutationUpdateAdminDataArgs = {
  input: UpdateAdminUserInput;
};


export type MutationUpdateAdminEmailArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateAdminPasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationUpdateBasicEventArgs = {
  input: UpdateBasicEventInput;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerEmailArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateCustomerPasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationUpdateEventTicketArgs = {
  input: UpdateEventTicketInput;
};


export type MutationUpdateOrganizerArgs = {
  input: UpdateOrganizerInput;
};


export type MutationUpdateSubCategoriesArgs = {
  input: UpdateSubCategoryInput;
};

export type Organizer = {
  __typename: 'Organizer';
  description?: Maybe<Scalars['String']['output']>;
  idOrganizerUser: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  organizationBio?: Maybe<Scalars['String']['output']>;
  websiteLink?: Maybe<Scalars['String']['output']>;
};

export type PageData = {
  __typename: 'PageData';
  count: Scalars['Float']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename: 'Query';
  /** This will get all categories */
  getAllCategories: Array<Category>;
  /** This will get all categories */
  getAllSubCategories: Array<SubCategory>;
  /** Get the Customer */
  getCustomerData: Customer;
  getCustomerUploadUrl: S3SignedUrlResponse;
  /** The List of Customers with Pagination and filters */
  getCustomersAdmin: ListCustomersResponse;
  /** check if email already exist */
  validEmailAdmin: SuccessResponse;
  /** check if email already exist */
  validEmailCustomer: SuccessResponse;
};


export type QueryGetCustomersAdminArgs = {
  input: ListCustomersInputs;
};


export type QueryValidEmailAdminArgs = {
  input: Scalars['String']['input'];
};


export type QueryValidEmailCustomerArgs = {
  input: Scalars['String']['input'];
};

export type S3SignedUrlResponse = {
  __typename: 'S3SignedUrlResponse';
  fileName: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
};

export type SubCategory = {
  __typename: 'SubCategory';
  category: Category;
  events?: Maybe<Array<Event>>;
  idSubCategory: Scalars['ID']['output'];
  subCategoryName: Scalars['String']['output'];
};

export type SuccessResponse = {
  __typename: 'SuccessResponse';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateAdminUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBasicEventInput = {
  endDate: Scalars['DateTime']['input'];
  eventTitle: Scalars['String']['input'];
  idEvent: Scalars['ID']['input'];
  location: CreateLocationInput;
  refIdCategory?: InputMaybe<Scalars['Float']['input']>;
  refIdSubCategory?: InputMaybe<Scalars['Float']['input']>;
  startDate: Scalars['DateTime']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  categoryName: Scalars['String']['input'];
  idCategory: Scalars['ID']['input'];
};

export type UpdateCustomerInput = {
  cellPhone?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  homePhone?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  secondAddress?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEventTicketInput = {
  availableQuantity: Scalars['Float']['input'];
  endDate: Scalars['DateTime']['input'];
  idEventTicket: Scalars['ID']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  maxQuantity: Scalars['Float']['input'];
  minQuantity: Scalars['Float']['input'];
  refIdEvent: Scalars['Float']['input'];
  startDate: Scalars['DateTime']['input'];
  ticketDescription?: InputMaybe<Scalars['String']['input']>;
  ticketName: Scalars['String']['input'];
  ticketPrice: Scalars['Float']['input'];
};

export type UpdateOrganizerInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  idOrganizerUser: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  organizationBio?: InputMaybe<Scalars['String']['input']>;
  websiteLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubCategoryInput = {
  idCategory: Scalars['ID']['input'];
  idSubCategory: Scalars['ID']['input'];
  subCategoryName: Scalars['String']['input'];
};
