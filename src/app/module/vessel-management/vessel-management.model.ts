/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('VesselManagement')
export class VesselManagement {
  @JsonProperty('_id', String)
  _id: string | undefined = undefined;

  @JsonProperty('docType', String)
  docType: string | undefined = undefined;

  @JsonProperty('docId', String)
  docId: string | undefined = undefined;

  @JsonProperty('vesselId', String)
  vesselId: string | undefined = undefined;

  @JsonProperty('imoNumber', Number)
  imoNumber: number | undefined = undefined;

  @JsonProperty('vesselName', String)
  vesselName: string | undefined = undefined;

  @JsonProperty('shipType', String)
  shipType: string | undefined = undefined;

  @JsonProperty('flag', String)
  flag: string | undefined = undefined;

  @JsonProperty('homePort', String)
  homePort: string | undefined = undefined;

  @JsonProperty('grossTonnage', Number)
  grossTonnage: number | undefined = undefined;

  @JsonProperty('summerDeadWeight', Number)
  summerDeadWeight: number | undefined = undefined;

  @JsonProperty('lengthOverall', Number)
  lengthOverall: number | undefined = undefined;

  @JsonProperty('beam', Number)
  beam: number | undefined = undefined;

  @JsonProperty('draught', Number)
  draught: number | undefined = undefined;

  @JsonProperty('yearOfBuilt', String)
  yearOfBuilt: string | undefined = undefined;

  @JsonProperty('builder', String)
  builder: string | undefined = undefined;

  @JsonProperty('placeOfBuilt', String)
  placeOfBuilt: string | undefined = undefined;

  @JsonProperty('yard', String)
  yard: string | undefined = undefined;

  @JsonProperty('teu', String)
  teu: string | undefined = undefined;

  @JsonProperty('crude', String)
  crude: string | undefined = undefined;

  @JsonProperty('grain', String)
  grain: string | undefined = undefined;

  @JsonProperty('bale', String)
  bale: string | undefined = undefined;

  @JsonProperty('registeredOwner', String)
  registeredOwner: string | undefined = undefined;

  @JsonProperty('manager', String)
  manager: string | undefined = undefined;
}
