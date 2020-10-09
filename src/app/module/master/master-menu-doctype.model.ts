/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("MasterMenuDocType")
export class MasterMenuDocType {
  @JsonProperty("title", String, true)
  title: string | undefined = undefined;

  @JsonProperty("docType", String, true)
  docType: string | undefined = undefined;

  @JsonProperty("description", String, true)
  description: string | undefined = undefined;

  @JsonProperty("id", String, true)
  id: string | undefined = undefined;

  @JsonProperty("length", Number, true)
  length: number | undefined = undefined;
}
