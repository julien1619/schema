/**
 * This file was automatically generated by Nexus 0.9.7
 * Do not make changes to this file directly
 */

import * as ctx from "../data-sources/Context";
import * as db from "./ghost-db-types";
import { core } from "nexus";
declare global {
  interface NexusGenCustomDefinitionMethods<TypeName extends string> {
    date<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Date";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenRootTypes {
  Post: db.Posts;
  Query: {};
  User: db.Users;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {}

export interface NexusGenFieldTypes {
  Post: {
    // field return type
    html: string; // String!
    slug: string; // String!
    title: string; // String!
    uuid: string; // String!
  };
  Query: {
    // field return type
    me: NexusGenRootTypes["Post"] | null; // Post
    postById: NexusGenRootTypes["Post"]; // Post!
    userById: NexusGenRootTypes["User"]; // User!
  };
  User: {
    // field return type
    accessibility: string | null; // String
    bio: string | null; // String
    coverImage: string | null; // String
    createdAt: any; // Date!
    createdBy: NexusGenRootTypes["User"]; // User!
    email: string; // String!
    facebook: string | null; // String
    ghostAuthAccessToken: string | null; // String
    ghostAuthId: string | null; // String
    id: string; // String!
    lastSeen: any | null; // Date
    locale: string | null; // String
    location: string | null; // String
    metaDescription: string | null; // String
    metaTitle: string | null; // String
    name: string; // String!
    profileImage: string | null; // String
    slug: string; // String!
    status: string; // String!
    tour: string | null; // String
    twitter: string | null; // String
    updatedAt: any | null; // Date
    updatedBy: string | null; // String
    visibility: string; // String!
    website: string | null; // String
  };
}

export interface NexusGenArgTypes {
  Query: {
    postById: {
      // args
      id: string; // ID!
    };
    userById: {
      // args
      id: string; // ID!
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Post" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames =
  | "Boolean"
  | "Date"
  | "Float"
  | "ID"
  | "Int"
  | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}
