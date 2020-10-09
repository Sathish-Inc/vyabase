/**
 * Copyright 2020 Vyasaka Technologies
 */

import moment from "moment";
import * as uuid from "uuid";
import { DateUtil } from "../../utils/date-util";
import { GalleryConstant } from "./gallery-constant";
import { Gallery } from "./gallery.model";

export class GalleryObjectBuilder {
  constructor() {}
  static create(data: any): Gallery {
    const referenceId = uuid.v4();
    const gallery: Gallery = new Gallery();
    gallery._id = referenceId;
    gallery.docType = GalleryConstant.DOC_TYPE;
    gallery.docId = referenceId;
    gallery.title = data.title;
    gallery.order= data.order;
    gallery.galleryLocation = data.galleryLocation;
    gallery.description = data.description;
    gallery.galleryGroup = data.galleryGroup;
    gallery.publish = data.publish;
    gallery.createdOn = DateUtil.toJsonFormat(moment().format());
    return gallery;
  }
}
