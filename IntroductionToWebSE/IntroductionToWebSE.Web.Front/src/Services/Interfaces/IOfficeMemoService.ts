import { serviceName } from "@docsvision/webclient/System/ServiceUtils";
import { IOfficeMemoNameRequestModel } from "../../Model/IOfficeMemoNameRequestModel";
import { IOfficeMemoNameModel } from "../../Model/IOfficeMemoNameModel";

export interface IOfficeMemoService {
  GetOfficeMemoName(model: IOfficeMemoNameRequestModel): Promise<IOfficeMemoNameModel> 
}

export type $OfficeMemoService = { activityPlanService: IOfficeMemoService };
export const $OfficeMemoService = serviceName<$OfficeMemoService, IOfficeMemoService>(x => x.activityPlanService);

// export type $OfficeMemoServiceType = { activityPlanService: IOfficeMemoService };
// export const $OfficeMemoService = serviceName<$OfficeMemoServiceType, IOfficeMemoService>(x => x.activityPlanService);