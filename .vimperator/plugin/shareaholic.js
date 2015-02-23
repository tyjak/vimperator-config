/**
 * Integration plugin for shareaholic extension
 * 
 * Usage:
 * 	:shareBuzzter
 * Note: only shareaholdic send function are integrated
 * 
 * @author David Foucher (dev[at]tyjak.com)
 * @version 0.2
 *
 */
/* {{{
let re = /^bzz_(.*)_Send$/;
	const types = [re.exec(k)[1] for (k in window) if (re.test(k))];

	commands.addUserCommand(
		["share"], "Shareaholic",
		function(args) {
			if (types.indexOf(args[0]) >= 0)
			    window["bzz_" + args[0] + "_Send"]();
		},
		{ argCount: "1", completer: function(context) [[t, ""] for each (t in types)], }
	);
}}}
*/
commands.addUserCommand(['shareAttentionmeter'], "Shareaholic command",function(){window.Shareaholic_Destinations.attentionmeter()});
commands.addUserCommand(['shareAmazonwishlist'], "Shareaholic command",function(){window.Shareaholic_Destinations.amazonwishlist()});
commands.addUserCommand(['shareBitly'], "Shareaholic command",function(){window.Shareaholic_Destinations.bitly()});
commands.addUserCommand(['shareBuzzster'], "Shareaholic command",function(){window.Shareaholic_Destinations.buzzster()});
commands.addUserCommand(['shareBzzscapes'], "Shareaholic command",function(){window.Shareaholic_Destinations.bzzscapes()});
commands.addUserCommand(['shareSupr'], "Shareaholic command",function(){window.Shareaholic_Destinations.supr()});
commands.addUserCommand(['shareGooglereader'], "Shareaholic command",function(){window.Shareaholic_Destinations.googlereader()});
commands.addUserCommand(['shareFriendfeed'], "Shareaholic command",function(){window.Shareaholic_Destinations.friendfeed()});
commands.addUserCommand(['shareKaboodle'], "Shareaholic command",function(){window.Shareaholic_Destinations.kaboodle()});
commands.addUserCommand(['sharePosterous'], "Shareaholic command",function(){window.Shareaholic_Destinations.posterous()});
commands.addUserCommand(['shareTipjoy'], "Shareaholic command",function(){window.Shareaholic_Destinations.tipjoy()});
commands.addUserCommand(['shareWeheartit'], "Shareaholic command",function(){window.Shareaholic_Destinations.weheartit()});
commands.addUserCommand(['shareVisualize'], "Shareaholic command",function(){window.Shareaholic_Destinations.visualize()});
commands.addUserCommand(['shareEvernote'], "Shareaholic command",function(){window.Shareaholic_Destinations.evernote()});
commands.addUserCommand(['shareGooglenotebook'], "Shareaholic command",function(){window.Shareaholic_Destinations.googlenotebook()});
commands.addUserCommand(['shareTbuzz'], "Shareaholic command",function(){window.Shareaholic_Destinations.tbuzz()});
commands.addUserCommand(['shareTweetie'], "Shareaholic command",function(){window.Shareaholic_Destinations.tweetie()});
commands.addUserCommand(['shareDiigolet'], "Shareaholic command",function(){window.Shareaholic_Destinations.diigolet()});
commands.addUserCommand(['shareMailto'], "Shareaholic command",function(){window.Shareaholic_Destinations.mailto()});
commands.addUserCommand(['shareDiggbar'], "Shareaholic command",function(){window.Shareaholic_Destinations.diggbar()});
commands.addUserCommand(['shareIsgd'], "Shareaholic command",function(){window.Shareaholic_Destinations.isgd()});
commands.addUserCommand(['shareSmushit'], "Shareaholic command",function(){window.Shareaholic_Destinations.smushit()});
commands.addUserCommand(['shareMozillaca'], "Shareaholic command",function(){window.Shareaholic_Destinations.mozillaca()});
commands.addUserCommand(['shareReddit'], "Shareaholic command",function(){window.Shareaholic_Destinations.reddit()});
commands.addUserCommand(['shareNetvibes'], "Shareaholic command",function(){window.Shareaholic_Destinations.netvibes()});
commands.addUserCommand(['sharePingfm'], "Shareaholic command",function(){window.Shareaholic_Destinations.pingfm()});
commands.addUserCommand(['shareDelicious'], "Shareaholic command",function(){window.Shareaholic_Destinations.delicious()});
commands.addUserCommand(['shareMyspace'], "Shareaholic command",function(){window.Shareaholic_Destinations.myspace()});
commands.addUserCommand(['shareDiigo'], "Shareaholic command",function(){window.Shareaholic_Destinations.diigo()});
commands.addUserCommand(['shareYahoobuzz'], "Shareaholic command",function(){window.Shareaholic_Destinations.yahoobuzz()});
commands.addUserCommand(['shareIdentica'], "Shareaholic command",function(){window.Shareaholic_Destinations.identica()});
commands.addUserCommand(['shareDigg'], "Shareaholic command",function(){window.Shareaholic_Destinations.digg()});
commands.addUserCommand(['shareHubtm'], "Shareaholic command",function(){window.Shareaholic_Destinations.hubtm()});
commands.addUserCommand(['shareTinyurl'], "Shareaholic command",function(){window.Shareaholic_Destinations.tinyurl()});
commands.addUserCommand(['shareMixx'], "Shareaholic command",function(){window.Shareaholic_Destinations.mixx()});
commands.addUserCommand(['shareTechmeme'], "Shareaholic command",function(){window.Shareaholic_Destinations.techmeme()});
commands.addUserCommand(['shareLinkedin'], "Shareaholic command",function(){window.bzz_linkedin_Send(event)});
commands.addUserCommand(['shareLive'], "Shareaholic command",function(){window.bzz_live_Send()});
commands.addUserCommand(['shareSmaknews'], "Shareaholic command",function(){window.bzz_smaknews_Send()});
commands.addUserCommand(['shareLivejournal'], "Shareaholic command",function(){window.bzz_livejournal_Send()});
commands.addUserCommand(['shareTrim'], "Shareaholic command",function(){window.bzz_trim_Send()});
commands.addUserCommand(['shareSphinn'], "Shareaholic command",function(){window.bzz_sphinn_Send()});
commands.addUserCommand(['shareStumbleupon'], "Shareaholic command",function(){window.bzz_stumbleupon_Send()});
commands.addUserCommand(['shareTipd'], "Shareaholic command",function(){window.bzz_tipd_Send()});
commands.addUserCommand(['shareBlogger'], "Shareaholic command",function(){window.bzz_blogger_Send(event)});
commands.addUserCommand(['shareHealthranker'], "Shareaholic command",function(){window.bzz_healthranker_Send()});
commands.addUserCommand(['shareYcombinator'], "Shareaholic command",function(){window.bzz_ycombinator_Send()});
commands.addUserCommand(['shareStreakr'], "Shareaholic command",function(){window.bzz_streakr_Send()});
commands.addUserCommand(['shareMeneame'], "Shareaholic command",function(){window.bzz_meneame_Send()});
commands.addUserCommand(['shareSimpy'], "Shareaholic command",function(){window.bzz_simpy_Send()});
commands.addUserCommand(['shareFoxiewire'], "Shareaholic command",function(){window.bzz_foxiewire_Send()});
commands.addUserCommand(['shareTruemors'], "Shareaholic command",function(){window.bzz_truemors_Send()});
commands.addUserCommand(['shareConnotea'], "Shareaholic command",function(){window.bzz_connotea_Send()});
commands.addUserCommand(['shareInstapaper'], "Shareaholic command",function(){window.bzz_instapaper_Send()});
commands.addUserCommand(['shareWordpress1'], "Shareaholic command",function(){window.bzz_wordpress1_Send()});
commands.addUserCommand(['shareFacebook'], "Shareaholic command",function(){window.bzz_facebook_Send()});
commands.addUserCommand(['shareFollowupcc'], "Shareaholic command",function(){window.bzz_followupcc_Send()});
commands.addUserCommand(['sharePlurk'], "Shareaholic command",function(){window.bzz_plurk_Send()});
commands.addUserCommand(['shareTwitthat'], "Shareaholic command",function(){window.bzz_twitthat_Send()});
commands.addUserCommand(['shareTwine'], "Shareaholic command",function(){window.bzz_twine_Send()});
commands.addUserCommand(['shareTumblr'], "Shareaholic command",function(){window.bzz_tumblr_Send()});
commands.addUserCommand(['shareGoog'], "Shareaholic command",function(){window.bzz_goog_Send()});
commands.addUserCommand(['shareSoup'], "Shareaholic command",function(){window.bzz_soup_Send()});
commands.addUserCommand(['shareGmail'], "Shareaholic command",function(){window.bzz_gmail_Send()});

