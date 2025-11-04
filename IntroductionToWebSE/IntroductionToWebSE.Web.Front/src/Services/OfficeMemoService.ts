import { ControllerBase, HttpMethods } from "@docsvision/webclient/System/ControllerBase";
import { $RequestManager } from "@docsvision/webclient/System/$RequestManager";
import { IOfficeMemoService } from "./Interfaces/IOfficeMemoService"
import { IOfficeMemoNameModel } from "../Model/IOfficeMemoNameModel";
import { IOfficeMemoNameRequestModel } from "../Model/IOfficeMemoNameRequestModel";

export class OfficeMemoService extends ControllerBase implements IOfficeMemoService {

    protected controllerName: string = "OfficeMemo";

    constructor(protected services: $RequestManager) {
        super(services);
    }

    GetOfficeMemoName(model: IOfficeMemoNameRequestModel): Promise<IOfficeMemoNameModel> {
        return super.doRequest({
            controller: this.controllerName,
            action: 'GetOfficeMemoName',
            isApi: true,
            method: HttpMethods.Post,
            data: { model },
            options: { isShowOverlay: true}
        });
    }

}