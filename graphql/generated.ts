import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};



export type RootQuery = {
  __typename?: 'RootQuery';
  Class?: Maybe<Class>;
  Component?: Maybe<Component>;
  Function?: Maybe<Function>;
  Link?: Maybe<Link>;
  Links?: Maybe<Links>;
  LinkOptions?: Maybe<LinkOptions>;
  Navigation?: Maybe<Navigation>;
  NavigationOptions?: Maybe<NavigationOptions>;
  Prop?: Maybe<Prop>;
  Settings?: Maybe<Settings>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  Document?: Maybe<Document>;
  allClass: Array<Class>;
  allComponent: Array<Component>;
  allFunction: Array<Function>;
  allLink: Array<Link>;
  allLinks: Array<Links>;
  allLinkOptions: Array<LinkOptions>;
  allNavigation: Array<Navigation>;
  allNavigationOptions: Array<NavigationOptions>;
  allProp: Array<Prop>;
  allSettings: Array<Settings>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allDocument: Array<Document>;
};


export type RootQueryClassArgs = {
  id: Scalars['ID'];
};


export type RootQueryComponentArgs = {
  id: Scalars['ID'];
};


export type RootQueryFunctionArgs = {
  id: Scalars['ID'];
};


export type RootQueryLinkArgs = {
  id: Scalars['ID'];
};


export type RootQueryLinksArgs = {
  id: Scalars['ID'];
};


export type RootQueryLinkOptionsArgs = {
  id: Scalars['ID'];
};


export type RootQueryNavigationArgs = {
  id: Scalars['ID'];
};


export type RootQueryNavigationOptionsArgs = {
  id: Scalars['ID'];
};


export type RootQueryPropArgs = {
  id: Scalars['ID'];
};


export type RootQuerySettingsArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllClassArgs = {
  where?: Maybe<ClassFilter>;
  sort?: Maybe<Array<ClassSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllComponentArgs = {
  where?: Maybe<ComponentFilter>;
  sort?: Maybe<Array<ComponentSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllFunctionArgs = {
  where?: Maybe<FunctionFilter>;
  sort?: Maybe<Array<FunctionSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllLinkArgs = {
  where?: Maybe<LinkFilter>;
  sort?: Maybe<Array<LinkSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllLinksArgs = {
  where?: Maybe<LinksFilter>;
  sort?: Maybe<Array<LinksSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllLinkOptionsArgs = {
  where?: Maybe<LinkOptionsFilter>;
  sort?: Maybe<Array<LinkOptionsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllNavigationArgs = {
  where?: Maybe<NavigationFilter>;
  sort?: Maybe<Array<NavigationSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllNavigationOptionsArgs = {
  where?: Maybe<NavigationOptionsFilter>;
  sort?: Maybe<Array<NavigationOptionsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllPropArgs = {
  where?: Maybe<PropFilter>;
  sort?: Maybe<Array<PropSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSettingsArgs = {
  where?: Maybe<SettingsFilter>;
  sort?: Maybe<Array<SettingsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllDocumentArgs = {
  where?: Maybe<DocumentFilter>;
  sort?: Maybe<Array<DocumentSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Class = Document & {
  __typename?: 'Class';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
};


export type Component = Document & {
  __typename?: 'Component';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  category?: Maybe<Scalars['String']>;
  props?: Maybe<Array<Maybe<Prop>>>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type Prop = Document & {
  __typename?: 'Prop';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  function?: Maybe<Array<Maybe<Function>>>;
};

export type Function = Document & {
  __typename?: 'Function';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<Class>>>;
};

export type Link = Document & {
  __typename?: 'Link';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  linkOptions?: Maybe<LinkOptions>;
};

export type LinkOptions = Document & {
  __typename?: 'LinkOptions';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  decorator?: Maybe<Scalars['String']>;
};

export type Links = Document & {
  __typename?: 'Links';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<Link>>>;
};

export type Navigation = Document & {
  __typename?: 'Navigation';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  navigationLinks?: Maybe<Array<Maybe<Links>>>;
  navigationOptions?: Maybe<NavigationOptions>;
};

export type NavigationOptions = Document & {
  __typename?: 'NavigationOptions';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  alignItems?: Maybe<Scalars['String']>;
};

export type Settings = Document & {
  __typename?: 'Settings';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  navigation?: Maybe<Navigation>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<Geopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
};

export type ClassFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  property?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
};

export type Sanity_DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>;
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  nin?: Maybe<Array<Scalars['ID']>>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  nin?: Maybe<Array<Scalars['String']>>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>;
};

export type ClassSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  property?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type ComponentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  category?: Maybe<StringFilter>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type ComponentSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  category?: Maybe<SortOrder>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export type FunctionFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
};

export type FunctionSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
};

export type LinkFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  route?: Maybe<StringFilter>;
  linkOptions?: Maybe<LinkOptionsFilter>;
};

export type LinkOptionsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  size?: Maybe<StringFilter>;
  weight?: Maybe<StringFilter>;
  decorator?: Maybe<StringFilter>;
};

export type LinkSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  route?: Maybe<SortOrder>;
  linkOptions?: Maybe<LinkOptionsSorting>;
};

export type LinkOptionsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  decorator?: Maybe<SortOrder>;
};

export type LinksFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
};

export type LinksSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
};

export type NavigationFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  navigationOptions?: Maybe<NavigationOptionsFilter>;
};

export type NavigationOptionsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  alignItems?: Maybe<StringFilter>;
};

