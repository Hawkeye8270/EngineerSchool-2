using DocsVision.BackOffice.CardLib.CardDefs;
using DocsVision.WebClientLibrary.ObjectModel.Services.EntityLifeCycle;
using DocsVision.WebClient.Extensibility;
using IntroductionToWebSE.Web.SE.Services;
//using IntroductionToWebSE.Web.SE.CardLifeCycles;
using Microsoft.Extensions.DependencyInjection;

namespace IntroductionToWebSE.Web.SE {

	public class TestWebServerExtension : WebClientExtension {

		public TestWebServerExtension() : base() { }

		public override string ExtensionName => "SchoolDemo";

		public override Version ExtensionVersion => new Version(1, 0, 0);

		public override void InitializeServiceCollection(IServiceCollection services) {
			//services.AddSinglton<IOfficeMemoServise, OfficeMemoService>();
			services.AddSingleton<IOfficeMemoService, OfficeMemoService>(); 
		}
	}
}