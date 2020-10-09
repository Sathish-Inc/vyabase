/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("MasterMenuData")
export class MasterMenuData {
  @JsonProperty("application", String, true)
  application: string | undefined = undefined;

  @JsonProperty("name", String, true)
  name: string | undefined = undefined;

  @JsonProperty("description", String, true)
  description: string | undefined = undefined;

  @JsonProperty("parent", String, true)
  parent: string | undefined = undefined;

  @JsonProperty("code", String, true)
  code: string | undefined = undefined;
}

@JsonObject("MasterMenuDataDefault")
export class MasterMenuDataDefault {
  @JsonProperty("docType", String)
  docType: string | undefined = undefined;

  @JsonProperty("masterMenuData", [MasterMenuData])
  masterMenuData: MasterMenuData[] = [];
}
