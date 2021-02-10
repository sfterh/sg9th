import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import * as strings from 'QualfonMasterPageApplicationCustomizerStrings';

const LOG_SOURCE: string = 'QualfonMasterPageApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IQualfonMasterPageApplicationCustomizerProperties {
  // This is an example; replace with your own property
  CSSURL: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class QualfonMasterPageApplicationCustomizer
  extends BaseApplicationCustomizer<IQualfonMasterPageApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
debugger;
    let controls:HTMLCollection = document.getElementsByClassName("o365sx-searchBoxInactive")

    let fileURL: string = this.context.pageContext.site.serverRelativeUrl + this.properties.CSSURL;
    fileURL = this.properties.CSSURL;
    if (fileURL) {
      const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
      let customStyle: HTMLLinkElement = document.createElement("link");
      customStyle.href = fileURL;//this.properties.CSSURL;
      customStyle.rel = "stylesheet";
      customStyle.type = "text/css";
      head.insertAdjacentElement("beforeEnd", customStyle);
    }

    return Promise.resolve();
  }
}
