using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DocsVision.Platform.WebClient.Models.Generic;
using DocsVision.Platform.WebClient;
using Microsoft.AspNetCore.Mvc;
using IntroductionToWebSE.Web.SE.Services;
using IntroductionToWebSE.Web.SE.Model;
using DocsVision.Platform.WebClient.Models;

namespace IntroductionToWebSE.Web.SE.Controllers {

	public class OfficeMemoController : ControllerBase {

		private readonly ICurrentObjectContextProvider contextProvider;
		private readonly IOfficeMemoService officeMemoService;
		public OfficeMemoController(
			ICurrentObjectContextProvider contextProvider,
			IOfficeMemoService myService) {
			this.contextProvider = contextProvider;
			this.officeMemoService = myService;
		}

		[HttpPost]
		public CommonResponse<OfficeMemoNameModel> GetOffiseMemoName([FromBody] OfficeMemoNameRequestModel model) {
			var sessionContext = contextProvider.GetOrCreateCurrentSessionContext();
			var result = officeMemoService.GetOfficeMemoName(sessionContext, model.DocumentId);
			return CommonResponse.CreateSuccess(result);
		}
	}
}
