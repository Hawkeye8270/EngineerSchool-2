using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DocsVision.BackOffice.CardLib.CardDefs;
using DocsVision.BackOffice.ObjectModel;
using DocsVision.Platform.WebClient;
using IntroductionToWebSE.Web.SE.Model;

namespace IntroductionToWebSE.Web.SE.Services {

	public interface IOfficeMemoService {
		OfficeMemoNameModel GetOfficeMemoName(SessionContext sessionContext, Guid cardId);
	}
}
