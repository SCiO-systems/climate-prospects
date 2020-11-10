function getParameterValue(parameter)
{
	parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + parameter + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else
		return results[1];
}



 function set_language(newLang) {
		
        PAGE_LANGUAGE = newLang;

        // $.getScript Loads the javascript file with the language that we want
        $.getScript("./lang/lang." + MAP_CODE + "." + PAGE_LANGUAGE + ".js", function (data, textStatus, jqxhr) {

            document.getElementById("lang_region").innerHTML       = lang.lang_region;
			document.getElementById("lang_area").innerHTML         = lang.lang_area;
			document.getElementById("lang_area_value").innerHTML   = lang.lang_area_value;
			
			document.getElementById("lang_pop").innerHTML          = lang.lang_pop;
			document.getElementById("lang_pop_year").innerHTML     = lang.lang_pop_year;
			document.getElementById("lang_gdp").innerHTML          = lang.lang_gdp;
			document.getElementById("lang_gdp_year").innerHTML     = lang.lang_gdp_year;
			
			document.getElementById("lang_mapinfo_p1").innerHTML   = lang.lang_mapinfo_p1;
			document.getElementById("lang_mapinfo_p2").innerHTML   = lang.lang_mapinfo_p2;
			
			document.getElementById("lang_CA_countries").innerHTML = lang.lang_CA_countries;
			document.getElementById("lang_KAZAKHSTAN").innerHTML   = lang.lang_KAZAKHSTAN;
			document.getElementById("lang_KYRGYZSTAN").innerHTML   = lang.lang_KYRGYZSTAN;
			document.getElementById("lang_TAJIKISTAN").innerHTML   = lang.lang_TAJIKISTAN;
			document.getElementById("lang_TURKMENISTAN").innerHTML = lang.lang_TURKMENISTAN;
			document.getElementById("lang_UZBEKISTAN").innerHTML   = lang.lang_UZBEKISTAN;
			
			document.getElementById("lang_bordered").innerHTML     = lang.lang_bordered;
			document.getElementById("lang_AFGHANISTAN").innerHTML  = lang.lang_AFGHANISTAN;
			document.getElementById("lang_CHINA").innerHTML        = lang.lang_CHINA;
			document.getElementById("lang_IRAN").innerHTML         = lang.lang_IRAN;
			document.getElementById("lang_MONGOLIA").innerHTML     = lang.lang_MONGOLIA;
			document.getElementById("lang_RUSSIA").innerHTML       = lang.lang_RUSSIA;
     

        });


}
	

		
		
	
	