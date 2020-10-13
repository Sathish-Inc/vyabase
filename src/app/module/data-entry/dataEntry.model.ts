import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('DataEntryModel')
export class DataEntryModel {
  @JsonProperty('id', String)
  _id: string | undefined = undefined;

  @JsonProperty('tag', String)
  tag: string | undefined = undefined;

  @JsonProperty('name', String)
  name: string | undefined = undefined;

  @JsonProperty('company', String)
  company: string | undefined = undefined;

  @JsonProperty('stage', String)
  stage: string | undefined = undefined;

  @JsonProperty('value', String)
  value: string | undefined = undefined;

  @JsonProperty('closeDate', String)
  closeDate: string | undefined = undefined;

  @JsonProperty('win', String)
  win: string | undefined = undefined;

  @JsonProperty('status', String)
  status: string | undefined = undefined;

  @JsonProperty('lossRelation', String)
  lossRelation: string | undefined = undefined;

  @JsonProperty('priority', String)
  priority: string | undefined = undefined;

  @JsonProperty('source', String)
  source: string | undefined = undefined;

  @JsonProperty('description', String)
  description: string | undefined = undefined;
}
