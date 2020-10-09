/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */
import { JsonObject, JsonProperty } from "json2typescript";
@JsonObject("MasterMenuData")
export class MasterMenuData {
  @JsonProperty("application", String, true)
  application: string | undefined = undefined;
  @JsonProperty("code", String)
  code: string | undefined = undefined;
  @JsonProperty("description", String)
  description: string | undefined = undefined;
  @JsonProperty("name", String)
  name: string | undefined = undefined;
  @JsonProperty("parent", String)
  parent: string | undefined = undefined;
}
@JsonObject("MasterMenu")
export class MasterMenu {
  @JsonProperty("_id", String, true)
  _id: string | undefined = undefined;
  @JsonProperty("docType", String, true)
  docType: string | undefined = undefined;
  @JsonProperty("docId", String, true)
  docId: string | undefined = undefined;
  // @JsonProperty("createdBy", String, true)
  // createdBy: string | undefined = undefined;
  @JsonProperty("createdOn", String, true)
  createdOn: string | undefined = undefined;
  @JsonProperty("updatedBy", String, true)
  updatedBy: string | undefined = undefined;
  @JsonProperty("updatedOn", String, true)
  updatedOn: string | undefined = undefined;
  @JsonProperty("masterMenuData", [MasterMenuData])
  masterMenuData: MasterMenuData[] = [];
}