export type NavigationSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  navigationOptions?: Maybe<NavigationOptionsSorting>;
};

export type NavigationOptionsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  alignItems?: Maybe<SortOrder>;
};

export type PropFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
};

export type PropSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type SettingsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  navigation?: Maybe<NavigationFilter>;
};

export type SettingsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  navigation?: Maybe<NavigationSorting>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  location?: Maybe<GeopointFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
  lqip?: Maybe<StringFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
  alt?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  aspectRatio?: Maybe<FloatFilter>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  palette?: Maybe<SanityImagePaletteSorting>;
  lqip?: Maybe<SortOrder>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
};

export type DocumentSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
};

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>;
};


export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  top?: Maybe<FloatFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type GetComponentQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type GetComponentQuery = (
  { __typename?: 'RootQuery' }
  & { allComponent: Array<(
    { __typename?: 'Component' }
    & Pick<Component, '_id' | 'name' | 'category'>
    & { slug?: Maybe<(
      { __typename?: 'Slug' }
      & Pick<Slug, 'current'>
    )>, props?: Maybe<Array<Maybe<(
      { __typename?: 'Prop' }
      & Pick<Prop, 'name'>
      & { function?: Maybe<Array<Maybe<(
        { __typename?: 'Function' }
        & Pick<Function, 'name' | 'type'>
        & { classes?: Maybe<Array<Maybe<(
          { __typename?: 'Class' }
          & Pick<Class, 'name' | 'property' | 'value'>
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type GetComponentsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetComponentsListQuery = (
  { __typename?: 'RootQuery' }
  & { allComponent: Array<(
    { __typename?: 'Component' }
    & Pick<Component, 'name' | 'category'>
  )> }
);


export const GetComponentDocument = gql`
    query getComponent($name: String) {
  allComponent(where: {name: {eq: $name}}) {
    _id
    name
    slug {
      current
    }
    category
    props {
      name
      function {
        name
        type
        classes {
          name
          property
          value
        }
      }
    }
  }
}
    `;

/**
 * __useGetComponentQuery__
 *
 * To run a query within a React component, call `useGetComponentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetComponentQuery(baseOptions?: Apollo.QueryHookOptions<GetComponentQuery, GetComponentQueryVariables>) {
        return Apollo.useQuery<GetComponentQuery, GetComponentQueryVariables>(GetComponentDocument, baseOptions);
      }
export function useGetComponentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComponentQuery, GetComponentQueryVariables>) {
          return Apollo.useLazyQuery<GetComponentQuery, GetComponentQueryVariables>(GetComponentDocument, baseOptions);
        }
export type GetComponentQueryHookResult = ReturnType<typeof useGetComponentQuery>;
export type GetComponentLazyQueryHookResult = ReturnType<typeof useGetComponentLazyQuery>;
export type GetComponentQueryResult = Apollo.QueryResult<GetComponentQuery, GetComponentQueryVariables>;
export const GetComponentsListDocument = gql`
    query getComponentsList {
  allComponent {
    name
    category
  }
}
    `;

/**
 * __useGetComponentsListQuery__
 *
 * To run a query within a React component, call `useGetComponentsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetComponentsListQuery(baseOptions?: Apollo.QueryHookOptions<GetComponentsListQuery, GetComponentsListQueryVariables>) {
        return Apollo.useQuery<GetComponentsListQuery, GetComponentsListQueryVariables>(GetComponentsListDocument, baseOptions);
      }
export function useGetComponentsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComponentsListQuery, GetComponentsListQueryVariables>) {
          return Apollo.useLazyQuery<GetComponentsListQuery, GetComponentsListQueryVariables>(GetComponentsListDocument, baseOptions);
        }
export type GetComponentsListQueryHookResult = ReturnType<typeof useGetComponentsListQuery>;
export type GetComponentsListLazyQueryHookResult = ReturnType<typeof useGetComponentsListLazyQuery>;
export type GetComponentsListQueryResult = Apollo.QueryResult<GetComponentsListQuery, GetComponentsListQueryVariables>;