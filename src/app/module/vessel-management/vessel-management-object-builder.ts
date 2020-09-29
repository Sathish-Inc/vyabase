/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */

import moment from 'moment';
import * as UUID from 'uuid';

import { VesselManagementConstant } from './vessel-management-constant';
import { VesselManagement } from './vessel-management.model';

export class VesselManagementObjectBuilder {
  constructor() {}
  static create(data: any, vesselId: any): VesselManagement {
    const referenceId = UUID.v4();
    const vesselManagement: VesselManagement = new VesselManagement();
    vesselManagement._id = referenceId;
    vesselManagement.docType = VesselManagementConstant.DOC_TYPE;
    vesselManagement.docId = referenceId;
    vesselManagement.vesselId = vesselId;
    vesselManagement.imoNumber = data.imoNumber;
    vesselManagement.vesselName = data.vesselName;
    vesselManagement.shipType = data.shipType;
    vesselManagement.flag = data.flag;
    vesselManagement.homePort = data.homePort;
    vesselManagement.grossTonnage = data.grossTonnage;
    vesselManagement.summerDeadWeight = data.summerDeadWeight;
    vesselManagement.lengthOverall = data.lengthOverall;
    vesselManagement.beam = data.beam;
    vesselManagement.draught = data.draught;
    vesselManagement.yearOfBuilt = moment(data.yearOfBuilt).format('YYYY');
    vesselManagement.builder = data.builder;
    vesselManagement.placeOfBuilt = data.placeOfBuilt;
    vesselManagement.yard = data.yard;
    vesselManagement.teu = data.teu;
    vesselManagement.crude = data.crude;
    vesselManagement.grain = data.grain;
    vesselManagement.bale = data.bale;
    vesselManagement.registeredOwner = data.registeredOwner;
    vesselManagement.manager = data.manager;

    return vesselManagement;
  }
}
