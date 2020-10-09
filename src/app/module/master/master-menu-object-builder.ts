/*
 * Copyright (c) 2020 Vyasaka Technologies. All Rights Reserved.
 */
import moment from "moment";
import * as uuid from "uuid";
// import { SessionStore } from "../../services/session.store";
import { DateUtil } from "../../utils/date-util";
import { MasterMenu, MasterMenuData } from "./master-menu.model";
import { MasterConstant } from "./master.constant";

export class MasterMenuObjectBuilder {
  constructor() {}
  static create(data: any, code: string): MasterMenu {
    const referenceId = uuid.v4();
    const masterMenu: MasterMenu = new MasterMenu();
    const masterMenuData: MasterMenuData = new MasterMenuData();
    // masterMenu._id = MasterConstant.DOC_TYPE;
    masterMenu.docType = MasterConstant.DOC_TYPE;
    masterMenu.docId = referenceId;
    // @ts-ignore TS7053
    // masterMenu.createdBy =
    //   SessionStore.getUserProfile()["profile"]["firstName"] +
    //   " " +
    //   SessionStore.getUserProfile()["profile"]["lastName"];
    // masterMenu.createdBy = 'Surya';
    masterMenu.createdOn = DateUtil.toJsonFormat(moment().format());
    masterMenuData.code = code;
    masterMenuData.description = data.description;
    masterMenuData.name = data.name;
    masterMenuData.application = data.application;
    const masterData: MasterMenuData[] = [];
    masterMenuData.parent = "";
    masterData.push(masterMenuData);
    masterMenu.masterMenuData = masterData;
    return masterMenu;
  }

  static createDefaultData(data: any) {
    const referenceId = uuid.v4();
    const masterMenu: MasterMenu = new MasterMenu();
    masterMenu._id = MasterConstant.DOC_TYPE;
    masterMenu.docType = MasterConstant.DOC_TYPE;
    masterMenu.docId = referenceId;
    // @ts-ignore TS7053
    // masterMenu.createdBy =
    //   SessionStore.getUserProfile()["profile"]["firstName"] +
    //   " " +
    //   SessionStore.getUserProfile()["profile"]["lastName"];
    masterMenu.createdOn = DateUtil.toJsonFormat(moment().format());

    masterMenu.masterMenuData = data;
    return masterMenu;
  }
}
