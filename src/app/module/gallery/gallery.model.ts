/**
 * Copyright 2020 Vyasaka Technologies
 */

import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Gallery")
export class Gallery {
  @JsonProperty("_id", String)
  _id: string | undefined = undefined;

  @JsonProperty("docType", String)
  docType: string | undefined = undefined;

  @JsonProperty("docId", String)
  docId: string | undefined = undefined;

  @JsonProperty("order", String)
  order: string | undefined = undefined;

  @JsonProperty("title", String)
  title: string | undefined = undefined;

  @JsonProperty("galleryLocation", String)
  galleryLocation: string | undefined = undefined;

  @JsonProperty("description", String)
  description: string | undefined = undefined;

  @JsonProperty("galleryGroup", String)
  galleryGroup: string | undefined = undefined;

  @JsonProperty("publish", String, true)
  publish: string | undefined = undefined;

  @JsonProperty("createdOn", String, true)
  createdOn: string | undefined = undefined;

  @JsonProperty("updatedOn", String, true)
  updatedOn: string | undefined = undefined;
}
