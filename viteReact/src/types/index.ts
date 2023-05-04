import { NavigateOptions } from "react-router-dom";

export type UserType = {
  "id"?: number;
  "accountName": string;
  "userName": string;
  "password": string;
  "phoneNum": string,
  "groupId": number;
  "groupName"?: string;
  "roleId"?: number;
  "roleName"?: string;
}

export type InputWithHintType = {
  label?: string;
  type? :string;
  placeholder: string;
  hint?: any;
  value: string;
  setValue: Function;
  isRequire?: boolean;
}

export type SelectWithHintType = {
  label?: string;
  options: any[];
  placeholder: string;
  hint?: boolean;
  value: string;
  setValue?: Function;
  isRequire?: boolean;
}

export type PageObjType = {
  pageNo: number;
  pageSize: number;
  sort?: string;
  totalPage: number;
}